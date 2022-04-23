const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")

addButton.onclick = function () {
  console.log(memoInput.value)
  const newTag = document.createElement("div") // createElementだけでは要素を追加できていない
  newTag.textContent = memoInput.value
  memoContainer.append(newTag) // appendを使うことで要素を追加することができる
  memoInput.value = ""
}
