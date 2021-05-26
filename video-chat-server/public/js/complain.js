const selfVideo = document.querySelector('.self_video')
const myVideo = document.createElement("video");
const enteranceBtn = document.querySelector('.entrance_btn');
const firstGuid = document.querySelector('.first_guid')
const mouth = document.querySelector('.monster__mouth');
const video = document.getElementById("myVideo");
const btn = document.getElementById("myBtn");
const recordedAudio = document.querySelector('#recordedAudio');
let rec;
let storyContent = '';
let sadState=0;
let currentSad=0;
let audioChunks =[];

const greetings = ['안녕', '오랜만이', '반가워', '처음뵙겠습'];
const emotions_neg = ['아니 별로', '힘들었어', '힘든하루였', '행복하지않은하루','우울한하루','피곤했어','피곤한하루','짜증나는하루','우울했어','슬픈하루','답답한하루'];
const emotions_pos = ['응','행복한하루','재밌는','즐거운','괜찮은', '신나는','행복했'];
const reasons = ['혼났어','화냈어','맞았어','기분나빴','기분나쁜','짜증났', '우울했'];
const troubles = ['속상','말할 사람이 없','내 말을 안 들어','들어 줄 사람이 없','혼자 있고 싶','말하기 싫'];
const farewells = ['또 올게', '갈게', '나 갈게', '다음에 봐', '나중에 봐', "또 보자"];

const emotionMap = new Map();
emotionMap.set('greetings', greetings);
emotionMap.set('negative', emotions_neg);
emotionMap.set('positive', emotions_pos);
emotionMap.set('reasons', reasons);
emotionMap.set('troubles', troubles);
emotionMap.set('farewells', farewells);

// const video = document.querySelector('.myVideo')
//2, 15, 17
const arr = [0,0,0,0,0,0,0,0,0,0,0,0,2,3];
const varEmotion = {
  angry: 0,
  disgusted: 0,
  fearful: 0,
  happy: 0,
  neutral: 0,
  sad: 0,
  surprised: 0,
};
let text;
let answer = 0;
myVideo.muted = true;

enteranceBtn.addEventListener('click',()=>{
  sayHello()
  firstGuid.classList.add('hide_guid');
  audioPlay(0);
  saySpeek();
  recognition.start();
  setTimeout(()=>{
    startFaceDetecting()
  },2750)
})

function defaultFace(){
  mouth.style.animation = "umm .5s "
}

function sayHello(){
  mouth.style.animation = "none";
  mouth.style.animation = "hello 1.75s forwards"
}

function saySpeek(){
  mouth.style.animation = "mouth1 2.75s forwards"
}

function sayLongSpeek(){
  mouth.style.animation = "mouth 3.35s forwards"
}

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
  faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
  faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
  faceapi.nets.faceExpressionNet.loadFromUri("/models"),
]);


let myVideoStream;

var getUserMedia =
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia;

  function startFaceDetecting(){

  navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: true,
  })
  .then((stream) => {
    myVideoStream = stream;
    addVideoStream(myVideo, stream);
    handlerFunction(stream);
  })

// recording
function handlerFunction(stream) {
  rec = new MediaRecorder(stream);
  rec.ondataavailable = e => {
    audioChunks.push(e.data);
    if (rec.state == "inactive"){
      let blob = new Blob(audioChunks,{type:'audio/mp3'});
      recordedAudio.src = URL.createObjectURL(blob);
      recordedAudio.controls=true;
      recordedAudio.autoplay=true;
    }
  }
}

const record = document.querySelector('#record');
const stopRecord = document.querySelector('#stopRecord');
record.addEventListener('click',(e)=>{
  record.disabled = true;
  record.style.backgroundColor = 'blue';
  stopRecord.disabled = false;
  audioChunks =[];
  rec.start();
})
stopRecord.addEventListener('click',(e)=>{
  record.disabled = false;
  record.style.backgroundColor = 'red';
  stopRecord.disabled = true;
  rec.stop();
})


function addVideoStream(video, stream) {
  video.srcObject = stream;
  video.id = 'video-live';
  video.addEventListener("loadedmetadata", () => {
    video.play();
  });
  selfVideo.append(video);
  video.enabled = true;
    video.addEventListener("play", () => {
      if (document.querySelector("canvas")) {
        document.querySelector("canvas").remove();
      }

      const canvas = faceapi.createCanvasFromMedia(video);
      selfVideo.append(canvas);
      const displaySize = {
        width: video.clientWidth,
        height: video.clientHeight,
      };
      faceapi.matchDimensions(canvas, displaySize);
      setInterval(async () => {
        const detections = await faceapi
          .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks()
          .withFaceExpressions();
        const resizedDetections = faceapi.resizeResults(
          detections,
          displaySize
        );
        if(resizedDetections && resizedDetections[0]){
          const arr = resizedDetections[0].expressions;
          const emotion = Object.keys(arr).sort(function (a, b) {
            return -arr[a] + arr[b];
          });
          varEmotion[emotion[0]] += 1;
        }
        canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
        faceapi.draw.drawDetections(canvas, resizedDetections);
        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
        faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
      }, 100);
  })
}    
}

const bagOfWords = (text) => {
  const wordSet = new Set();
  for(i = 0; i<text.length-1; i++){
      let c = text.charAt(i) + text.charAt(i+1);
      wordSet.add(c);
  }
  return wordSet;
}

