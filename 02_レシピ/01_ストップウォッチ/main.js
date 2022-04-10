const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0

const countUp = function () {
  count += 0.01
  console.log(count)
  display.textContent = count
}

let id = null

button.onclick = function () {
  if (id === null) {
    // start
    id = setInterval(countUp, 10)
    button.textContent = "stop"
  } else {
    // stop
    clearInterval(id)
    id = null
    button.textContent = "start"
  }
}

// 謎のずれの原因
// 10進数の0.01を2進数で表そうとすると、20桁周期の循環小数で表されるので、
// 0.01の加算が進むたびに小さい桁での加算が行われて期待したように時間が表示されない
// 参照：https://qiita.com/angel_p_57/items/24078ba4aa5881805ab2
