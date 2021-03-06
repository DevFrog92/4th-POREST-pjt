package com.hanmaum.counseling.domain.post.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hanmaum.counseling.commons.ControllerTestConfig;
import com.hanmaum.counseling.domain.account.entity.RoleType;
import com.hanmaum.counseling.domain.account.entity.User;
import com.hanmaum.counseling.domain.account.repository.UserRepository;
import com.hanmaum.counseling.domain.account.service.AccountService;
import com.hanmaum.counseling.domain.emotion.dto.EmotionSimpleDto;
import com.hanmaum.counseling.domain.post.dto.*;
import com.hanmaum.counseling.domain.post.service.LetterService;
import com.hanmaum.counseling.domain.post.service.counsel.CounselService;
import com.hanmaum.counseling.domain.post.service.story.StoryService;
import com.hanmaum.counseling.security.CustomUserDetails;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.user;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@Transactional
@ActiveProfiles("test")
@Import(ControllerTestConfig.class)
class CounselControllerTest {
    @Autowired
    MockMvc mockMvc;
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
    PasswordEncoder encoder;
    @Autowired
    ObjectMapper mapper;
    @Autowired
    EntityManager em;

    @BeforeEach
    void setUp(){
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

        Long storyId = storyService.putStory(new FormDto("????????? ??????", "?????? ?????? ?????????", null), user.getId());
        Long storyId2 = storyService.putStory(new FormDto("????????? ??????", "?????? ????????????", null), user.getId());

        //????????? ???????????? ????????? ????????? ??????
        SimpleCounselDto tempDto = storyService.pickStory(storyId, counsellor.getId());
        //????????? ??????
        letterService.readLetter(tempDto.getDetail().getLetterId(), counsellor.getId());
        //??????
        Long letterId1 = letterService.writeLetter(new FormDto( "????????? ???????????? ???????????????", "??????????????? ??????", null),
                tempDto.getCounselId(), tempDto.getDetail().getLetterId(), counsellor.getId());

        //???????????? ?????? ??????
        letterService.readLetter(letterId1, user.getId());
        Long replyId1 = letterService.writeLetter(new FormDto("???????????? ???????????????", "??? ?????? ???????????????.", null),
                tempDto.getCounselId(), letterId1, user.getId());


        //????????? ???????????? ????????? ????????? ??????
        SimpleCounselDto tempDto2 = storyService.pickStory(storyId, counsellor2.getId());
        //????????? ??????
        letterService.readLetter(tempDto2.getDetail().getLetterId(), counsellor2.getId());
        //??????
        Long letterId2 = letterService.writeLetter(new FormDto("????????? ???????????? ???????????????", "??????????????? ??????", null),
                tempDto2.getCounselId(), tempDto2.getDetail().getLetterId(), counsellor2.getId());
    }

    @Test
    @DisplayName("????????? ????????? ????????? ?????? ?????? ??????, 200 ??????")
    void get_user_reply_status_success() throws Exception{
        //given
        User user = accountService.findByEmail("user@test.com");
        //when
        ResultActions actions = mockMvc.perform(get("/stories")
                .contentType(MediaType.APPLICATION_JSON)
                .with(user(CustomUserDetails.fromUserToCustomUserDetails(user))));
        //then
        MvcResult mvcResult = actions.andExpect(status().isOk())
                .andDo(print())
                .andReturn();

        String content = mvcResult.getResponse().getContentAsString();
        List<UserStoryStateDto> result = mapper.readValue(content, mapper.getTypeFactory().constructCollectionType(List.class, UserStoryStateDto.class));
        Assertions.assertThat(result).extracting("numOfNewReply").containsExactly(1, 0);
    }
    
