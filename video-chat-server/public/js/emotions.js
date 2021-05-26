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

const audioMap = new Map();
emotionMap.set('greetings', [12]);
emotionMap.set('negative', [13, 2, 15, 17]);
emotionMap.set('positive', [14]);
emotionMap.set('reasons', [1, 10]);
emotionMap.set('troubles', [21]);

export {emotionMap, audioMap}