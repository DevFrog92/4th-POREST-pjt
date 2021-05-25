<template>
  <div>
    <div class="modal">
      <div class="overlay" @click="closeModal"></div>
      <div class="modal-card">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$store.commit('getBoardModalStatus', false);
      this.$store.commit('getPageNumbers', 0);
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
  max-width: 70%;
  margin: auto;
  margin-top: 8vh;
  min-height: 80%;
  z-index: 10;
  border-radius: 7px;
  background: #fdf6e8;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  border-top: 1.5px solid rgba(255, 255, 255, 0.8);
  border-left: 1.5px solid rgba(255, 255, 255, 0.8);
  opacity: 1;
  display: flex;
  justify-content: center;
}
</style>
