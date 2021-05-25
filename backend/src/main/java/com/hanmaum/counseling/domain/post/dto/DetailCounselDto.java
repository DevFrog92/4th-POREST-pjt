package com.hanmaum.counseling.domain.post.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
@ToString
public class DetailCounselDto {
    private Long counselId;
    private String writerNickname;
    private String counsellorNickname;
    private List<LetterReplyDto> detail;

    public DetailCounselDto(Long counselId,String writerNickname, String counsellorNickname){
        detail = new ArrayList<>();
        this.counselId = counselId;
        this.writerNickname = writerNickname;
        this.counsellorNickname = counsellorNickname;
    }
}
