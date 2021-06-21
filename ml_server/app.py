from flask import Flask, request
from flask_cors import CORS
from konlpy.tag import Komoran
from sklearn.naive_bayes import MultinomialNB
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import CountVectorizer
import dill

app = Flask(__name__)
CORS(app)
app.config['JSON_AS_ASCII'] = False
tokenizer = Komoran()

emotionDict = {'greetings' : ['안녕', '오랜만이', '반가워', '처음뵙겠습'],
                'farewells' : ['잘 있어 또 올게', '구름아 나 갈게', '구름아 다음에 봐', '나중에 봐', "구름아 또 보자"],
                'troubles' : ['말할 사람이 없어','아무도 내 말을 안 들어줘','들어 줄 사람이 없어','혼자 있고 싶어',]}

tags = {"NNG", 'NNP', 'MAG', 'VV', 'VA', 'VX', 'VCN', 'VCP'}
def tokenize(text):
    temp = tokenizer.pos(text)
    result = []
    for word, tag in temp:
        if(tag in tags):
            result.append(word)
    return result

with open('model.pkl', 'rb') as f:
    model = dill.load(f)
with open('vocab.pkl', 'rb') as f:
    vocab = dill.load(f)
vect = CountVectorizer(tokenizer=tokenize, vocabulary = vocab.vocabulary_)
feats = ['Angry','Disgust', 'Fear', 'Happiness','Neutral','Sadness','Surprise']

def jaccard(text_a, text_b):
    a = set(tokenize(text_a))
    b = set(tokenize(text_b))
    union = a.union(b)
    inter = a.intersection(b)
    p = len(union)
    if(p == 0): p = 1
    return len(inter)/p

def extractEmotion(text):
    emotion = 'none'
    maxValue = 0.0;
    for em, value in emotionDict.items():
        for v in value:
            sim = jaccard(text, v)
            if(sim >= 0.2 and sim > maxValue):
                maxValue = sim
                emotion = em
    return emotion, maxValue

@app.route('/ml/emotions', methods=['POST'])
def emotion():
    ret = {'emotion': 'none', 'value': 0.0}
    text = request.get_json()['text']

    emotion, v = extractEmotion(text)

    if(emotion != 'none' and v > 0.2):
        ret['emotion'] = emotion
        ret['value'] = v
        return ret

    te = vect.fit_transform([text])
    ret['emotion'] = model.predict(te).tolist()[0]
    arr =  model.predict_proba(te).tolist()
    for feat, value in zip(feats, arr[0]):
        if(feat == ret['emotion']):
            ret['value'] = value
            break
    if(ret['value'] < 0.5):
        ret['emotion'] = 'none'
    return ret

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8082, threaded = True)
