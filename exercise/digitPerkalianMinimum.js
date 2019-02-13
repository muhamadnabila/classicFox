function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    if (angka < 10) {
      return 2
    }
    var hasil = ''
   for (var i = 0; i < angka; i++) {
     var string = ''
     var modulus = 0
     if (angka % i === 0) {
        modulus = angka/i
     }
     if (modulus !== 0) {
      string += i
      string += modulus
      }
      if (string.length !== 0) {
        if (hasil.length === 0) {
          hasil = string.length
        }else {
          if (string.length < hasil) {
            hasil = string.length
          }
        }
      }
    }
    return hasil
}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2