package com.hanmaum.counseling.domain.post.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hanmaum.counseling.commons.ControllerTestConfig;
import com.hanmaum.counseling.domain.account.dto.SignupDto;
import com.hanmaum.counseling.domain.account.entity.RoleType;
import com.hanmaum.counseling.domain.account.entity.User;

import com.hanmaum.counseling.domain.account.repository.UserRepository;
import com.hanmaum.counseling.domain.account.service.AccountService;
import com.hanmaum.counseling.domain.post.dto.FormDto;
import com.hanmaum.counseling.domain.post.dto.SimpleStoryDto;
import com.hanmaum.counseling.domain.post.service.story.StoryService;
import com.hanmaum.counseling.security.CustomUserDetails;
import com.hanmaum.counseling.utils.RedisUtil;
import org.apache.commons.lang3.RandomStringUtils;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.user;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@Transactional
@ActiveProfiles("test")
@Import(ControllerTestConfig.class)
class StoryControllerTest {
    @Autowired
    MockMvc mockMvc;

    @Autowired
    StoryService storyService;

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    ObjectMapper mapper;

    @BeforeEach
    void setUp(){
        User user = User.builder()
                .nickname("a")
                .email("user@test.com")
                .role(RoleType.ROLE_USER)
                .password(encoder.encode("1234"))
                .build();
        User counsellor = User.builder()
                .nickname("b")
                .email("counsellor1@test.com")
                .role(RoleType.ROLE_USER)
                .password(encoder.encode("1234"))
                .build();
        User counsellor2 = User.builder()
                .nickname("c")
                .email("counsellor2@test.com")
                .role(RoleType.ROLE_USER)
                .password(encoder.encode("1234"))
                .build();

        userRepository.save(user);
        userRepository.save(counsellor);

        storyService.putStory(new FormDto("????????? ??????", "?????? ?????? ?????????",null), user.getId());
        storyService.putStory(new FormDto("????????? ??????", "?????? ????????????",null), user.getId());
    }

    @Test
    @DisplayName("?????? ?????? ????????? 201 ??????")
    void put_story_success() throws Exception{
        //given
        User user = userRepository.findByEmail("user@test.com").get();
        FormDto form = new FormDto("?????? ??????", "?????? ??????", LocalDateTime.now());
        String content = mapper.writeValueAsString(form);
        //when
        ResultActions actions = mockMvc.perform(post("/stories")
                .content(content)
                .contentType(MediaType.APPLICATION_JSON)
                .characterEncoding("UTF-8")
                .with(user(CustomUserDetails.fromUserToCustomUserDetails(user)))
        );
        //then
        actions.andExpect(status().isCreated())
                .andDo(print());
    }

    @Test
    @DisplayName("????????? ?????? ?????? ????????? ?????? 400 ??????")
    void put_story_fail() throws Exception{
        //given
        User user = userRepository.findByEmail("user@test.com").get();
        FormDto form = new FormDto("", "?????? ??????", LocalDateTime.now());
        String content = mapper.writeValueAsString(form);
        //when
        ResultActions actions = mockMvc.perform(post("/stories")
                .content(content)
                .contentType(MediaType.APPLICATION_JSON)
                .with(user(CustomUserDetails.fromUserToCustomUserDetails(user)))
        );
        //then
        actions.andExpect(status().isBadRequest())
                .andDo(print());
    }

    @Test
    @DisplayName("????????? ?????? ?????? ???????????? ????????? 200 ??????")
    void get_candidates_success() throws Exception{
        //given
        User counsellor = userRepository.findByEmail("counsellor1@test.com").get();
        //when
        ResultActions actions = mockMvc.perform(get("/stories/candidates")
                .contentType(MediaType.APPLICATION_JSON)
                .characterEncoding("UTF-8")
                .with(user(CustomUserDetails.fromUserToCustomUserDetails(counsellor)))
        );
        //then
        actions.andExpect(status().isOk())
                .andDo(print());
    }

    @Test
    @DisplayName("?????? ????????? ?????? ?????? ????????? 200 ??????")
    void pick_story_success() throws Exception{
        //given
        User counsellor = userRepository.findByEmail("counsellor1@test.com").get();
        List<SimpleStoryDto> candidates = storyService.getCandidates(counsellor.getId());
        Long storyId = candidates.get(0).getStoryId();

        //when
        ResultActions actions = mockMvc.perform(post("/stories/" + storyId)
                .contentType(MediaType.APPLICATION_JSON)
                .with(user(CustomUserDetails.fromUserToCustomUserDetails(counsellor)))
        );

        //then
        actions.andExpect(status().isOk())
                .andExpect(jsonPath("$.counselId").isNumber())
                .andExpect(jsonPath("$.detail").isNotEmpty())
                .andDo(print());
    }

    @Test
    @DisplayName("?????? ?????? ????????? 404 ??????")
    void pick_story_fail() throws Exception{
        //given
        User counsellor = userRepository.findByEmail("counsellor1@test.com").get();
        Long storyId = 10000L;
        //when
        ResultActions actions = mockMvc.perform(post("/stories/" + storyId)
                .contentType(MediaType.APPLICATION_JSON)
                .with(user(CustomUserDetails.fromUserToCustomUserDetails(counsellor)))
        );

        //then
        actions.andExpect(status().isNotFound())
                .andDo(print());
    }
}