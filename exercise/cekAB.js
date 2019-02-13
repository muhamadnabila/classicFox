function checkAB(string) {
    // you can only write your code here!
    var counterA = 0
    var counterB = 0
    var jarak = 0
    for (var i = 0; i < string.length; i++) {
      if (string[i] === 'a') {
        counterA = i
      }else if (string[i] === 'b') {
        counterB = i
      }
      jarak = Math.abs(counterA - counterB)
      // console.log(counterA,counterB)
      if (jarak === 4) {
          return true
      } 
    }
      return false
  
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowedb')); // true
  console.log(checkAB('i am sickb')); // false
  console.log(checkAB('you are boringb')); // true
  console.log(checkAB('barbarianb')); // true
  console.log(checkAB('bacon and meatb')); // false