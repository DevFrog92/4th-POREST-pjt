<template>
  <transition name="snackbar">
    <div v-if="$store.state.snackbarStatus" class="snackbar" :class="classes">
      <div class="snackbar__wrap">
        <div class="snackbar__body">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'Snackbar',
  props: {
    timeout: {
      type: Number,
      default: 4000,
    },
    infinity: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: 'top-center',
    },
  },
  data() {
    return {
      timer: null,
    };
  },
  watch: {
    '$store.state.snackbarStatus'() {
      this.setTimer();
    },
  },
  computed: {
    classes() {
      return {
        [`snackbar--${this.position}`]: true,
      };
    },
  },
  methods: {
    setTimer() {
      if (this.timer) clearTimeout(this.timer);

      if (this.infinity) return;

      this.timer = setTimeout(() => {
        this.$store.dispatch('saveSnackbarStatus', false);
      }, this.timeout);
    },
  },
  mounted() {
    this.setTimer();
  },
};
</script>

<style>
.close-btn {
  padding: 8px 12px;
  margin: -8px -6px -8px 20px;
  color: #fff;
  font-family: inherit;
  font-size: inherit;
  text-transform: uppercase;
  border: 0;
  border-radius: 3px;
  background-color: transparent;
  cursor: pointer;
  outline: 0;
  transition: background-color 0.25s ease;
}
.close-btn:hover {
  background-color: rgba(33, 198, 248, 0.1);
}
.close-btn:active {
  background-color: rgba(20, 230, 184, 0.2);
  transition-duration: 0.35s;
}

.snackbar {
  position: fixed;
  display: flex;
  will-change: transform, opacity;
  z-index: 999;
}
.snackbar--bottom-right {
  right: 20px;
  bottom: 20px;
}
.snackbar--bottom-center {
  left: 0;
  right: 0;
  bottom: 0;
}
.snackbar--bottom-left {
  left: 20px;
  bottom: 20px;
}
.snackbar--top-right {
  right: 20px;
  top: 20px;
}
.snackbar--top-center {
  left: 0;
  right: 0;
  top: 0;
}
.snackbar--top-left {
  left: 20px;
  top: 20px;
}
.snackbar__wrap {
  width: auto;
  min-width: 450px;
  max-width: 550px;
  margin: 0 auto;
  padding: 15px;
  border-radius: 2px;
  /* background-color: orange; */
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);

  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
}
.snackbar__body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  line-height: 1.5;
  opacity: 1;
  color: rgb(255, 255, 255);
}

.snackbar-enter-active,
.snackbar-leave-active {
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.snackbar--bottom-center.snackbar-enter,
.snackbar--bottom-center.snackbar-leave-to {
  opacity: 0.5;
  transform: translate3d(0, 100%, 0);
}

.snackbar--top-center.snackbar-enter,
.snackbar--top-center.snackbar-leave-to {
  opacity: 0.5;
  transform: translate3d(0, -100%, 0);
}

.snackbar--bottom-left.snackbar-enter,
.snackbar--bottom-left.snackbar-leave-to,
.snackbar--bottom-right.snackbar-enter,
.snackbar--bottom-right.snackbar-leave-to {
  opacity: 0.5;
  transform: translate3d(0, calc(100% + 20px), 0);
}

.snackbar--top-left.snackbar-enter,
.snackbar--top-left.snackbar-leave-to,
.snackbar--top-right.snackbar-enter,
.snackbar--top-right.snackbar-leave-to {
  opacity: 0.5;
  transform: translate3d(0, calc(-100% - 20px), 0);
}
</style>
