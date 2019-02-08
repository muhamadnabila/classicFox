function changeVocals (str) {
    //code di sini
    var kamusKecil = 'abcdefghijklmnopqrstuvwxyz'
    var kamusBesar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var changeVocals = ''
    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'i' || str[i] === 'u' || str[i] === 'e' || str[i] === 'o'||str[i] === 'A' || str[i] === 'I' || str[i] === 'U' || str[i] === 'E' || str[i] === 'O'){
            for (var j = 0; j < kamusKecil.length; j++) {
                if (str[i] === kamusKecil[j]) {
                    changeVocals += kamusKecil[j+1]
                }else if (str[i] === kamusBesar[j]) {
                    changeVocals += kamusBesar[j+1]
                }
            }
        }else {
            changeVocals += str[i]
        }
    }
    return changeVocals
}
function reverseWord (str) {
      //code di sini
      
      var reverseWord = ''
      for (var i = str.length-1; i >= 0; i--) {
        reverseWord += str[i]
      }
      return reverseWord
}
    
function setLowerUpperCase (str) {
            //code di sini
        
        var kamusKecil = 'abcdefghijklmnopqrstuvwxyz'
        var kamusBesar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        var setLowerUpperCase = ''
        // console.log(hasilReverseWord)
        for (var i = 0; i < str.length; i++) {
            if (str[i] === ' ') {
                setLowerUpperCase += str[i]
            }
            for (var j = 0; j < kamusBesar.length; j++) {
                if (str[i] === kamusBesar[j]) {
                    setLowerUpperCase += kamusKecil[j]
                } if (str[i] === kamusKecil[j]) {
                    setLowerUpperCase += kamusBesar[j]
                }
            }
        }
        return setLowerUpperCase
}
        

function removeSpaces (str) {
        //code di sini
    
    var removeSpaces = ''
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            removeSpaces += str[i]
        }
    }
    return removeSpaces
}
// console.log(setLowerUpperCase('Sergei Dragunov')); 

  function passwordGenerator (name) {
    //code di sini
    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    var hasilChangeVocals = changeVocals(name)
    var hasilReverseWord = changeVocals(hasilChangeVocals)
    var hasilSetLowerUpperCase = reverseWord(hasilReverseWord)
    var hasilRemoveSpaces = setLowerUpperCase(hasilSetLowerUpperCase)
    var passwordGenerator = removeSpaces(hasilRemoveSpaces)
    return passwordGenerator
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
  