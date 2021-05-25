<template>
  <div class="body">
    <detail-modal v-if="$store.state.openBoardModal" class="modal">
      <mail-detail-book></mail-detail-book>
    </detail-modal>
    <!-- <detail-modal v-if="$store.state.openBoardModal" class="modal">
      <board-all-letters></board-all-letters>
    </detail-modal> -->
    <div class="container">
      <div class="book-board" @click="openModal">
        <div class="cover"></div>
        <h2>사연 <span>제목</span></h2>
        <!-- <span class="writer">Designed by <i>porest</i></span> -->
      </div>
    </div>
  </div>
</template>

<script>
import DetailModal from '@/components/mail/mailBoard/DetailModal';
import MailDetailBook from '@/components/mail/mailBoard/MailDetailBook';
export default {
  components: {
    DetailModal,
    MailDetailBook,
  },
  methods: {
    openModal() {
      this.$store.commit('getBoardModalStatus', true);
    },
  },
};
</script>

<style scoped>
.body {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-image: url('../../assets/image/sky.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  /* background: chartreuse; */
  width: 70%;
  height: 80%;
  padding: 3vh 3vw 3vh 3vw;
}

.book-board {
  position: relative;
  top: 0;
  cursor: pointer;
  width: 10vw;
  /* width: 400px; */
  height: 27vh;
  /* height: 600px; */
  background: #fff;
  /* transform: rotate(-37.5deg) skewX(10deg); */
  /* box-shadow: -1vh 1vw 1vw 2vh rgba(0, 0, 0, 0.5); */
  /* box-shadow: -35px 35px 50px rgba(0, 0, 0, 1); */
  transition: 0.5s;
}

.book-board:hover {
  /* transform: rotate(-37.5deg) skewX(10deg) translate(20px, -20px); */
  /* box-shadow: -50px 50px 100px rgba(0, 0, 0, 1); */
  transform: scale(1.2);
  /* box-shadow: -20px 20px 50px 20px rgba(0, 0, 0, 1); */
}

/* 책 옆쪽 */
.book-board:before {
  content: '';
  width: 1vw;
  height: 100%;
  background: #8a0e0e;
  position: absolute;
  top: 0vw;
  left: 0vw;
  transform: skewY(-45deg) translate(-1vw, -0.5vw);
  box-shadow: inset -10px 0 20px rgba(0, 0, 0, 0.2);
}

/* 책 바닥 */
.book-board:after {
  content: '';
  width: 100%;
  height: 1vw;
  background: #ccc;
  position: absolute;
  bottom: 0vw;
  left: 0vw;
  transform: skewX(-45deg) translate(0.5vw, 1vw);
}

.book-board h2 {
  position: absolute;
  bottom: 3vh;
  left: 1vw;
  font-size: 2vw;
  line-height: 2.3vw;
}

.modal {
  z-index: 2;
}
</style>
