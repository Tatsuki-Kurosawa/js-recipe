const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const choice4 = document.getElementById("choice-4")
const feedback = document.getElementById("feedback")

// クイズの内容    オブジェクト
const quiz = {
  text: "この星の名前は何でしょう？",
  image: "maruoka.png",
  choices: [
    {
      text: "大阪城",
      feedback: "残念！大阪城は安土桃山時代に築かれたよ。",
    },
    {
      text: "丸岡城",
      feedback: "正解！北陸唯一の現存十二天守の一つだよ！",
    },
    {
      text: "姫路城",
      feedback: "残念！白鷺城とも言われているよ。",
    },
    {
      text: "松本城",
      feedback: "残念!「烏（からす）城」は誤りらしいよ。",
    },
  ],
}

// quiz を画面に表示する関数
const reloadQuiz = function () {
  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text

  // 画像を表示
  quizImage.src = "./images/" + quiz.image

  // 選択肢（ボタン）の中身を表示
  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
  choice4.textContent = quiz.choices[3].text
}

// choiceNumber番目の選択肢を選択
const choose = function (choiceNumber) {
  // フィードバックを表示
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

choice1.onclick = function () {
  // 0 番目の選択肢を選択
  choose(0)
}
choice2.onclick = function () {
  // 1 番目の選択肢を選択
  choose(1)
}
choice3.onclick = function () {
  // 2 番目の選択肢を選択
  choose(2)
}

choice4.onclick = function () {
  // 3 番目の選択肢を選択
  choose(3)
}

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz()