    @Test
    @DisplayName("????????? ????????? ?????? ????????? ?????? ??????, 200 ??????")
    void get_counsels_success() throws Exception{
        //given
        User user = accountService.findByEmail("user@test.com");
        List<UserStoryStateDto> userStoryState = storyService.getUserStoryState(user.getId());
        Long storyId = userStoryState.get(0).getStoryId();
        //when
        ResultActions actions = mockMvc.perform(get("/stories/" + storyId + "/counsels")
                .contentType(MediaType.APPLICATION_JSON)
                .with(user(CustomUserDetails.fromUserToCustomUserDetails(user))));

        //then
        MvcResult mvcResult = actions.andExpect(status().isOk())
                .andDo(print())
                .andReturn();

        String content = mvcResult.getResponse().getContentAsString();
        List<UserCounselStateDto> result = mapper.readValue(content, mapper.getTypeFactory().constructCollectionType(List.class, UserCounselStateDto.class));

        Assertions.assertThat(result).extracting("numOfReplies").containsExactly(0, 1);
    }
    @Test
    @DisplayName("????????? ?????? ?????? ????????? ?????? ??????, 200 ??????")
    void get_detail_counsel_success() throws Exception{
        //given
        User user = accountService.findByEmail("user@test.com");
        List<DetailCounselDto> result = counselService.getDetailCounsels(user.getId());
        Long counselId = result.get(0).getCounselId();
        //when
        ResultActions actions = mockMvc.perform(get("/counsels/" + counselId)
                .contentType(MediaType.APPLICATION_JSON)
                .with(user(CustomUserDetails.fromUserToCustomUserDetails(user))));

        //then
        actions.andExpect(status().isOk())
                .andDo(print());
    }
    @Test
    @DisplayName("????????? ???????????? ????????? ???????????? ???, 404 ??????")
    void get_detail_counsel_fail() throws Exception{
        //given
        User user = accountService.findByEmail("user@test.com");
        //when
        ResultActions actions = mockMvc.perform(get("/counsels/"+404L)
                .contentType(MediaType.APPLICATION_JSON)
                .with(user(CustomUserDetails.fromUserToCustomUserDetails(user))));

        //then
        actions.andExpect(status().isNotFound())
                .andDo(print());
    }

    @Test
    @DisplayName("????????? ???????????? ?????? ??????, 200 ??????")
    void get_user_counsel_state_success() throws Exception{
        //given
        User user = accountService.findByEmail("counsellor1@test.com");
        //when
        ResultActions actions = mockMvc.perform(get("/counsels")
                .contentType(MediaType.APPLICATION_JSON)
                .with(user(CustomUserDetails.fromUserToCustomUserDetails(user))));
        //then
        MvcResult mvcResult = actions.andExpect(status().isOk())
                .andDo(print())
                .andReturn();

        String content = mvcResult.getResponse().getContentAsString();
        List<UserCounselStateDto> result = mapper.readValue(content, mapper.getTypeFactory().constructCollectionType(List.class, UserCounselStateDto.class));
        Assertions.assertThat(result).extracting("numOfReplies").containsExactly(1);
    }

    @Test
    @DisplayName("?????? ??????, 200 ??????")
    void finish_counsel() throws Exception{
        //given
        User user = accountService.findByEmail("user@test.com");
        List<UserStoryStateDto> temp1 = storyService.getUserStoryState(user.getId());
        Long storyId = temp1.get(0).getStoryId();
        List<UserCounselStateDto> temp2 = storyService.getCounselStateOfUserWithStory(storyId, user.getId());
        Long counselId = temp2.get(0).getCounselId();
        EvaluateDto dto = new EvaluateDto(true, EvaluateDto.EvaluateType.GOOD);
        String content = mapper.writeValueAsString(dto);
        //when
        ResultActions actions = mockMvc.perform(post("/counsels/" + counselId + "/finish")
                .contentType(MediaType.APPLICATION_JSON)
                .content(content)
                .with(user(CustomUserDetails.fromUserToCustomUserDetails(user))));
        //then
        actions.andExpect(status().isOk())
                .andDo(print());

        List<UserCounselStateDto> temp3 = storyService.getCounselStateOfUserWithStory(storyId, user.getId());
        Assertions.assertThat(temp3.size()).isEqualTo(1);
    }
}