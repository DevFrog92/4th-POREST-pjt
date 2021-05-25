package com.hanmaum.counseling.domain.account.controller;

import com.hanmaum.counseling.domain.account.service.UserService;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@Api(tags = {"User"})
@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PutMapping("/profile-img")
    public ResponseEntity<?> updateProfileImg(MultipartFile image, HttpServletRequest request) {
        Map<String, Object> result = userService.updateProfileImg(image, request);
        return ResponseEntity.ok(result);
    }

    @PutMapping("/profileImg/{imgNumber}")
    public ResponseEntity<?> updateProfileImgNumber(@PathVariable Long imgNumber, HttpServletRequest request){
        userService.updateProfileImgNumber(imgNumber, request);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
    @GetMapping("/temperature")
    public ResponseEntity<?> compareTemperature(int temp, HttpServletRequest request){
        Map<String, Object> result = userService.compareTemperature(temp, request);
        return ResponseEntity.ok(result);
    }
}