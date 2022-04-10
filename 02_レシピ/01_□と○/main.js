const figure = document.getElementById("figure")

let i = 0

figure.onclick = function () {
  if (i == 0) {
    figure.classList.add("rounded")
    i += 1
  } else if (i == 1) {
    figure.classList.add("triangle")
    figure.classList.remove("rounded")
    figure.classList.remove("square")
    i += 1
  } else {
    figure.classList.add("square")
    figure.classList.remove("rounded")
    figure.classList.remove("triangle")
  }
  // remove("rounded square")というように複数指定するのではなく、1つずつ命令を指定することでうまくいった
}
