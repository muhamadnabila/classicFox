function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var tempJoin = []
    for (var i = 0; i <= angka; i++) {
      var join = ''
      var temp  = []
      for (var j = 0; j <= angka; j++) {
        if (i * j === angka) {
          temp.push(i,j)
        }
      }
      join = Number(temp.join(''))
      if (join !== 0) {
        tempJoin.push(join)
      } 
    } 
      // console.log(tempJoin)
    var digitTerkecil = 0
    for (var i = 0; i < tempJoin.length; i++) {
      for (var j = 0; j < tempJoin.length; j++) {
        if (tempJoin[i] !== undefined && temp[j] !== undefined) {
          if (tempJoin[i] < tempJoin[j]) {
            digitTerkecil = tempJoin[i]
            tempJoin[j] = undefined
          }
        }
      }
    }  
    // console.log(digitTerkecil)
    var hasil = String(digitTerkecil)
    if (hasil === '0') {
      return 2
    }else {
      return hasil.length
    }
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2