<template>
  <div class="feeling-record-background">
    <div class="feeling-container">
      <span @click="goOneStepBack" class="oneStepBack">
        <i class="fas fa-arrow-left"></i>
      </span>
      <div class="wrapper" @click="move">
        <div class="calendar-area box fade-in">
          <calendar></calendar>
        </div>
        <div class="diary-area box fade-in">
          <diary> </diary>
        </div>
        <writing-modal v-if="$store.state.modalControl" class="modal">
          <div v-if="$store.state.diaryModalStatus === 'create'">
            <create-diary></create-diary>
          </div>
          <div v-else-if="$store.state.diaryModalStatus === 'update'">
            <update-diary></update-diary>
          </div>
        </writing-modal>
      </div>
    </div>
  </div>
</template>

<script>
import Calendar from '@/components/feeling-record/Calendar';
import Diary from '@/components/feeling-record/Diary';
import CreateDiary from '@/components/feeling-record/CreateDiary';
import UpdateDiary from '@/components/feeling-record/UpdateDiary';
import WritingModal from '@/components/feeling-record/modal/WritingModal';

export default {
  components: {
    Calendar,
    Diary,
    WritingModal,
    CreateDiary,
    UpdateDiary,
  },
  data() {
    return {
      days: ['일', '월', '화', '수', '목', '금', '토'],
    };
  },
  methods: {
    move() {
      // if (this.$store.state.targetDate.length === 0) {
      //   const date = new Date();
      //   let year = date.getFullYear();
      //   let month = date.getMonth() + 1;
      //   let today = date.getDate();
      //   let day = date.getDay();
      //   this.$store.commit('getTargetDate', [year, month, today, this.days[day]]);
      // }
      const calendarArea = document.querySelector('.calendar-area');
      const diaryArea = document.querySelector('.diary-area');
      calendarArea.classList.add('show');
      diaryArea.classList.add('show');
    },
    goOneStepBack() {
      history.go(-1);
    },
  },
  created() {
    let token = this.$store.getters.getAuthToken;
    if (token == '' || token == null) {
      alert('로그인이 필요합니다.');
      this.$router.push({ name: 'Login' });
    }
  },
};
</script>

<style scoped>
.feeling-record-background {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
}

.feeling-container {
  background-image: url('../../assets/image/sky.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper {
  width: 27vw;
  height: 72vh;
  position: relative;
}

.calendar-area,
.diary-area {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 1s all;
}

.diary-area {
  opacity: 0;
  z-index: -1;
}

.calendar-area.show {
  transform: translateX(-14vw);
}

@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-moz-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.diary-area.show {
  transform: translateX(14vw);
  z-index: 1;

  opacity: 0;
  -webkit-animation: fadeIn ease-in 1;
  -moz-animation: fadeIn ease-in 1;
  animation: fadeIn ease-in 1;

  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  animation-fill-mode: forwards;

  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  animation-duration: 1s;
}

.modal {
  z-index: 2;
}

.fade-in {
  opacity: 0;
  -webkit-animation: fadeIn ease-in 1;
  -moz-animation: fadeIn ease-in 1;
  animation: fadeIn ease-in 1;

  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  animation-fill-mode: forwards;

  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  animation-duration: 0.5s;
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
