const three = function (number) {
  //   for (let i = 1; i <= number; i++) {
  let a
  let b = 0
  let c
  let flag = 0
  a = number
  while (a != 0) {
    c = a
    a /= 10
    if (0 <= a && a <= 9) {
      b = c % 10
    }
    if (a == 3 || b == 3) {
      console.log(`${number}!!!!!!!`)
      flag = 1
      break
    }
  }
  if (flag == 0) {
    console.log(number)
    // }
  }
}

three(31)
