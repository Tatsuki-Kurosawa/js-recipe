const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
// const addButton = document.getElementById("add-button")

inputElement.onkeydown = function (enter_Key) {
  const card = createCard(inputElement.value)
  if (enter_Key.key === "Enter") {
    container.append(card)
    inputElement.value = ""
  }
}

const createCard = function (text) {
  // 中身を受け取る createCardメソッドの引数を受け取る
  const card = document.createElement("div")
  card.className = "card"
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"
  // 中に書く
  deleteButton.onclick = function () {
    card.remove()
  }
  card.append(deleteButton)

  return card
}

// addButton.onclick = function () {
//   const text = inputElement.value
//   const card = document.createElement("div") // <div></div> ノードを作成
//   card.className = "card" // <div class="card"></div> クラス名追加
//   const todo = document.createElement("div") // <div></div> ノードを作成
//   todo.className = "todo" // <div class="todo"></div> クラス名追加
//   todo.textContent = text // <div class="todo">text</div> 中身を記入
//   card.append(todo)
//   const deleteButton = document.createElement("div")
//   deleteButton.className = "delete"

//   deleteButton.onclick = function () {
//     card.remove()
//   }

//   card.append(deleteButton)
//   container.append(card) // 追加
//   inputElement.value = ""
// }
