<template>
  <div class="about" ondragstart="return false">
    <span @click="moveToBack" class="back">
      <i class="fas fa-arrow-left"></i>
    </span>
    <div class="about_grid">
      <div class="about_con about_left_size">
        <div class="menu">
          <div class="active" data-value="1">
            <span>porest</span>
          </div>
          <div data-value="2">
            <span>팀소개</span>
          </div>
          <div data-value="3">
            <span>후원</span>
          </div>
          <div data-value="4">
            <span>고객센터</span>
          </div>
        </div>
      </div>
      <div class="about_con about_right_size">
        <ul class="about_content">
          <li class="active">
            <div class="aboutporest">
              <p class="aboutporest_info1_1">
                porest
              </p>
              <p class="aboutporest_info2">
                ( post + rest )
              </p>
              <p class="aboutporest_info3">
                우편을 통해 당신의 고민을 나눕니다.
              </p>
              <p class="aboutporest_info3_1">
                지치고 힘든 사람들을 위한 소통의 공간
                <br />마음을 터놓을 수 있는 따뜻한 공간
              </p>
              <p class="aboutporest_info3_2">
                porest에 오신 여러분 환영합니다.
              </p>
            </div>
          </li>

          <li>
            <div class="aboutteam">
              <!-- <div class="aboutteam_name"><img src="../assets/images/OJS_2.png" alt=""></div> -->
              <p class="aboutteam_info1">
                Guardians of porest
              </p>
              <div class="aboutteam_leader">
                <div class="aboutteam_image">
                  <img src="@/assets/image/teamimage.png" alt="" />
                </div>
                <div class="aboutteam_info">
                  <p class="info1">
                    porest를 지키고 있는 Guardians of porest팀입니다.
                  </p>
                  <p class="info2">
                    누구에게나 필요한 서비스를 만들기 위해 최선을
                    다하겠습니다.<br />
                    오늘 저희 porest를 방문해주신 모든 분들 항상 감사합니다.
                  </p>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div class="aboutsupport">
              <p class="support_info_1">
                porest는 치료가 필요하지만 경제적으로 힘든 분들을 후원하고
                있습니다.
              </p>
              <p class="support_info_2">
                저희와 뜻을 함께하는 분들의 후원을 기다립니다.
              </p>
              <img src="@/assets/image/qrcode.jpg" alt="" />

              <p class="support_info_3">
                5000원 이상의 후원을 하신 분들에게는 vr키트를 보내드립니다.
              </p>
              <p class="support_info_4">
                vr키트는 porest 카카오톡 고객센터로 문의해주세요.
              </p>
              <img src="@/assets/image/vrkit.png" alt="" />
              <p class="support_info_5">
                # 후원내역은 매년 1월1일 공개됩니다 #
              </p>
            </div>
          </li>

          <li>
            <div class="aboutcontact">
              <div class="contactinfo_title">
                문의사항이 있으신 경우 아래 오픈채팅방으로 메세지를 보내주시면
                빠른 시일내에 답변드리겠습니다.
              </div>
              <img src="@/assets/image/qrcode2.jpg" alt="" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import init from '@/assets/js/main/AboutPage.js';

export default {
  mounted() {
    init.init();
  },
  data() {
    return {
      message_senderId: localStorage.getItem('user_id'),
      message_title: '',
      message_receiverId: 'admin',
      message_content: '',
    };
  },
  methods: {
    moveToBack() {
      this.$router.go(-1);
    },
    sendDM() {
      http
        .post('/message/sendMessage', {
          message_senderId: this.message_senderId,
          message_title: this.message_title,
          message_receiverId: this.message_receiverId,
          message_content: this.message_content,
        })
        .then(() => {
          alert('전송 완료');
          this.message_title = '';
          this.message_content = '';
        });
    },
  },
};
</script>

<style scoped src="@/assets/css/main/AboutPage.css"></style>
