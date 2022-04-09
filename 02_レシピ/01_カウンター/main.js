const display = document.getElementById("display")
const number1Box = document.getElementById("number1")
const number2Box = document.getElementById("number2")
const sign = document.getElementById("sign-button")

let result

const Plus = sign.children[0]
const Minus = sign.children[1]
const Mul = sign.children[2]
const Div = sign.children[3]
const Equal = sign.children[4]

Plus.onclick = function () {
  result = parseInt(number1Box.value) + parseInt(number2Box.value)
}

Minus.onclick = function () {
  result = number1Box.value - number2Box.value
}

Mul.onclick = function () {
  result = number1Box.value * number2Box.value
}

Div.onclick = function () {
  result = number1Box.value / number2Box.value
}

Equal.onclick = function () {
  display.textContent = result
}