const calSimilarity = (text_a, text_b) => {
  let a = bagOfWords(text_a);
  let b = bagOfWords(text_b);
  let union = new Set(a);
  for(e of b){
      union.add(e);
  }
  let intersection = new Set([...a].filter(x => b.has(x)));
  let usize = union.size > 0 ? union.size : 1;
  let isize = intersection.size;
  return isize/usize;
}

const extractEmotions = (text) => {
  let max = 0;
  let maxEmotion = 'none';
  emotionMap.forEach((value, key) => {
    value.forEach((str) => {
      let sim = calSimilarity(text, str);
      if(sim >= 0.1 && sim > max){
        max = sim;
        maxEmotion = key;
      }
    })
  })
  return maxEmotion;
}


window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

recognition.addEventListener('result',(e)=>{

  sadState = varEmotion['sad'];
  text = Array.from(e.results)
  .map(result => result[0])
  .map(result => result.transcript)
  .join('');
  // textSection.appendChild(p)
  if(e.results[0].isFinal){
    console.log(text);
    console.log(extractEmotions(text));
    const emotion = extractEmotions(text);
    if(emotion === 'greetings' && answer == 0){
      defaultFace()
      answer++;
      setTimeout(()=>{
        sayLongSpeek();
        audioPlay(12)
      },200)
    }else if(emotion === 'negative' && answer === 1){
      defaultFace()
      storyContent = 'sad';
      answer++;
      setTimeout(()=>{
        sayHello();
        audioPlay(13)
      },200)
    }else if(emotion === 'negative'){
      let temp = [2, 15, 17];
      defaultFace();
      setTimeout(()=>{
        sayHello();
        audioPlay(temp[Math.floor(Math.random()*3)]);
      },2000)
    }else if(emotion === 'positive'){
      defaultFace()
      storyContent = 'happy';
      answer++;
      setTimeout(()=>{
        saySpeek();
        audioPlay(14)
      },300)
    }else if(emotion === 'reasons'){
      defaultFace()
      let temp = [1, 10];
      setTimeout(()=>{
        sayHello();
        audioPlay(temp[Math.round(Math.random())]);
      },300)
    }

    if(text.includes('재밌었') || text.includes('신났어') ||text.includes('즐거웠어') || text.includes('즐겁다')){
      defaultFace()
      let happy = [9,16]
      setTimeout(()=>{
        sayHello();
        audioPlay(happy[Math.round(Math.random())])
      },300)
    }

    if(emotion === 'troubles'){
      defaultFace()
      setTimeout(()=>{
        saySpeek();
        audioPlay(21)
      },300)
    }


    if(emotion === 'farewells' && answer > 1){
      const varEmotion_current = varEmotion['happy'];
      let now;
      defaultFace()
      setTimeout(()=>{
        saySpeek();
        audioPlay(3)
      },200)
      setTimeout(()=>{
        defaultFace()
        setTimeout(()=>{
          saySpeek();
          audioPlay(4)        
        },200)
      },3200)
      setTimeout(()=>{
        defaultFace()
        setTimeout(()=>{
          sayHello();
          audioPlay(5);
        },200)
        setTimeout(()=>{
          now =varEmotion['happy'];
          if(now - varEmotion_current >= 2){
            defaultFace()
            setTimeout(()=>{
              saySpeek();
              btn.click();
              audioPlay(6);
            },200)
            setTimeout(()=>{
              defaultFace()
              setTimeout(()=>{
                saySpeek();
                audioPlay(7);
              },200)
            },2500);
            setTimeout(()=>{
              defaultFace()
              setTimeout(()=>{
                saySpeek();
                audioPlay(8);
              },200)
            },6500);
            setTimeout(()=>{
              defaultFace()
              setTimeout(()=>{
                sayHello();
                audioPlay(22);
                setTimeout(()=>{
                  window.open('', '_self', '');
                  window.close();
                },2500)
              },200)
            },10000);
          }else {
            defaultFace()
            setTimeout(()=>{
              saySpeek();
              audioPlay(23);
            },200)
            setTimeout(()=>{
              defaultFace()
              setTimeout(()=>{
                saySpeek();
                audioPlay(24);
              },200)
            },2500)
            setTimeout(()=>{
              defaultFace()
              setTimeout(()=>{
                sayHello();
                audioPlay(22);
                setTimeout(()=>{
                  window.open('', '_self', '');
                  window.close();
                },2500)
              },200)
            },5500)
          }
        },2500)
      },7700);
    }
  }
})

recognition.addEventListener('end',()=>{
  if(sadState >= 20){
    sadState = 0;
    varEmotion['sad'] = 0;
    defaultFace()
    setTimeout(()=>{
      saySpeek();
      audioPlay(20);
    },200)
  }
  // console.log(arr[Math.floor(Math.random()*arr.length)])
  const randomNumber = arr[Math.floor(Math.random()*arr.length)]
  // console.log(Math.random() * 10)
  // if(randomNumber != 0){
  //   const audio = new Audio(`/audio/sound${randomNumber}.mp3`);
  //   audio.loop = false; // 반복재생하지 않음
  //   audio.volume = 0.5; // 음량 설정
  //   audio.play(); // sound1.mp3 재생
  // }
  recognition.start();
})


function myFunction() {
  if (video.paused) {
    video.volume = 0.1;
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}


function audioPlay(soundId){
  audio = new Audio(`/audio/audio${soundId}.mp3`);
  audio.loop = false; // 반복재생하지 않음
  audio.volume = 0.5; // 음량 설정
  audio.play(); // sound1.mp3 재생
}

