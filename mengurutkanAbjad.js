function urutkanAbjad(str) {
    // you can only write your code here!
    var strArray = str.split('')
    for (var i = 0; i < strArray.length; i++) {
      var temp = ''
      for (var j = 0; j < strArray.length; j++) {
        if (strArray[i] < strArray[j]) {
          temp = strArray[i]
          strArray[i] = strArray[j]
          strArray[j] = temp
        }
      }
    }
    return strArray.join('')
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'