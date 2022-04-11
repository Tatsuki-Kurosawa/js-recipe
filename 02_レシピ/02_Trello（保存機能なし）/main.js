const inputElement_1 = document.getElementById("input-todo-1")
const inputElement_2 = document.getElementById("input-todo-2")
const inputElement_3 = document.getElementById("input-todo-3")
const container_1 = document.getElementById("cards-container-1")
const container_2 = document.getElementById("cards-container-2")
const container_3 = document.getElementById("cards-container-3")

inputElement_1.onkeydown = function (enter_Key) {
  const card = createCard(inputElement_1.value)
  if (enter_Key.key === "Enter") {
    container_1.append(card)
    inputElement_1.value = ""
  }
}

inputElement_2.onkeydown = function (enter_Key) {
  const card = createCard(inputElement_2.value)
  if (enter_Key.key === "Enter") {
    container_2.append(card)
    inputElement_2.value = ""
  }
}

inputElement_3.onkeydown = function (enter_Key) {
  const card = createCard(inputElement_3.value)
  if (enter_Key.key === "Enter") {
    container_3.append(card)
    inputElement_3.value = ""
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
