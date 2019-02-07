function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    if (kalimat.length === 0) {
      return ''
    }else {
      var result = ''
      var hurufKecil = kalimat.toLowerCase()
      var hurufBesar = kalimat.toUpperCase()
      for (var i = 0; i < hurufBesar.length; i++) {
        if (kalimat[0] === hurufBesar[i]) {
            result += hurufKecil[i]
        } 
        else if (kalimat[0] === hurufKecil[i]) {
          result += hurufBesar[i]
        }
      return result + tukarBesarKecil(kalimat.slice(1))
      }
    }
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"