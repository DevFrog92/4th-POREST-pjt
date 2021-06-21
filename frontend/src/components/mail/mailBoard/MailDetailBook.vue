<template>
  <div class="body-detail">
    <!-- <div v-for="n in pages" :key="n"> -->
    <div class="book-page">
      <div class="left">
        <p class="left-title">{{ leftTitle }}</p>
        <p class="left-content">{{ leftContent }}</p>
        <p class="left-writer">by. {{ writer }}</p>
      </div>
      <div class="right">
        <p class="right-title">{{ rightTitle }}</p>
        <p class="right-content">{{ rightContent }}</p>
        <p class="right-writer">by. {{ counsellor }}</p>
      </div>
    </div>
    <div class="buttons">
      <span @click="goBefore"><i class="fas fa-arrow-circle-left"></i></span>
      <span @click="goAfter"><i class="fas fa-arrow-circle-right"></i></span>
    </div>
    <div class="page-left">
      <span>{{ countCurrentPage }} / {{ pages }}</span>
    </div>
    <span class="delete" v-if="showDelete === true">
      <button @click="deleteDetail">삭제하기</button>
    </span>
    <!-- </div> -->
    <!-- Book -->
    <!-- <div id="book" class="book">
        <div v-if="n === 1">
          <div id="p1" class="paper">
            <div class="front" @click="goNextPage(n)">
              <div id="f1" class="front-content">
                <h1>{{ title }}</h1>
              </div>
            </div>
            <div class="back" @click="goPrevPage(n)">
              <div :id="`b1`" class="back-content">
                aa
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div :id="`p${n}`" class="paper">
            <div class="front" @click="goNextPage(n)">
              <div :id="`f${n}`" class="front-content">
                <h1>답장 {{ n }}</h1>
              </div>
            </div>
            <div class="back" @click="goPrevPage(n)">
              <div :id="`b${n}`" class="back-content">
                <h1>사연 {{ n }}</h1>
              </div>
            </div>
          </div>
        </div>
      </div> -->
  </div>
</template>

