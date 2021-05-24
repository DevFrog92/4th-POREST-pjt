<template>
  <div class="toggle__wrapper">
    <div class="toggle toggle--daynight">
      <input type="checkbox" id="toggle--daynight" class="toggle--checkbox" />
      <label @click="toggleBg" class="toggle--btn" for="toggle--daynight"
        ><span class="toggle--feature"></span
      ></label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toogle',
  methods: {
    toggleBg() {
      this.$emit('dayoff');
    },
  },
};
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

.toggle {
  display: block;
  text-align: center;
  user-select: none;
}

.toggle--checkbox {
  display: none;
}

.toggle--btn {
  display: block;
  margin: 0 auto;
  transition: all 350ms ease-in;
}

.toggle--btn:hover {
  cursor: pointer;
}

.toggle--btn,
.toggle--btn:before,
.toggle--btn:after,
.toggle--checkbox {
  transition: all 250ms ease-in;
}

.toggle--btn:before,
.toggle--btn:after {
  content: '';
  display: block;
}

.toggle--daynight .toggle--btn,
.toggle--like .toggle--btn {
  position: relative;
  height: 40px;
  width: 70px;
  border-radius: 70px;
}

.toggle--daynight .toggle--btn:before,
.toggle--like .toggle--btn:before {
  position: absolute;
  top: 3px;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

.toggle--daynight .toggle--btn {
  border: 5px solid #1c1c1c;
  background-color: #3c4145;
}

.toggle--daynight .toggle--btn:before {
  background-color: #fff;
  border: 5px solid #dbdbce;
}

.toggle--daynight .toggle--checkbox:checked + .toggle--btn {
  background-color: #9ee3fb;
  border: 5px solid #86c3d7;
}

.toggle--daynight .toggle--checkbox:checked + .toggle--btn:before {
  left: 34px;
  background-color: #ffdf6d;
  border: 5px solid #e1c348;
}
</style>
