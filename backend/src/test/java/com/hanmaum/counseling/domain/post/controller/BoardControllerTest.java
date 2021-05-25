package com.hanmaum.counseling.domain.post.controller;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.hanmaum.counseling.commons.ControllerTestConfig;
import com.hanmaum.counseling.domain.account.entity.RoleType;
import com.hanmaum.counseling.domain.account.entity.User;
import com.hanmaum.counseling.domain.account.repository.UserRepository;
import com.hanmaum.counseling.domain.account.service.AccountService;
import com.hanmaum.counseling.domain.post.dto.*;
import com.hanmaum.counseling.domain.post.service.LetterService;
import com.hanmaum.counseling.domain.post.service.board.CounselBoardService;
import com.hanmaum.counseling.domain.post.service.counsel.CounselService;
import com.hanmaum.counseling.domain.post.service.story.StoryService;
import com.hanmaum.counseling.security.CustomUserDetails;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.user;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@Transactional
@ActiveProfiles("test")
@Import(ControllerTestConfig.class)
class BoardControllerTest {
    @Autowired
    MockMvc mockMvc;
    @Autowired
    ObjectMapper mapper;
    @Autowired
    StoryService storyService;
    @Autowired
    AccountService accountService;
    @Autowired
    CounselService counselService;
    @Autowired
    LetterService letterService;
    @Autowired
    UserRepository userRepository;
    @Autowired
    CounselBoardService counselBoardService;
    @Autowired
    PasswordEncoder encoder;

    @BeforeEach
    void setUp() {
        User user = User.builder()
                .nickname("a")
                .email("user@test.com")
                .temperature(36)
                .role(RoleType.ROLE_USER)
                .password(encoder.encode("1234"))
                .build();
        User counsellor = User.builder()
                .nickname("b")
                .email("counsellor1@test.com")
                .temperature(36)
                .role(RoleType.ROLE_USER)
                .password(encoder.encode("1234"))
                .build();
        User counsellor2 = User.builder()
                .nickname("c")
                .email("counsellor2@test.com")
                .temperature(36)
                .role(RoleType.ROLE_USER)
                .password(encoder.encode("1234"))
                .build();
        userRepository.save(user);
        userRepository.save(counsellor);
        userRepository.save(counsellor2);

        Long storyId = storyService.putStory(new FormDto("첫번째 사연", "흑흑 너무 슬퍼요", null), user.getId());
        Long storyId2 = storyService.putStory(new FormDto("두번째 사연", "너무 힘드네요", null), user.getId());

        //첫번째 상담사가 첫번째 사연을 선택
        SimpleCounselDto tempDto = storyService.pickStory(storyId, counsellor.getId());
        //사연을 읽음
        letterService.readLetter(tempDto.getDetail().getLetterId(), counsellor.getId());
        //답장
        Long letterId1 = letterService.writeLetter(new FormDto( "첫번째 상담사의 답변입니다", "그러시군요 ㅠㅠ", null),
                tempDto.getCounselId(), tempDto.getDetail().getLetterId(), counsellor.getId());

        //사연자가 다시 답장
        letterService.readLetter(letterId1, user.getId());
        Long replyId1 = letterService.writeLetter(new FormDto("사연자의 답변입니다", "네 정말 고맙습니다.", null),
                tempDto.getCounselId(), letterId1, user.getId());
        EvaluateDto evaluateDto = new EvaluateDto(true, EvaluateDto.EvaluateType.GOOD);
        counselService.finishCounsel(evaluateDto, tempDto.getCounselId(), user.getId());

        //두번째 상담사가 첫번째 사연을 선택
        SimpleCounselDto tempDto2 = storyService.pickStory(storyId, counsellor2.getId());
        //사연을 읽음
        letterService.readLetter(tempDto2.getDetail().getLetterId(), counsellor2.getId());
        //답장
        Long letterId2 = letterService.writeLetter(new FormDto("두번째 상담사의 답변입니다", "그러시군요 ㅋㅋ", null),
                tempDto2.getCounselId(), tempDto2.getDetail().getLetterId(), counsellor2.getId());
        counselService.finishCounsel(evaluateDto, tempDto2.getCounselId(), user.getId());
    }

    @Test
    @DisplayName("공개된 사연 가져오기 페이지 0 성공 200")
    void get_counsel_page0_success() throws Exception{
        //given
        User user = accountService.findByEmail("user@test.com");
        //when
        ResultActions actions = mockMvc.perform(get("/counsel-boards?page=0&size=1")
                .contentType(MediaType.APPLICATION_JSON)
                .with(user(CustomUserDetails.fromUserToCustomUserDetails(user))));

        //then
        MvcResult mvcResult = actions
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.content").isNotEmpty())
                .andDo(print())
                .andReturn();
    }

    @Test
    @DisplayName("공개된 사연 가져오기 페이지 1 성공 200")
    void get_counsel_page1_success() throws Exception{
        //given
        User user = accountService.findByEmail("user@test.com");
        //when
        ResultActions actions = mockMvc.perform(get("/counsel-boards?page=1&size=1")
                .contentType(MediaType.APPLICATION_JSON)
                .with(user(CustomUserDetails.fromUserToCustomUserDetails(user))));

        //then
        MvcResult mvcResult = actions
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.content").isNotEmpty())
                .andDo(print())
                .andReturn();
    }

    @Test
    @DisplayName("상담 상세 내역 반환 성공")
    void get_detail_counsel_success() throws Exception{
        //given
        User user = accountService.findByEmail("user@test.com");
        Page<CounselBoardDto> counsels = counselBoardService.getCounsels(PageRequest.of(0, 1));
        Long counselId = counsels.getContent().get(0).getCounselId();
        //when
        ResultActions actions = mockMvc.perform(get("/counsel-boards/" + counselId)
                .contentType(MediaType.APPLICATION_JSON)
                .with(user(CustomUserDetails.fromUserToCustomUserDetails(user))));

        //then
        MvcResult mvcResult = actions
                .andExpect(status().isOk())
                .andDo(print())
                .andReturn();
    }
}