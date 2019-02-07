// function palindrome(kata) {
//   // you can only write your code here!
//   var temp = ''
//   for (var i = kata.length-1; i >= 0; i--) {
//     temp += kata[i]
//   }
//   if (temp === kata) {
//     return true
//   }else {
//     return false
//   }
// }

// // TEST CASES
// console.log(palindrome('katak')); // true
// console.log(palindrome('blanket')); // false
// console.log(palindrome('civic')); // true
// console.log(palindrome('kasur rusak')); // true
// console.log(palindrome('mister')); // false

// function angkaPalindrome(num) {
//   // you can only write your code here!
//   for (var i = 0; i < num; i++) {
//     num++
//     var stringNum = String(num)
//     var temp = ''
//     for (var j = stringNum.length-1; j >= 0; j--) {
//         temp += stringNum[j]
//     }
//     if (temp === stringNum) {
//       return num
//     }
//   }
// }

// // TEST CASES
// console.log(angkaPalindrome(8)); // 9
// console.log(angkaPalindrome(10)); // 11
// console.log(angkaPalindrome(117)); // 121
// console.log(angkaPalindrome(175)); // 181
// console.log(angkaPalindrome(1000)); // 1001
// function hitungJumlahKata(kalimat) {
//   // you can only write your code here!
//   var counter = 1
//   for (var i = 0; i < kalimat.length; i++) {
//     if (kalimat[i] === ' ')
//     counter++
//   }
//   return counter
// }

// // TEST CASES
// console.log(hitungJumlahKata('I have a dream')); // 4
// console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
// console.log(hitungJumlahKata('A song to sing')); // 4
// console.log(hitungJumlahKata('I')); // 1
// console.log(hitungJumlahKata('I believe I can code')); // 5
// function pasanganTerbesar(num) {
//   // you can only write your code here!
//   var stringNum = String(num)
//   var temp = Number(stringNum[0] + stringNum[1])
//   for (var i = 0; i < stringNum.length; i++) {
//     if (stringNum[i] + stringNum[i+1] > temp) {
//       temp = stringNum[i] + stringNum[i+1]
//     }
//   }
//   return Number(temp)
// }

// // TEST CASES
// console.log(pasanganTerbesar(641573)); // 73
// console.log(pasanganTerbesar(12783456)); // 83
// console.log(pasanganTerbesar(910233)); // 91
// console.log(pasanganTerbesar(71856421)); // 85
// console.log(pasanganTerbesar(79918293)); // 99
// function cariMean(arr) {
//   // you can only write your code here!
//   var counter = 0
//   for (var i = 0; i < arr.length; i++) {
//     counter += arr[i]
//   }
//   var mean =  Math.round(counter/arr.length)
//   return mean
// }

// // TEST CASES
// console.log(cariMean([1, 2, 3, 4, 5])); // 3
// console.log(cariMean([3, 5, 7, 5, 3])); // 5
// console.log(cariMean([6, 5, 4, 7, 3])); // 5
// console.log(cariMean([1, 3, 3])); // 2
// console.log(cariMean([7, 7, 7, 7, 7])); // 7
// function perkalianUnik(arr) {
//   // you can only write your code here!
//   var hasil = []
//   for ( var i = 0; i < arr.length; i++) {
//   var counter = 1
//     for ( var j = 0; j < arr.length; j++) {
//       if (i !== j) {
//       counter *= arr[j] 

//       }
//     }
//     hasil.push(counter)
//   }
//   return hasil
// }

