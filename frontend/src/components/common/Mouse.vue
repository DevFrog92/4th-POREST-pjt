<template>
  <div class="cursor">
    <img src="../../assets/image/point.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'Mouse',
  data() {
    return {};
  },
  mounted() {
    let x = 0;
    let y = 0;
    let mx = 0;
    let my = 0;
    let speed = 0.1;
    let cursorItem = document.querySelector('.cursor');
    window.addEventListener('mousemove', mouseHandler);
    function mouseHandler(e) {
      x = e.clientX;
      y = e.clientY;
    }
    loop();

    function loop() {
      mx += (x - mx) * speed;
      my += (y - my) * speed;
      cursorItem.style.transform = 'translate(' + mx + 'px,' + my + 'px)';
      window.requestAnimationFrame(loop);
    }
  },
  methods: {},
};
</script>

<style scoped>
.cursor {
  position: absolute;
  top: -130px;
  left: 10px;
  width: 100px;
  z-index: 500;
  height: 130px;
}

.cursor img {
  width: 100%;
  height: 100%;
  transform: rotate(5deg);
}
</style>
