'use strict';
const userAnswerInput = document.getElementById('user-answer');
const judgeButton = document.getElementById('judge');
const quizDivision = document.getElementById('quiz-area');
const resultDivision = document.getElementById('result-area');
const changeButton = document.getElementById('quiz-change')

const a = Math.floor(Math.random() * (1000 + 1))
const b = Math.floor(Math.random() * (1000 + 1))

const correctAnswer = a + b

//　問題を出題する。
const header = document.createElement('h3')
header.innerText = `${a} + ${b} はいくつ？`
quizDivision.appendChild(header);

//判定する
judgeButton.addEventListener(
  'click',
  () => {
    const userAnswer = userAnswerInput.value;
    if (userAnswer.length === 0) {
      //何も入力していない場合は、処理を終了する。
      return;
    }

    // 判定結果表示エリアの作成
    resultDivision.innerText = ' '
    const header = document.createElement('h3');
    header.innerText = '結果';
    resultDivision.appendChild(header);

    const paragraph = document.createElement('p')
    if (userAnswer == correctAnswer) {
      paragraph.innerText = `正解です！`
    } else {
      paragraph.innerText = `不正解です...`
    }
    resultDivision.appendChild(paragraph);
  },
);

//問題をブラウザを更新して変更する
changeButton.addEventListener(
  'click',
  () => {
    window.location.reload();
  }
)