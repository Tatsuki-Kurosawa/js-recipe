const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
// const choice1 = document.getElementById("choice-1")
// const choice2 = document.getElementById("choice-2")
// const choice3 = document.getElementById("choice-3")
// const choice4 = document.getElementById("choice-4")
const feedback = document.getElementById("feedback")
const choices = document.getElementById("choices-container")

let i = 0

// クイズの内容    オブジェクト
const quiz = {
  text: "この城の名前は何でしょう？",
  image: "maruoka.png",
  choices: [
    {
      text: "姫路城",
      feedback: "残念！白鷺城とも言われているよ。",
    },
    {
      text: "松本城",
      feedback: "残念！「烏（からす）城」は誤りらしいよ。",
    },
    {
      text: "大阪城",
      feedback: "残念！大阪城は安土桃山時代に築かれたよ。",
    },
    {
      text: "丸岡城",
      feedback: "正解！北陸唯一の現存十二天守の一つだよ！",
    },
  ],
  number: 4,
}

// quiz を画面に表示する関数
const reloadQuiz = function () {
  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text

  // 画像を表示
  quizImage.src = "./images/" + quiz.image

  // 選択肢（ボタン）の中身を表示
  while (i < quiz.number) {
    button_tag(i)
    click_tag(i)
    i++
  }
}

const choice_array = []

// 取得した要素の中にbuttonタグを作る？そもそもそういう使い方をしない？

const button_tag = function (i) {
  // button要素の作成
  const choice_answer = document.createElement("button")
  choice_answer.id = "choice" + String(i)
  choice_answer.textContent = quiz.choices[i].text
  choices.appendChild(choice_answer)
}

const click_tag = function (i) {
  // 要素の取得
  choice_array[i] = document.getElementById("choice" + String(i))
  choice_array[i].onclick = function () {
    choose(i)
  }
}

const choose = function (choiceNumber) {
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

reloadQuiz()
