<template>
  <div class="body-detail">
    <button @click="goBefore">before</button>
    <button @click="goAfter">after</button>
    <!-- <div v-for="n in pages" :key="n"> -->
    <div class="book-page">
      <div class="left">
        <p>{{ leftTitle }}</p>
        <p>{{ leftContent }}</p>
      </div>
      <div class="right">
        <p>{{ rightTitle }}</p>
        <p>{{ rightContent }}</p>
      </div>
    </div>
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
        this.title = this.detailData['detail'][0]['letter']['detail']['title'];
        this.pages = Number(data['detail'].length);
        console.log('22', data);
        this.getDetails();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
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
}

.left {
  width: 30%;
  height: 50vh;
  background-color: powderblue;
}

.right {
  width: 30%;
  height: 100%;
  background-color: blanchedalmond;
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
