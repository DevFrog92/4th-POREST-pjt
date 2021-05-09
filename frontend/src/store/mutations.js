export default {
  setUserId(state, id) {
    state.id = id;
  },
  setUserUid(state, uid) {
    state.uid = uid;
  },
  setUsername(state, nickname) {
    state.nickname = nickname;
  },
  setUserEmail(state, email) {
    state.email = email;
  },
  setToken(state, token) {
    state.token = `Token ${token}`;
  },
  setImg(state, img) {
    state.profileImg = img;
  },
  setTemperature(state, temperature) {
    state.temperature = temperature;
  },
};