// // TEST CASES
// console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
// console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
// console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
// console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
// console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
// function tentukanDeretAritmatika(arr) {
//   // you can only write your code here!
//   var banding = arr[1] - arr[0]
//   console.log(banding)
//   var flag = false
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i+1] !== undefined) {
//       if (arr[i+1] - arr[i] === banding ) {
//           flag = true
//       }else {
//         return false
//       }
//     }
//   }
//   if (flag === true) {
//     return true
//   }
// }

// // TEST CASES
// console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
// console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
// console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
// console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
// console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
// function tentukanDeretGeometri(arr) {
//   // you can only write your code here!
//   var banding = arr[1]/arr[0]
//   var flag = false
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i+1] !== undefined) {
//       if (arr[i+1] / arr[i] === banding) {
//           flag = true
//       }else {
//         return false
//       }
//     }
//   }
//   if (flag === true) {
//     return true
//   }
// }

// // TEST CASES
// console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
// console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
// console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
// console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
// console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
// function targetTerdekat(arr) {
//   // you can only write your code here!
//   var tempJarak = []
//   var countx = 0
//   var counto = 0
//   var counter = 0
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === 'x') {
//       countx = i+1
//     }else if (arr[i] === 'o') {
//       counto = i+1
//     }
//     if (counto !== 0 && countx !== 0) {
//       tempJarak.push(Math.abs(countx - counto))
//     }
//   }
//   // console.log(tempJarak)
//   var jarak = 0
//   for (var i = 0; i < tempJarak.length; i++) {
//     for (var j = 0; j < tempJarak.length; j++) {
//       if (i !== j) {
//         if (tempJarak[i] != undefined && tempJarak[j] !== undefined) {
//           if (tempJarak[i] < tempJarak[j] || tempJarak[i] === tempJarak[j]) {
//             jarak = tempJarak[i]
//             tempJarak[j] = undefined
//           }
//         }

//       }
//     }
//   }
//   return jarak
// }

// // TEST CASES
// console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
// console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
// console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
// console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
// console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
// function mengelompokkanAngka(arr) {
//   // you can only write your code here!
//   var angkGenap = []
//   var angkaGanjil = []
//   var angkaKelipatan3 = []
//   var result = []
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0) {
//       angkaKelipatan3.push(arr[i])
//     } else if (arr[i] % 2 === 0) {
//       angkGenap.push(arr[i])
//     }else if (arr[i] % 3 === 1) {
//       angkaGanjil.push(arr[i])
//     }
//   }
//   result.push(angkGenap,angkaGanjil,angkaKelipatan3)
//   return result
  
// }

// // TEST CASES
// console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
// console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
// console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
// console.log(mengelompokkanAngka([])); // [ [], [], [] ]
// function groupAnimals(animals) {
//   // you can only write your code here!
//   var vocals = []
//   for (var i = 0; i < animals.length; i++) {
//     var flag = true
//     for (var j = 0; j < vocals.length; j++) {
//       if (animals[i][0] === vocals[j]) {
//         flag = false
//       }
//     }
//     if (flag === true) {
//       vocals.push(animals[i][0])
//     }
//   }
//   for (var i = 0; i < vocals.length; i++) {
//     var tempSort = ''
//     for (var j = 0; j < vocals.length; j++) {
//       if (vocals[i] < vocals[j]) {
//         tempSort = vocals[i]
//         vocals[i] = vocals[j]
//         vocals[j] = tempSort
//       }
//     }
//   }
//   // console.log(vocals)
//   var result = []
//   for (var i = 0; i < vocals.length; i++) {
//     var tempHewan = []
//     for (var j = 0; j < animals.length; j++) {
//       if (vocals[i] === animals[j][0]) {
//         tempHewan.push(animals[j])
//       }
//     }
//     result.push(tempHewan)
//   }
//   return result
// }

// // TEST CASES
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
// function angkaPrima(angka) {
//   // you can only write your code here!
//   var flag = true
//   for (var i = 2; i < angka; i++) {
//     // console.log(i)
//     if (angka % i === 0) {
//       flag = false
//     }
//   }
//   if (flag === true) {
//       return true
//   } else {
//       return false
//   }
// }

// // TEST CASES
// console.log(angkaPrima(3)); // true
// console.log(angkaPrima(7)); // true
// console.log(angkaPrima(6)); // false
// console.log(angkaPrima(23)); // true
// console.log(angkaPrima(33)); // false
// function fpb(angka1, angka2) {
//   // you can only write your code here!
//   var tempFpb = []
  
  
//   if (angka1 > angka2) {
//     var angkaTerbesar = angka1
//   }else {
//     angkaTerbesar = angka2
//   }
//   // console.log(angkaTerbesar)
//   for (var i = 0; i < angkaTerbesar; i++) {
//     if (angka1 % i === 0 && angka2 % i === 0 ) {
//       tempFpb.push(i)
//     }
//   }
//   // console.log(tempFpb)
//   return tempFpb[tempFpb.length-1]
// }

// // TEST CASES
// console.log(fpb(12, 16)); // 4
// console.log(fpb(50, 40)); // 10
// console.log(fpb(22, 99)); // 11
// console.log(fpb(24, 36)); // 12
// console.log(fpb(17, 23)); // 1
// function cariMedian(arr) {
//   // you can only write your code here!
//   var result = 0
  
//   for (var i = 0; i < arr.length; i++) {
//     if (arr.length % 2 === 1) {
//       result = arr[Math.floor(arr.length / 2)]
//     } else if (arr.length % 2 === 0) {
//       // console.log(arr[(arr.length/2) - 1])
//       result = (arr[arr.length/2] + arr[(arr.length/2) - 1]) / 2  

//     }
//   }
//   console.log(result)
// }

// // TEST CASES
// console.log(cariMedian([1, 2, 3, 4, 5])); // 3
// console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
// console.log(cariMedian([3, 4, 7, 6, 10])); // 7
// console.log(cariMedian([1, 3, 3])); // 3
// console.log(cariMedian([7, 7, 8, 8])); // 7.5
// function cariModus(arr) {
//   // you can only write your code here!
//   var tempModus = []
//   for (var i = 0; i < arr.length; i++) {
//     var flag = false
//     for (var j = 0; j < arr.length; j++) {
//       if (i !== j) {
//           if (arr[i] === arr[j]) {
//             flag = true
//           }
//       }
//     }
//     if (flag === true) {
//       tempModus.push(arr[i])
//     }
//   }
//   // console.log(tempModus)
//   if ( tempModus.length === 0 || tempModus.length === arr.length) {
//     return -1
//   } else {
//     return tempModus[0]
//   }
// }

// // TEST CASES
// console.log(cariModus([10, 4, 5, 2, 4])); // 4
// console.log(cariModus([5, 10, 10, 6, 5])); // 5
// console.log(cariModus([10, 3, 1, 2, 5])); // -1
// console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
// console.log(cariModus([7, 7, 7, 7, 7])); // -1
// function ubahHuruf(kata) {
//   // you can only write your code here!
//   var result =  ''
//   var kamus = 'abcdefghijklmonpqrstuvwxyz'
//   for (var i =0; i < kata.length; i++) {
//     for (var j = 0; j < kamus.length; j++) {
//       if (kamus[j] === kata[i]) {
//         result += kamus[j+1]
//       }
//     }
//   }
//   return result
// }

// // TEST CASES
// console.log(ubahHuruf('wow')); // xpx
// console.log(ubahHuruf('developer')); // efwfmpqfs
// console.log(ubahHuruf('javascript')); // kbwbtdsjqu
// console.log(ubahHuruf('keren')); // lfsfo
// console.log(ubahHuruf('semangat')); // tfnbohbu
// function digitPerkalianMinimum(angka) {
//   // you can only write your code here!
//   var tempJoin = []
//   for (var i = 0; i <= angka; i++) {
//     var join = ''
//     var temp  = []
//     for (var j = 0; j <= angka; j++) {
//       if (i * j === angka) {
//         temp.push(i,j)
//       }
//     }
//     join = Number(temp.join(''))
//     if (join !== 0) {
//       tempJoin.push(join)
//     } 
//   } 
//     // console.log(tempJoin)
//   var digitTerkecil = 0
//   for (var i = 0; i < tempJoin.length; i++) {
//     for (var j = 0; j < tempJoin.length; j++) {
//       if (tempJoin[i] !== undefined && temp[j] !== undefined) {
//         if (tempJoin[i] < tempJoin[j]) {
//           digitTerkecil = tempJoin[i]
//           tempJoin[j] = undefined
//         }
//       }
//     }
//   }  
//   // console.log(digitTerkecil)
//   var hasil = String(digitTerkecil)
//   if (hasil === '0') {
//     return 2
//   }else {
//     return hasil.length
//   }
// }

// // TEST CASES
// console.log(digitPerkalianMinimum(24)); // 2
// console.log(digitPerkalianMinimum(90)); // 3
// console.log(digitPerkalianMinimum(20)); // 2
// console.log(digitPerkalianMinimum(179)); // 4
// console.log(digitPerkalianMinimum(1)); // 2
// function urutkanAbjad(str) {
//   // you can only write your code here!
//   var strArray = str.split('')
//   for (var i = 0; i < strArray.length; i++) {
//     var temp = ''
//     for (var j = 0; j < strArray.length; j++) {
//       if (strArray[i] < strArray[j]) {
//         temp = strArray[i]
//         strArray[i] = strArray[j]
//         strArray[j] = temp
//       }
//     }
//   }
//   return strArray.join('')
// }

// // TEST CASES
// console.log(urutkanAbjad('hello')); // 'ehllo'
// console.log(urutkanAbjad('truncate')); // 'acenrttu'
// console.log(urutkanAbjad('developer')); // 'deeeloprv'
// console.log(urutkanAbjad('software')); // 'aeforstw'
// console.log(urutkanAbjad('aegis')); // 'aegis'
// function tukarBesarKecil(kalimat) {
//   // you can only write your code here!
//   if (kalimat.length === 0) {
//     return ''
//   }else {
//     var result = ''
//     var hurufKecil = kalimat.toLowerCase()
//     var hurufBesar = kalimat.toUpperCase()
//     for (var i = 0; i < hurufBesar.length; i++) {
//       if (kalimat[0] === hurufBesar[i]) {
//           result += hurufKecil[i]
//       } 
//       else if (kalimat[0] === hurufKecil[i]) {
//         result += hurufBesar[i]
//       }
//     return result + tukarBesarKecil(kalimat.slice(1))
//     }
//   }
// }

// // TEST CASES
// console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
// console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
// console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
// console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
// console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
// function checkAB(string) {
//   // you can only write your code here!
//   var counterA = 0
//   var counterB = 0
//   var jarak = 0
//   for (var i = 0; i < string.length; i++) {
//     if (string[i] === 'a') {
//       counterA = i
//     }else if (string[i] === 'b') {
//       counterB = i
//     }
//     jarak = Math.abs(counterA - counterB)
//   }
//   if (jarak === 4) {
//       return true
//   } else {
//       return false
//   }
// }

// // TEST CASES
// console.log(checkAB('lane borrowed')); // true
// console.log(checkAB('i am sick')); // false
// console.log(checkAB('you are boring')); // true
// console.log(checkAB('barbarian')); // true
// console.log(checkAB('bacon and meat')); // false
function changeMe(arr) {
    // you can only write your code here!
    // var name = {}
    if (arr.length === 0) {
      console.log('')
    }
    var biodata = {}
    var nomor = 0
    for (var i = 0; i < arr.length; i++) {
      nomor++
      biodata.firstName = arr[i][0]
      biodata.lastName = arr[i][1]
      biodata.gender = arr[i][2]
      if (arr[i][3] > 2018 || arr[i][3] === undefined) {
        biodata.age = 'Invalid Birth Year'
      }else {
        biodata.age = 2018 - arr[i][3]
      }
      // name += biodata
      // name += '\n'
      console.log(nomor + '. ' + arr[i][0] + arr[i][1] + ':')
      console.log(biodata)
    }
    
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""