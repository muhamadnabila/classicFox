function pasanganTerbesar(num) {
    // you can only write your code here!
    var stringNum = String(num)
    var temp = Number(stringNum[0] + stringNum[1])
    for (var i = 0; i < stringNum.length; i++) {
      if (stringNum[i] + stringNum[i+1] > temp) {
        temp = stringNum[i] + stringNum[i+1]
      }
    }
    return Number(temp)
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99