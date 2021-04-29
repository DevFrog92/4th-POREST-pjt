package com.hanmaum.counseling.global;

import com.hanmaum.counseling.error.ErrorResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import javax.validation.Path;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

@ControllerAdvice
@Slf4j
public class GlobalExceptionController {

    //Request Body 유효성 검사시 발생하는 예외 핸들링
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleMethodArgumentNotValidException(MethodArgumentNotValidException e){
        Map<String, String> errorResponse = new ConcurrentHashMap<>();
        e.getBindingResult().getAllErrors()
                .forEach(error->errorResponse.put(((FieldError) error).getField(), error.getDefaultMessage()));
        return ResponseEntity.badRequest().body(errorResponse);
    }

    //엔티티의 제약조건이 위배되면 발생하는 예외 핸들링
    @ExceptionHandler(value = ConstraintViolationException.class) // 유효성 검사 실패 시 발생하는 예외를 처리
    public ResponseEntity<?> handleException(ConstraintViolationException e) {
        Set<ConstraintViolation<?>> constraintViolations = e.getConstraintViolations();
        Set<String> errorResponse = constraintViolations.stream()
                .map(this::mappingErrorMessage)
                .collect(Collectors.toUnmodifiableSet());
        return ResponseEntity.badRequest().body(errorResponse);
    }

    private String mappingErrorMessage(ConstraintViolation<?> cv){
        final String path = cv.getPropertyPath().toString();
        final String property = path.substring(path.lastIndexOf('.') + 1);
        return String.format("{} is {}.{}", property, cv.getInvalidValue(), cv.getMessage());
    }

    //나머지 예외는 서버 에러로 처리
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleAll(Exception e){
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(ErrorResponse.builder()
                        .message(e.getMessage())
                        .code(e.toString()).
                build());
    }
}