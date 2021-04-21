export const init = () => {
  // document
  const chatInputBox = document.getElementById("chat_message");
  const all_messages = document.getElementById("all_messages");

  const leave_meeting = document.getElementById("leave-meeting");
  const main__chat__window = document.getElementById("main__chat__window");

  //

  const socket = io("/");
  const videoGrid = document.querySelector("#video-grid");
  const myVideo = document.createElement("video");
  let peers = {};

  // const myPeer = new Peer(undefined, {
  //   host: "/",
  //   port: "3001",
  // });

  // peerjs config

  var myPeer = new Peer({
    port: 443,
    config: {
      iceServers: [
        {
          url: "turn:numb.viagenie.ca",
          credential: "muazkh",
          username: "webrtc@live.com"
        },
        {
          url: "turn:192.158.29.39:3478?transport=udp",
          credential: "JZEOEt2V3Qb0y27GRntt2u2PAYA=",
          username: "28224511:1379330808"
        },
        {
          url: "turn:192.158.29.39:3478?transport=tcp",
          credential: "JZEOEt2V3Qb0y27GRntt2u2PAYA=",
          username: "28224511:1379330808"
        },
        {
          url: "turn:turn.bistri.com:80",
          credential: "homeo",
          username: "homeo"
        },
        {
          url: "turn:turn.anyfirewall.com:433?transport=tcp",
          credential: "webrtc",
          username: "webrtc"
        },
        {
          url: ["turn:13.250.13.83:3478?transport=tcp"],
          credential: "YzYNCouZM1mhqhmseWk6",
          username: "YzYNCouZM1mhqhmseWk6"
        }
      ]
    }
  });

  myVideo.muted = true;

  let myVideoStream;
  let currentUserId;
  let pendingMsg = 0;

  var getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia;

  navigator.mediaDevices
    .getUserMedia({
      video: true,
      audio: true
    })
    .then(stream => {
      // my video
      myVideoStream = stream;
      addVideoStream(myVideo, stream);

      myPeer.on("call", call => {
        console.log("calling");
        call.answer(stream);
        const video = document.createElement("video");

        call.on("stream", userVideoStream => {
          addVideoStream(video, userVideoStream);
          console.log(peers);
        });
      });

      socket.on("user-connected", userId => {
        connectToNewUser(userId, stream);
      });
      socket.on("user-disconnected", userId => {
        if (peers[userId]) peers[userId].close();
      });

      document.addEventListener("keydown", e => {
        console.log("key down");
        if (e.which === 13 && chatInputBox.value != "") {
          socket.emit("message", {
            msg: chatInputBox.value,
            user: currentUserId
          });
          chatInputBox.value = "";
        }
      });

      document.getElementById("sendMsg").addEventListener("click", e => {
        console.log("clicked");
        if (chatInputBox.value != "") {
          socket.emit("message", {
            msg: chatInputBox.value,
            user: currentUserId
          }),
            (chatInputBox.value = "");
        }
      });

      document.getElementById("muteButton").addEventListener("click", e => {
        console.log("muteButton");
        muteUnmute();
      });
      document.getElementById("playPauseVideo").addEventListener("click", e => {
        console.log("playPauseVideo");
        playStop();
      });

      chatInputBox.addEventListener("focus", () => {
        console.log("focus on");
        document.getElementById("chat__Btn").classList.remove("has__new");
        pendingMsg = 0;
        document.getElementById("chat__Btn").children[1].innerHTML = "Chat";
      });

      socket.on("createMessage", message => {
        console.log("message", message);
        let li = document.createElement("li");
        if (message.user != currentUserId) {
          li.classList.add("otherUser");
          li.innerHTML = `<div><b>User (<small>${message.user}</small>: </b>${message.msg}</div>`;
        } else {
          li.innerHTML = `<div><b>Me : </b>${message.msg}</div>`;
        }

        all_messages.append(li);
        main__chat__window.scrollTop = main__chat__window.scrollHeight;
        if (message.user != currentUserId) {
          pendingMsg++;
          // playChatSound();
          document.getElementById("chat__Btn").classList.add("has__new");
          document.getElementById(
            "chat__Btn"
          ).children[1].innerHTML = `Chat (${pendingMsg})`;
        }
      });
    });

  myPeer.on("call", function(call) {
    getUserMedia({ video: true, audio: true }, function(stream) {
      call.answer(stream);
      const video = document.createElement("video");
      call.on("stream", function(remoteStream) {
        addVideoStream(video, remoteStream);
      });
    });
  });
  const ROOM_ID = "<%= roomId %>";

  myPeer.on("open", id => {
    currentUserId = id;
    socket.emit("join-room", ROOM_ID, id);
  });

  socket.on("user-connected", userId => {
    console.log("User connectd :" + userId);
  });

  socket.on("user-disconnected", userId => {
    if (peers[userId]) {
      console.log("disconnetced");
      peers[userId].close();
      socket.emit("leave-room", ROOM_ID, currentUserId);
    }
  });

  const connectToNewUser = (userId, streams) => {
    var call = myPeer.call(userId, streams);
    console.log("call", call);
    const video = document.createElement("video");
    call.on("stream", userVideoStream => {
      console.log("userVideoStream", userVideoStream);
      addVideoStream(video, userVideoStream, userId);
    });
    call.on("close", () => {
      video.remove();
    });
    peers[userId] = call;
  };

  const playStop = () => {
    let enabled = myVideoStream.getVideoTracks()[0].enabled;
    if (enabled) {
      myVideoStream.getVideoTracks()[0].enabled = false;
      setPlayVideo();
    } else {
      setStopVideo();
      myVideoStream.getVideoTracks()[0].enabled = true;
    }
  };

  const muteUnmute = () => {
    let enabled = myVideoStream.getAudioTracks()[0].enabled;
    if (enabled) {
      myVideoStream.getAudioTracks()[0].enabled = false;
      setUnmuteButton();
    } else {
      setMuteButton();
      myVideoStream.getAudioTracks()[0].enabled = true;
    }
  };

  function addVideoStream(video, stream) {
    console.log("add video stream");
    video.srcObject = stream;
    video.addEventListener("loadedmetadata", () => {
      video.play();
    });
    console.log("video attached");
    videoGrid.append(video);
  }
  console.log("and finish");
};

//

const setPlayVideo = () => {
  const html = `<i class="unmute fa fa-pause-circle"></i>
  <span class="unmute">Resume Video!</span>`;
  document.getElementById("playPauseVideo").innerHTML = html;
};

const setStopVideo = () => {
  const html = `<i class=" fa fa-video-camera"></i>
  <span class="">Pause Video!</span>`;
  document.getElementById("playPauseVideo").innerHTML = html;
};

const setUnmuteButton = () => {
  const html = `<i class="unmute fa fa-microphone-slash"></i>
  <span class="unmute">Unmute</span>`;
  document.getElementById("muteButton").innerHTML = html;
};
const setMuteButton = () => {
  const html = `<i class="fa fa-microphone"></i>
  <span>Mute</span>`;
  document.getElementById("muteButton").innerHTML = html;
};

const ShowChat = e => {
  e.classList.toggle("active");
  document.body.classList.toggle("showChat");
};

const showInvitePopup = () => {
  document.body.classList.add("showInvite");
  document.getElementById("roomLink").value = window.location.href;
};

const hideInvitePopup = () => {
  document.body.classList.remove("showInvite");
};
