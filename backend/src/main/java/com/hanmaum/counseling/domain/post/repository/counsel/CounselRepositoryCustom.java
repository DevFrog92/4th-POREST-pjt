package com.hanmaum.counseling.domain.post.repository.counsel;

import com.hanmaum.counseling.domain.post.dto.CounselBoardDto;
import com.hanmaum.counseling.domain.post.dto.DetailCounselDto;
import com.hanmaum.counseling.domain.post.dto.LetterReplyDto;
import com.hanmaum.counseling.domain.post.entity.Counsel;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface CounselRepositoryCustom {
    Optional<Counsel> findByCounselId(Long counselId);
    List<Counsel> findByCounsellorId(Long counsellorId);
    List<Counsel> findByUserId(Long userId);
    Page<CounselBoardDto> findOpenCounsels(Pageable pageable);
}
