function fpb(angka1, angka2) {
    // you can only write your code here!
    var tempFpb = []
    
    
    if (angka1 > angka2) {
      var angkaTerbesar = angka1
    }else {
      angkaTerbesar = angka2
    }
    // console.log(angkaTerbesar)
    for (var i = 0; i < angkaTerbesar; i++) {
      if (angka1 % i === 0 && angka2 % i === 0 ) {
        tempFpb.push(i)
      }
    }
    // console.log(tempFpb)
    return tempFpb[tempFpb.length-1]
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1