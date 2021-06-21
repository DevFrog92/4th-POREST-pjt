<template>
  <div class="rooms-wrapepr">
    <span @click="moveToBack" class="back">
      <i class="fas fa-arrow-left"></i>
    </span>
    <div class="intro_title">
      당신은 오늘 어떤 마음 속 이야기를 나누고 싶나요?
    </div>
    <div class="background-image"></div>
    <Star></Star>
    <div class="list-pop-up">
      <div class="list-pop-up-inner-wrapper">
        <div class="room-card">
          <div class="room-card-front">
            <!-- <img src="" class="front-card-img" alt=""> -->
            <div class="category-name">{{ category_name }}</div>
            <div class="healing_text">
              <!-- {{ healingText }} -->
              <!-- 그대는 충분히 반짝거리기에, <br />
              그대가 주인공인 삶을 살아줬으면 한다. -->
            </div>
            <div class="create-chat-room" v-if="createRoomState">
              상담소 열기
            </div>
          </div>
          <div class="room-card-back">
            <h1>상담소 열기</h1>
            <form @submit.prevent>
              <input type="text" placeholder="상담소 이름을 적어주세요" v-model="roomName" />
              <div class="capacity-wrapper">
                <h2>참가 허용 인원</h2>
                <div class="capacity-count">
                  <div class="count-btn count-plus">더하기</div>
                  <div class="count-num">1</div>
                  <div class="count-btn count-minus">빼기</div>
                </div>
                <p class="capacity-warning-over">
                  최대 인원은 4명 이하 입니다.
                </p>
                <p class="capacity-warning-less">
                  최초 인원은 1명 이상 입니다.
                </p>
              </div>
              <h2>얼굴 공개 여부</h2>
              <div class="public-wrapper">
                <div class="public public-btn" @click="public">공개</div>
                <div class="non-public public-btn public-active" @click="nonpublic">
                  비공개
                </div>
              </div>
              <h2>상담 분야 소개</h2>
              <div class="room-category-select">
                <div
                  class="room-category"
                  data-value="1"
                  v-for="(tag, index) in categories"
                  :key="index"
                  :data-value="index + 1"
                >
                  {{ categories[index] }}
                </div>
              </div>
              <div class="room-create-btn">
                <div class="create-room-btn public-btn" @click.prevent="checkRoomName">
                  개설하기
                </div>
                <div class="exit-room-create public-btn">취소</div>
              </div>
            </form>
          </div>
        </div>
        <div class="room-list">
          <div class="room-list-wrapper">
            <div class="room-item" v-for="(room, index) in displayRooms" :key="index">
              <div class="room-item-left">
                <h1 class="room-name">{{ room.name }}</h1>
                <p>얼굴 공개 여부 : {{ room.publicState ? "공개" : "비공개" }}</p>
                <p>참가자 허용 인원 : {{ room.capacity }} 명</p>
                <div class="room-category-flag-wrapper">
                  <span
                    class="room-category-flag"
                    v-for="(tag, index) in room.category"
                    :key="index"
                    :style="{ backgroundColor: tagColors[index] }"
                    >{{ categories[tag] }}</span
                  >
                </div>
                <div class="room-btn">
                  <span v-if="uid === room.hostID" @click="deleteRoom(room.id, index)">삭제하기</span>
                </div>
              </div>
              <div class="room-item-right">
                <div class="enter-room-btn" @click="moveToCheckIn(room.hostID, room.id, room.name)">
                  <span>입장</span><span>하기</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="room-list-eixt-btn">
          나가기
        </div>
      </div>
    </div>
    <div class="card-main-wrapper">
      <div class="card-main-board"></div>
      <div class="card-inner-wrapper">
        <div class="card" v-for="(category, index) in categories" :key="index">
          <div class="card-flip">
            <div class="card-inner">
              <div class="symbole">
                {{ category }}
              </div>
            </div>
            <div
              class="card-outer"
              :data-value="index + 1"
              @click="select(index)"
              :style="{ backgroundColor: tagColors[index] }"
            >
              <div class="outer_symbole"></div>
              <span class="symbol-1"></span>
              <h2>입장하기</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="prev-button button">이전</div>
    <div class="next-button button">다음</div>
    <approve
      class="aprrove-pop-up"
      v-if="approveState"
      @exitRoom="exitCheckin"
      :user="user"
      :roomId="roomId"
      :hostId="hostId"
      :roomName="roomName"
    ></approve>
    <check-in-page
      v-if="checkinState"
      class="check-in-pop-up"
      :user="user"
      :roomId="roomId"
      :hostId="hostId"
      :roomName="roomName"
      @showApprove="showApprove"
    ></check-in-page>
    <div class="checkin-exit" v-if="checkinState && !approveState" @click="exitCheckin">
      떠나기
    </div>
  </div>
