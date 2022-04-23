const mainTopInfo = document.getElementById("main-top-info")

window.onscroll = function () {
  let scrollValue = window.pageYOffset
  let scrollTop = mainTopInfo.getBoundingClientRect().top + scrollValue
  let windowHeight = window.innerHeight
  let value = 400
  if (scrollValue > scrollTop - windowHeight + value) {
    mainTopInfo.classList.remove("main-top-info")
    mainTopInfo.classList.add("backColor")
  }
}

// スクロールすると、スクロール量はだんだん大きくなり、要素のtop値はだんだん小さくなる
// この2つを足すことで、要素の位置を固定する
// スクロール量 > (要素のtop値+スクロール量)ー画面の高さ＋表示されるタイミング
// 大抵(要素のtop値+スクロール量)の値は画面の高さより大きい
