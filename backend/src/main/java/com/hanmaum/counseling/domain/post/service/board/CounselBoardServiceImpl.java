package com.hanmaum.counseling.domain.post.service.board;

import com.hanmaum.counseling.domain.post.dto.CounselBoardDto;
import com.hanmaum.counseling.domain.post.dto.DetailCounselDto;
import com.hanmaum.counseling.domain.post.dto.LetterReplyDto;
import com.hanmaum.counseling.domain.post.entity.Counsel;
import com.hanmaum.counseling.domain.post.entity.Letter;
import com.hanmaum.counseling.domain.post.repository.counsel.CounselRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class CounselBoardServiceImpl implements CounselBoardService{
    private final CounselRepository counselRepository;

    @Override
    public Page<CounselBoardDto> getCounsels(Pageable pageable) {
        return counselRepository.findOpenCounsels(pageable);
    }

    @Override
    public DetailCounselDto getCounsel(Long counselId) {
        Counsel counsel = counselRepository.findByCounselId(counselId)
                .filter(c->c.getIsOpened()).orElseThrow();
        return convertToDetailCounselDto(counselId, counsel);
    }

    private DetailCounselDto convertToDetailCounselDto(Long counselId, Counsel counsel) {
        DetailCounselDto result = new DetailCounselDto(counselId, counsel.getStory().getWriterNickName(), counsel.getCounsellorNickname());
        List<Letter> letters = counsel.getLetters();
        int len = letters.size();
        for(int i = 0; i+1<len; i+=2){
            Letter letter  = letters.get(i);
            Letter reply = letters.get(i+1);
            result.getDetail().add(LetterReplyDto.of(letter, reply));
        }
        if(len%2 == 1){
            Letter lastLetter = letters.get(len-1);
            result.getDetail().add(LetterReplyDto.builder().letter(lastLetter).build());
        }
        return result;
    }

    @Override
    public Long closeCounsel(Long counselId, Long userId) {
        Counsel counsel = counselRepository.findByCounselId(counselId)
                .filter(c -> c.getStory().getWriterId() == userId).orElseThrow();
        counsel.setOpenStatus(false);
        return counselId;
    }
}
