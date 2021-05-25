package com.hanmaum.counseling.domain.post.service.board;

import com.hanmaum.counseling.domain.post.dto.CounselBoardDto;
import com.hanmaum.counseling.domain.post.dto.DetailCounselDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CounselBoardService {
    Page<CounselBoardDto> getCounsels(Pageable pageable);
    Long closeCounsel(Long counselId, Long userId);
    DetailCounselDto getCounsel(Long counselId);
}
