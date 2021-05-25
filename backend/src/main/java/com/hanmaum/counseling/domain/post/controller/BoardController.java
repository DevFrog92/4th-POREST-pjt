package com.hanmaum.counseling.domain.post.controller;

import com.hanmaum.counseling.domain.post.dto.CounselBoardDto;
import com.hanmaum.counseling.domain.post.dto.DetailCounselDto;
import com.hanmaum.counseling.domain.post.service.board.CounselBoardService;
import com.hanmaum.counseling.security.CustomUserDetails;
import com.hanmaum.counseling.utils.AuthUtil;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@Api(tags = {"Board"})
@RestController
@RequiredArgsConstructor
@RequestMapping("/counsel-boards")
public class BoardController {
    private final CounselBoardService counselBoardService;

    @GetMapping("")
    public ResponseEntity<Page<CounselBoardDto>> getCounselPage(Pageable pageable){
        Page<CounselBoardDto> result = counselBoardService.getCounsels(pageable);
        return ResponseEntity.ok(result);
    }
    @GetMapping("/{counselId}")
    public ResponseEntity<DetailCounselDto> getDetailCounsel(@PathVariable Long counselId){
        DetailCounselDto result = counselBoardService.getCounsel(counselId);
        return ResponseEntity.ok(result);
    }
    @PutMapping("/{counselId}")
    public ResponseEntity<String> closeCounsel(@PathVariable Long counselId, Authentication auth){
        Long userId = AuthUtil.getIdFromAuthentication(auth);
        counselBoardService.closeCounsel(counselId, userId);
        return ResponseEntity.ok("close");
    }
}
