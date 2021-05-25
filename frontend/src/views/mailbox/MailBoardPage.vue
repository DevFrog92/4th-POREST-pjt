<template>
  <div class="body">
    <span @click="goOneStepBack" class="oneStepBack">
      <i class="fas fa-arrow-left"></i>
    </span>
    <detail-modal v-if="$store.state.openBoardModal" class="modal">
      <mail-detail-book></mail-detail-book>
    </detail-modal>
    <div class="container">
      <!-- <div class="book-board" @click="openModal">
        <div class="cover"></div>
        <h2>사연 <span>제목</span></h2>
      </div> -->
      <div v-for="(n, idx) in boardList.content" :key="idx">
        <div class="wrapper" @click="openModal(n['counselId'])">
          <div class="box">
            <div class="box-container">
              <p>{{ n['title'] }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getBoardList } from '@/api/board';
import DetailModal from '@/components/mail/mailBoard/DetailModal';
import MailDetailBook from '@/components/mail/mailBoard/MailDetailBook';
export default {
  components: {
    DetailModal,
    MailDetailBook,
  },
  data() {
    return {
      pageNumber: 0,
      pageSize: 7,
      boardList: [],
    };
  },
  created() {
    this.loadBoardList();
  },
  methods: {
    openModal(n) {
      this.$store.commit('getBoardModalStatus', true);
      this.$store.commit('getPageNumbers', n);
      console.log(n);
    },
    goOneStepBack() {
      history.go(-1);
    },
    async loadBoardList() {
      try {
        let { data } = await getBoardList(this.pageNumber, this.pageSize);
        this.boardList = data;
        console.log(this.boardList);
      } catch (error) {
        console.log(error);
      }
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
  z-index: 5000;
  position: relative;
}

.container {
  /* background: chartreuse; */
  width: 70%;
  height: 80%;
  padding: 3vh 3vw 3vh 3vw;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  border-radius: 25px;
}

.wrapper {
  float: left;
}

.wrapper .box {
  width: 12vw;
  height: 23vh;
  border-radius: 15px;
  transition: transform 500ms ease-out;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(30px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin-right: 0.5vw;
  margin-left: 0.9vw;
  margin-bottom: 2.5vh;
  padding: 0.8vw;
  cursor: pointer;
}

.box p {
  line-height: 1.9;
  color: #fff;
  font-family: 'Love_son';
  font-size: 20px;
}

.wrapper .box:before {
  width: 60%;
  height: 100%;
  top: 0%;
  left: -125%e;
  transform: skew(45deg);
  position: absolute;
  animation-direction: left;
  transition-duration: 500ms;
}

.wrapper .box:hover {
  transform: translateY(-5%);
}

/* 책 */

.book-board {
  position: relative;
  top: 0;
  cursor: pointer;
  width: 10vw;
  height: 27vh;
  background: #fff;
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

.oneStepBack {
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 1.3vw;
  color: #fff;
  cursor: pointer;
}
</style>