<script>
import { getBoardDetail, updateDetailStatus } from '@/api/board';
export default {
  data() {
    return {
      pages: 0,
      currentLocation: 0,
      maxLocation: 0,
      detailData: {},
      title: '',
      leftTitle: '',
      leftContent: '',
      rightTitle: '',
      rightContent: '',
      number: 0,
      writer: '',
      counsellor: '',
      showDelete: Boolean,
    };
  },
  created() {
    this.currentLocation = 1;
    this.maxLocation = this.pages + 1;
    this.number = 0;
    this.getLettersDetail();
  },
  // mounted() {
  //   this.enterPosition();
  // },
  computed: {
    countCurrentPage() {
      return this.number + 1;
    },
  },
  methods: {
    getDetails() {
      this.leftTitle = this.detailData['detail'][this.number]['letter'][
        'detail'
      ]['title'];
      this.leftContent = this.detailData['detail'][this.number]['letter'][
        'detail'
      ]['content'];
      this.rightTitle = this.detailData['detail'][this.number]['reply'][
        'detail'
      ]['title'];
      this.rightContent = this.detailData['detail'][this.number]['reply'][
        'detail'
      ]['content'];
    },
    goBefore() {
      if (this.number > 0) {
        this.number--;
      }
      this.getDetails();
    },
    goAfter() {
      if (this.number < this.pages - 1) {
        this.number++;
      }
      this.getDetails();
    },
    // enterPosition() {
    //   let list = [];
    //   for (let n = 1; n < this.pages + 1; n++) {
    //     list.push(n);
    //   }
    //   let list2 = list.slice();
    //   list2.reverse();

    //   for (let i = 0; i < this.pages; i++) {
    //     let num = i + 1;
    //     let paper = document.querySelector(`#p${num}`);
    //     paper.style.zIndex = list2[i];
    //   }
    // },
    // goPrevPage(n) {
    //   console.log('전');
    //   console.log(n);
    //   console.log(this.currentLocation);
    //   console.log(this.maxLocation);
    //   let paper = document.querySelector(`#p${n}`);
    //   // let paper2 = document.querySelector(`#b${n}`);
    //   // paper.style.zIndex = n;
    //   // paper2.style.zIndex = n;
    //   // paper.classList.remove('flipped');
    //   // this.currentLocation--;
    //   if (this.currentLocation > 1) {
    //     if (this.currentLocation === 2) {
    //       this.closeBook(true);
    //       paper.classList.remove('flipped');
    //       paper.style.zIndex = this.pages;
    //       console.log('open!');
    //       // } else if (this.currentLocation === 2) {
    //     } else if (this.currentLocation === this.pages) {
    //       console.log('open!!');
    //       this.openBook();
    //       paper.classList.remove('flipped');
    //       paper.style.zIndex = 1;
    //     } else {
    //       paper.classList.remove('flipped');
    //       paper.style.zIndex = 10;
    //       console.log('open!!!');
    //     }
    //   }
    //   this.currentLocation--;
    // },
    // goNextPage(n) {
    //   console.log('후');
    //   console.log(n);
    //   console.log(this.currentLocation);
    //   console.log(this.maxLocation);
    //   let paper = document.querySelector(`#p${n}`);
    //   // paper.style.zIndex = 2;
    //   // paper.classList.add('flipped');
    //   // this.currentLocation++;
    //   if (this.currentLocation < this.maxLocation) {
    //     if (this.currentLocation === 1) {
    //       this.openBook();
    //       paper.classList.add('flipped');
    //       paper.style.zIndex = 1;
    //     } else if (this.currentLocation === this.pages) {
    //       paper.classList.add('flipped');
    //       paper.style.zIndex = this.pages;
    //       // paper.style.zIndex = 3;
    //       this.closeBook(false);
    //     } else {
    //       paper.classList.add('flipped');
    //       paper.style.zIndex = n;
    //       // paper.style.zIndex = 2;
    //     }
    //     this.currentLocation++;
    //   }
    // },
    // openBook() {
    //   const book = document.querySelector('#book');
    //   book.style.transform = 'translateX(50%)';
    // },
    // closeBook(isAtBeginning) {
    //   const book = document.querySelector('#book');
    //   if (isAtBeginning) {
    //     book.style.transform = 'translateX(0%)';
    //   } else {
    //     book.style.transform = 'translateX(100%)';
    //   }
    // },
    async getLettersDetail() {
      const id = this.$store.state.pageNumbers;
      try {
        let { data } = await getBoardDetail(id);
        this.detailData = data;
        this.showDelete = data.hasAuth;
        this.title = this.detailData['detail'][0]['letter']['detail']['title'];
        this.pages = Number(data['detail'].length);
        this.writer = this.detailData['writerNickname'];
        this.counsellor = this.detailData['counsellorNickname'];
        this.getDetails();
      } catch (error) {
        console.log(error);
      }
    },
    async deleteDetail() {
      const id = this.$store.state.pageNumbers;
      if (this.showDelete === true) {
        try {
          await updateDetailStatus(id);
          alert('사연이 삭제됐습니다.');
          this.$store.commit('getBoardModalStatus', false);
          location.reload();
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: 'NanumSquare', sans-serif !important;
  src: url('https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css')
    format('woff');
  font-weight: normal;
  font-style: normal;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.body-detail {
  width: 100%;
  height: 100%;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}

.book-page {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 2vw;
}

.left {
  height: 67vh;
  background-color: #fffbf4;
  /* background-color: powderblue; */
  grid-column-start: 1;
  grid-column-end: 2;
  margin-right: 1vw;
  padding: 1.5vw;
  overflow-y: scroll;
  border-radius: 8px;
}

.right {
  height: 67vh;
  background-color: blanchedalmond;
  grid-column-start: 2;
  grid-column-end: 3;
  margin-left: 1vw;
  padding: 1.5vw;
  overflow-y: scroll;
  border-radius: 8px;
}

::-webkit-scrollbar {
  width: 0.3vw;
}
::-webkit-scrollbar-corner {
}
::-webkit-scrollbar-thumb {
  background-color: #35ae6d;
  border-radius: 6px;
  opacity: 0.1;
}

.left-title {
  font-size: 1.3vw;
  margin-bottom: 2vh;
  line-height: 4vh;
  font-family: 'InfinitySans-BoldA1';
  color: #424242;
}

.left-writer {
  text-align: end;
  font-family: 'Hana_handwriting';
  font-size: 1.1vw;
  color: #424242;
}

.right-writer {
  text-align: end;
  font-family: 'Hana_handwriting';
  font-size: 1.1vw;
  font-size: 1vw;
  color: #424242;
}

.right-title {
  font-size: 1.3vw;
  /* text-align: center; */
  margin-bottom: 2vh;
  line-height: 4vh;
  font-family: 'InfinitySans-BoldA1';
  color: #424242;
}

.left-content {
  font-size: 1.5vw;
  line-height: 4vh;
  margin-bottom: 3vh;
  font-family: 'Hana_handwriting';
  color: #424242;
}

.right-content {
  font-size: 1.5vw;
  line-height: 4vh;
  margin-bottom: 3vh;
  font-family: 'Hana_handwriting';
  color: #424242;
}

.page-left {
  display: flex;
  justify-content: flex-end;
  margin-right: 2vw;
  margin-top: -2.3vh;
  font-family: 'InfinitySans-BoldA1';
}

.buttons {
  justify-content: center;
  display: flex;
  align-items: center;
}

.buttons i {
  font-size: 1.5vw;
  margin-left: 1vw;
  margin-right: 1vw;
  color: gray;
  cursor: pointer;
}

.buttons i:hover {
  color: #35ae6d;
}

.delete {
  display: flex;
}

.delete button {
  border-radius: 5px;
  margin-top: -3vh;
  margin-left: 2vw;
  width: 5vw;
  height: 3.5vh;
  background: blanchedalmond;
  border: solid 1px gray;
  cursor: pointer;
  font-size: 0.8vw;
  font-weight: bold;
}

.delete button:hover {
  background: gray;
  color: #fff;
}

/* Book */
.book {
  position: relative;
  width: 20vw;
  height: 60vh;
  transition: transform 0.5s;
}

.paper {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  perspective: 1500px;
}

.front,
.back {
  background-color: white;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform-origin: left;
  transition: transform 0.5s;
}

.front {
  z-index: 1;
  backface-visibility: hidden;
  border-left: 3px solid powderblue;
}

.back {
  z-index: 0;
}

.front-content,
.back-content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.back-content {
  transform: rotateY(180deg);
}

/* Paper flip effect */
.flipped .front,
.flipped .back {
  transform: rotateY(-180deg);
}

/* Paper stack order */
/* #p1 {
  z-index: 5;
}

#p2 {
  z-index: 4;
}

#p3 {
  z-index: 3;
}

#p4 {
  z-index: 2;
}

#p5 {
  z-index: 1;
} */
</style>