</template>

<script>
import Star from "@/components/common/Star.vue";
import CheckInPage from "@/views/room/CheckInPage.vue";
import Approve from "@/views/room/Approve.vue";
import { init } from "@/assets/js/AllRoomPage.js";
import db from "@/db.js";
import FireBase from "firebase/app";
import "firebase/auth";
import { verificationTemperature } from "@/api/auth";

export default {
  name: "Allroompage",
  data() {
    return {
      roomName: null,
      temperature: this.$store.state.temperature,
      uid: this.$store.state.uid,
      rooms: [],
      addState: false,
      roomNameCheck: false,
      capacity: null,
      publicState: false,
      roomDesc: null,
      selectedCategory: [],
      roomId: null,
      hostId: null,
      checkinState: false,
      approveState: false,
      category_name: null,
      displayRooms: [],
      login_state: false,
      selected: null,
      createRoomState: false,
      // tagColors: ['#F9957F', '#ABCFD1', '#D4E6C4', '#FFCFCB', '#ABBEEC', '#F4C464', '#F7D7C2', '#8CC1D3'],
      tagColors: ["#004e66", "#EE7785", "#fab1ce", "#84B1ED", "#ABBEEC", "#F4C464", "#bf209f", "#8CC1D3"],
      imgUrl: "@/assets/svg/tarot5.svg",
      categories: ["학교 생활", "직장 생활", "학업 및 진로", "자녀 양육", "대인 관계", "심리 및 정서", "연애", "취업"],
      healingTexts: [
        "  그대는 충분히 반짝거리기에, <br />그대가 주인공인 삶을 살아줬으면 한다.",
        "잠들지 않아도 꿈꾸던 널,<br> 잊지 않기를 바란다.",
        "같은 실수를 두려워하되, 새로운 실수를 <br>두려워하지 마라. 실수는 곧 경험이다.",
        "자녀들에게는 어머니보다 더 훌륭한 <br> 하늘로부터 받은 선물은 없다.",
        "당신은 달 같은 존재예요. <br> 세상에 하나뿐인, 사라져서는 안 될 <br> 소중한 존재",
        "한 겨울에도 움트는 봄이 있는가 하면, <br> 밤의 장작 뒤에도 미소 짓는 새벽이 있다.",
        "사랑을 이야기하면 사랑을 하게 된다.",
        "준비와 기회가 조우할 때 일어나는 것, <br> 그것이 바로 행운이다.",
      ],
      healingText: "",
    };
  },
  components: {
    CheckInPage,
    Approve,
    Star,
  },
  props: ["user"],
  created() {
    let token = this.$store.getters.getAuthToken;
    if (this.temperature >= 60) {
      this.createRoomState = true;
    }
    if (token == "" || token == null) {
      alert("로그인이 필요합니다.");
      this.$router.push({ name: "Login" });
    }
  },
  async mounted() {
    init();
    if (this.rooms.length == 0) {
      await this.loadData();
    }
  },
  methods: {
    public() {
      this.publicState = true;
    },
    nonpublic() {
      this.publicState = false;
    },
    moveToBack() {
      this.$router.go(-1);
    },
    select(index) {
      this.selected = index;
      const headlingText = document.querySelector(".healing_text");
      headlingText.innerHTML = this.healingTexts[index];
      this.displayRooms = [];
      this.category_name = this.categories[index];
      for (let i = 0; i < this.rooms.length; i++) {
        if (this.rooms[i].category.includes(index)) {
          this.displayRooms.unshift(this.rooms[i]);
        }
      }
      this.displayRooms.reverse();
    },
    showApprove() {
      this.approveState = true;
    },
    exitCheckin() {
      this.checkinState = false;
      this.approveState = false;
    },
    async checkRoomName() {
      if (this.roomName == null || this.roomName == "") {
        alert("방 이름은 필수 입력 사항입니다.");
        return;
      }
      await this.rooms.forEach((ele) => {
        if (ele.name == this.roomName) {
          this.roomNameCheck = true;
        }
      });
      if (!this.roomNameCheck) {
        this.getCategory();
        // this.addRoom();
      } else {
        this.roomName = "";
      }
    },
    async getCategory() {
      const roomCategory = document.querySelectorAll(".room-category");
      await roomCategory.forEach((ele) => {
        if (ele.classList.contains("room-category-selected")) {
          this.selectedCategory.push(ele.dataset.value - 1);
        }
      });
      this.verificationTemperature();
    },
    async verificationTemperature() {
      let res = await verificationTemperature({ temperature: this.$store.state.temperature });
      if (res.status && !res.data.isSameTemp) {
        alert(`데이터 맘대로 변경하지 말아주세요!😡`);
      } else if (!res.status) {
        alert("방을 생성할 수 없습니다.");
      } else {
        this.addRoom();
      }
    },
    addRoom() {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth() + 1;
      const day = now.getDate();
      const hour = now.getHours();
      const minute = now.getMinutes();
      const seconds = now.getSeconds();
      const num = document.querySelector(".count-num");
      this.addState = true;
      const docRef = db.collection("users").doc(this.user.uid);
      // let roomData = {
      //   name: this.roomName,
      //   hostID: this.user.uid,
      //   capacity: num.innerText,
      //   publicState: this.publicState,
      //   category: this.selectedCategory,
      //   createdDate: `${year}-${month}-${day}, ${hour}:${minute}:${seconds}`,
      //   createdAt: FireBase.firestore.FieldValue.serverTimestamp(),
      // };
      // this.displayRooms.unshift(roomData);
      docRef.set({ name: this.user.uid });
      docRef
        .collection("rooms")
        .add({
          name: this.roomName,
          hostId: this.user.uid,
          capacity: num.innerText,
          publicState: this.publicState,
          category: this.selectedCategory,
          createdDate: `${year}-${month}-${day}, ${hour}:${minute}:${seconds}`,
          createdAt: FireBase.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
          this.roomName = "";
          this.selectedCategory = [];
          this.loadData();
        });
    },
    deleteRoom(roomId, index) {
      db.collection("users")
        .doc(this.user.uid)
        .collection("rooms")
        .doc(roomId)
        .delete();
      this.displayRooms.splice(index, 1);
      this.rooms.forEach((ele, idx) => {
        if (ele.id == roomId) {
          this.rooms.splice(idx, 1);
        }
      });
    },
    moveToCheckIn(hostId, roomId, roomName) {
      this.checkinState = true;
      if (!this.uid) {
        this.uid = "none";
      }
      this.hostId = hostId;
      this.roomId = roomId;
      this.roomName = roomName;
    },
    async loadData() {
      const dbRef = db.collection("users");
      await dbRef.get().then(async (querySnapshot) => {
        await querySnapshot.forEach(async (doc) => {
          await dbRef
            .doc(doc.id)
            .collection("rooms")
            .onSnapshot(async (snapShot) => {
              await snapShot.forEach((ele) => {
                let dataForm = {
                  id: ele.id,
                  hostID: doc.id,
                  name: ele.data().name,
                  createdAt: ele.data().createdDate,
                  publicState: ele.data().publicState,
                  category: ele.data().category,
                  capacity: ele.data().capacity,
                };
                if (this.rooms.length != 0) {
                  let state = false;
                  for (let i = 0; i < this.rooms.length; i++) {
                    if (this.rooms[i]["id"] === ele.id) {
                      state = true;
                    }
                  }
                  if (!state) {
                    this.rooms.unshift(dataForm);
                  }
                } else {
                  this.rooms.push(dataForm);
                }
              });
              this.rooms.sort((a, b) => {
                a.createdAt > b.createdAt;
              });
              if (this.selected != null) {
                this.select(this.selected);
              }
            });
        });
      });
    },
  },
};
</script>

<style scoped src="@/assets/css/AllRoomPage.css"></style>
