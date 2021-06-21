<template>
  <div class="mail_box_main_wrapper">
    <span @click="moveToBack" class="back">
      <i class="fas fa-arrow-left"></i>
    </span>
    <div class="mailbox_main_title">
      <div class="mailbox_name">{{ $store.state.nickname }}의 우체통</div>
      <div class="mailbox_title">
        심리 상담은 자격증이 있어야 되지만, 고민 대화는 따뜻한 마음씨만 있으면
        됩니다.
      </div>
    </div>
    <div class="postmenu_wrapper">
      <div class="postmenu1" @click="goToStoryLetterPage">
        <div class="postmenu1_content">
          <h1 class="postmenu1_title">편지쓰기</h1>
          <h2 class="postmenu1_subtitle">당신의 고민은 무엇인가요?</h2>

          <div class="pen_wrapper">
            <img class="pen_img" src="@/assets/image/pen.png" alt="" />
          </div>
        </div>
      </div>

      <div class="postmenu2" @click="goToRandomMail">
        <div class="postmenu2_content">
          <h1 class="postmenu2_title">사연 고르기</h1>
          <h2 class="postmenu2_subtitle">당신의 경험을 공유해주세요.</h2>
          <div class="post_wrapper">
            <img class="post_img" src="@/assets/image/postbox.png" alt="" />
          </div>
        </div>
      </div>
      <div class="postmenu3" @click="goToMyReceivedMail">
        <div class="postmenu3_content">
          <h1 class="postmenu3_title">편지함</h1>
          <h2 class="postmenu3_subtitle">편지에 고민을 담아 주고받아요.</h2>

          <div class="letter_wrapper">
            <img class="letter_img" src="@/assets/image/letter.png" alt="" />
          </div>
          <div class="letter_wrapper2">
            <img class="letter2_img" src="@/assets/image/letter.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="box-wrapper">
      <div class="box" @click="goToBoard">
        <div class="side-1">
          <div class="side inner-side flap-1"></div>
          <div class="side inner-side flap-2"></div>
        </div>
        <div class="side side-2">
          <p>편지 모음집<br />바로가기🏃‍♂️</p>
        </div>
        <div class="side side-3"></div>
        <div class="side side-4"></div>
        <div class="side side-5"></div>
        <div class="side side-6"></div>
        <span class="box_papers"></span>
        <span class="box_papers"></span>
        <span class="box_papers"></span>
        <span class="box_papers"></span>
        <span class="box_papers"></span>
        <span class="box_papers"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const menu1 = document.querySelector('.postmenu1');
    const menu2 = document.querySelector('.postmenu2');
    const menu3 = document.querySelector('.postmenu3');
    menu1.addEventListener('mouseenter', () => {
      this.$emit;
    });
  },
  methods: {
    goToBoard() {
      this.$router.push({ name: 'MailBoard' });
    },
    moveToBack() {
      this.$router.push({ name: 'MainIsland' });
    },
    goToStoryLetterPage(e) {
      e.target.classList.add('click1');
      setTimeout(() => {
        this.$router.push({ name: 'WriteLetter' });
      }, 100);
    },
    goToRandomMail(e) {
      e.target.classList.add('click2');
      setTimeout(() => {
        this.$router.push({ name: 'RandomMail' });
      }, 100);
    },
    goToMyReceivedMail(e) {
      e.target.classList.add('click3');
      setTimeout(() => {
        this.$router.push({ name: 'MyReceivedMail' });
      }, 100);
    },
  },
  created() {
    let token = this.$store.getters.getAuthToken;
    if (token == '' || token == null) {
      alert('로그인이 필요합니다.');
      this.$router.push({ name: 'Login' });
    }
  },
};
</script>

<style scoped src="@/assets/css/mail/MailBoxPage.css"></style>
