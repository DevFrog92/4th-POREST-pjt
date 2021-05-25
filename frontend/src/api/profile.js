import { instanceAuth } from "@/api";

const updateProfileImg = (imageId) => instanceAuth.put(`/profileImg/${imageId}`);
const updateNickname = (userData) => instanceAuth.put(`/update-nickname`, userData);
const updatePassword = (userData) =>
  instanceAuth
    .put(`/update-password`, userData)
    .then((res) => {
      return { status: true, message: "", data: res.data };
    })
    .catch((error) => {
      return { status: false, message: error.response.data.message };
    });

export { updateProfileImg, updateNickname, updatePassword };
