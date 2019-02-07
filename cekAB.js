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
    }
    if (jarak === 4) {
        return true
    } else {
        return false
    }
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false