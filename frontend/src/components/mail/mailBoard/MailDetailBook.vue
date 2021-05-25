<template>
  <div class="body-detail">
    <!-- Previous Button -->
    <button id="prev-btn">
      <!-- <button id="prev-btn" @click="goPrevPage"> -->
      <i class="fas fa-arrow-circle-left"></i>
    </button>

    <!-- Book -->
    <div id="book" class="book">
      <!-- Paper 1 -->
      <div v-for="n in 3" :key="n">
        <div :id="`p${n}`" class="paper">
          <div class="front">
            <div :id="`f${n}`" class="front-content">
              <h1>Front {{ n }}</h1>
            </div>
          </div>
          <div class="back">
            <div :id="`b${n}`" class="back-content">
              <h1>Back {{ n }}</h1>
            </div>
          </div>
        </div>
      </div>
      <!-- <div v-for="n in 3" :key="n">
        <div :id="`p${n}`" class="paper">
          <div class="front">
            <div :id="`f${n}`" class="front-content">
              <h1>Front {{ n }}</h1>
            </div>
          </div>
          <div class="back">
            <div :id="`b${n}`" class="back-content">
              <h1>Back {{ n }}</h1>
            </div>
          </div>
        </div>
      </div> -->
    </div>

    <!-- Next Button -->
    <button id="next-btn">
      <!-- <button id="next-btn" @click="goNextPage"> -->
      <i class="fas fa-arrow-circle-right"></i>
    </button>
  </div>
</template>

<script>
import { init } from '@/assets/js/mail/MainBoardPage.js';
export default {
  data() {
    return {
      pages: 0,
    };
  },
  created() {
    this.pages = 3;
    this.$store.commit('getPageNumbers', this.pages);
  },
  mounted() {
    init();
  },
  methods: {
    goPrevPage() {
      if (this.currentLocation > 1) {
        switch (this.currentLocation) {
          case 2:
            this.closeBook(true);
            paper1.classList.remove('flipped');
            paper1.style.zIndex = 3;
            break;
          case 3:
            paper2.classList.remove('flipped');
            paper2.style.zIndex = 2;
            break;
          case 4:
            this.openBook();
            paper3.classList.remove('flipped');
            paper3.style.zIndex = 1;
            break;
          default:
            throw new Error('unkown state');
        }
        this.currentLocation--;
      }
    },
    goNextPage() {
      // const paper2 = document.querySelector('#p2');
      // const paper3 = document.querySelector('#p3');

      // Business Logic
      if (this.currentLocation < this.maxLocation) {
        switch (this.currentLocation) {
          case 1:
            this.openBook();
            paper1.classList.add('flipped');
            paper1.style.zIndex = 1;
            break;
          case 2:
            paper2.classList.add('flipped');
            paper2.style.zIndex = 2;
            break;
          case 3:
            paper3.classList.add('flipped');
            paper3.style.zIndex = 3;
            this.closeBook(false);
            break;
          default:
            throw new Error('unkown state');
        }
        this.currentLocation++;
      }
    },
    openBook() {
      const prevBtn = document.querySelector('#prev-btn');
      const nextBtn = document.querySelector('#next-btn');
      const book = document.querySelector('#book');

      book.style.transform = 'translateX(50%)';
      prevBtn.style.transform = 'translateX(-180px)';
      nextBtn.style.transform = 'translateX(180px)';
    },
    closeBook(isAtBeginning) {
      const prevBtn = document.querySelector('#prev-btn');
      const nextBtn = document.querySelector('#next-btn');
      const book = document.querySelector('#book');

      if (isAtBeginning) {
        book.style.transform = 'translateX(0%)';
      } else {
        book.style.transform = 'translateX(100%)';
      }
      prevBtn.style.transform = 'translateX(0px)';
      nextBtn.style.transform = 'translateX(0px)';
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

.body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: sans-serif;
  background-color: powderblue;
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

/* Controller Buttons */
button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin: 10px;
  transition: transform 0.5s;
}

button:focus {
  outline: none;
}

button:hover i {
  color: #636363;
}

i {
  font-size: 50px;
  color: gray;
}

/* Paper stack order */
#p1 {
  z-index: 3;
}

#p2 {
  z-index: 2;
}

#p3 {
  z-index: 1;
}
</style>
