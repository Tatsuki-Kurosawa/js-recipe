const person = document.getElementById("person")
const reportingForWork = document.getElementById("reporting-for-work")
const returnFromSpace = document.getElementById("return-from-space")
const quitWorkingButton = document.getElementById("quit-working-button")
const launchButton = document.getElementById("launch-button")

let isWorking = true
let isInSpace = false

const draw = function () {
  if (isWorking) {
    person.textContent = "🧑‍💻"
  } else {
    person.textContent = "😄"
  }

  if (isInSpace) {
    person.textContent += "✨🪐✨"
  } else {
    person.textContent += "🈁➡️🌏"
  }
}

reportingForWork.onclick = function () {
  isWorking = true
  draw()
}

returnFromSpace.onclick = function () {
  isInSpace = false
  draw()
}

quitWorkingButton.onclick = function () {
  isWorking = false
  draw()
}

launchButton.onclick = function () {
  isInSpace = true
  draw()
}

draw()
