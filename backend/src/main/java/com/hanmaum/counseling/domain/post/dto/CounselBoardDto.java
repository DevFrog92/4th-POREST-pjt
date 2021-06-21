package com.hanmaum.counseling.domain.post.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class CounselBoardDto {
    private Long counselId;
    private String writerNickname;
    private String counsellorNickname;
    private String title;
    private String content;

    @Builder
    public CounselBoardDto(Long counselId, String writerNickname, String counsellorNickname, String title, String content) {
        this.counselId = counselId;
        this.writerNickname = writerNickname;
        this.counsellorNickname = counsellorNickname;
        this.title = title;
        this.content = content;
    }
}
