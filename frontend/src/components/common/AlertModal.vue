<template>
  <div>
    <div class="modal">
      <div class="overlay" @click="closeModal"></div>
      <div class="modal-card">
        <div class="img-container">
          <img src="../../assets/image/sticker/7.png" />
        </div>
        <!-- <div class="description">
          <p>생성 성공!</p>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$store.commit('getCheckModalStatus', false);
    },
  },
};
</script>

<style scoped>
.modal,
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}
.overlay {
  opacity: 0.5;
  background-color: black;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
.modal-card {
  position: relative;
  max-width: 17%;
  margin: auto;
  margin-top: 30vh;
  min-height: 33%;
  z-index: 10;
  border-radius: 20px;
  background: #fdf6e8;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  border-top: 1.5px solid rgba(255, 255, 255, 0.8);
  border-left: 1.5px solid rgba(255, 255, 255, 0.8);
  opacity: 1;
  display: flex;
  justify-content: center;
}

.img-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10vh;
}

.img-container img {
  width: 5vw;
  /* top: -10vw; */
}
</style>
