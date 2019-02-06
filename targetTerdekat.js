function targetTerdekat(arr) {
    // you can only write your code here!
    var tempJarak = []
    var countx = 0
    var counto = 0
    var counter = 0
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === 'x') {
        countx = i+1
      }else if (arr[i] === 'o') {
        counto = i+1
      }
      if (counto !== 0 && countx !== 0) {
        tempJarak.push(Math.abs(countx - counto))
      }
    }
    // console.log(tempJarak)
    var jarak = 0
    for (var i = 0; i < tempJarak.length; i++) {
      for (var j = 0; j < tempJarak.length; j++) {
        if (i !== j) {
          if (tempJarak[i] != undefined && tempJarak[j] !== undefined) {
            if (tempJarak[i] < tempJarak[j] || tempJarak[i] === tempJarak[j]) {
              jarak = tempJarak[i]
              tempJarak[j] = undefined
            }
          }
  
        }
      }
    }
    return jarak
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2