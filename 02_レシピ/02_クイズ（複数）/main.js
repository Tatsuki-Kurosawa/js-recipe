const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const feedback = document.getElementById("feedback")
const choices = document.getElementById("choices-container")
const nextQuiz = document.getElementById("next-quiz")

let j = 0
const choice_array = []

// クイズの内容    オブジェクト
const quiz = [
  {
    text: "この城の名前は何でしょう？",
    image: "maruoka.png",
    choices: [
      {
        text: "姫路城",
        isCorrect: false,
        feedback: "残念！白鷺城とも言われているよ。",
      },
      {
        text: "松本城",
        isCorrect: false,
        feedback: "残念！「烏（からす）城」は誤りらしいよ。",
      },
      {
        text: "大阪城",
        isCorrect: false,
        feedback: "残念！大阪城は安土桃山時代に築かれたよ。",
      },
      {
        text: "丸岡城",
        isCorrect: true,
        feedback: "正解！北陸唯一の現存十二天守の一つだよ！",
      },
    ],
    optionNumber: 4,
  },
  {
    text: "これはガニメデという星ですが、星の種類としてはどういうものでしょう？",
    image: "Ganymede.jpg",
    choices: [
      {
        text: "惑星",
        isCorrect: false,
        feedback:
          "残念！「惑星」は恒星の周りを回る天体で、比較的質量の軽いものをいうよ",
      },
      {
        text: "衛星",
        isCorrect: true,
        feedback: "正解！ガニメデは太陽系最大の衛星だよ",
      },
      {
        text: "小惑星",
        isCorrect: false,
        feedback: "残念！「小惑星」はイトカワなんかがそうだよ",
      },
      {
        text: "彗星",
        isCorrect: false,
        feedback: "残念！ハレー彗星なんかが有名だよ",
      },
    ],
    optionNumber: 4,
  },
  {
    text: "ジャンケンで勝てるのは？",
    image: "Two.jpeg",
    choices: [
      {
        text: "グー",
        isCorrect: true,
        feedback: "勝てます",
      },
      {
        text: "チョキ",
        isCorrect: false,
        feedback: "勝てません",
      },
      {
        text: "パー",
        isCorrect: false,
        feedback: "勝てません",
      },
    ],
    optionNumber: "3",
  },
]

// quiz を画面に表示する関数
const reloadQuiz = function (x) {
  let i = 0
  const under_choices = document.createElement("div")
  under_choices.id = "underChoices"
  choices.append(under_choices)
  // 問題文を表示
  quizText.textContent = "Q. " + quiz[x].text

  // 画像を表示
  quizImage.src = "./images/" + quiz[x].image

  feedback.textContent = ""

  // 選択肢（ボタン）の中身を表示
  while (i < quiz[x].optionNumber) {
    const choice_answer = document.createElement("button")
    choice_answer.id = "choice" + String(i)
    choice_answer.textContent = quiz[j].choices[i].text
    under_choices.appendChild(choice_answer)
    click_tag(i)
    i++
  }

  nextQuiz.classList.add("hidden")
}

const click_tag = function (i) {
  // 要素の取得
  choice_array[i] = document.getElementById("choice" + String(i))
  choice_array[i].onclick = function () {
    if (quiz[j].choices[i].isCorrect === true && j != quiz.length - 1) {
      nextQuiz.classList.remove("hidden")
    }
    choose(i)
  }
}

const choose = function (choiceNumber) {
  feedback.textContent = quiz[j].choices[choiceNumber].feedback
}

nextQuiz.onclick = function () {
  j++
  const underchoices = document.getElementById("underChoices")
  underchoices.remove()
  reloadQuiz(j)
}

reloadQuiz(0)
