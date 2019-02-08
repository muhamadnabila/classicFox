function totalDigitRekursif(angka) {
    // you can only write your code here!
    var stringAngka = String(angka)
    if (stringAngka.length === 0) {
        return 0
    }else {
        var counter = Number(stringAngka[0])
        return counter + totalDigitRekursif(stringAngka.slice(1))
    }
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5