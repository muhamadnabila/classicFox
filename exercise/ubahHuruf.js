function ubahHuruf(kata) {
    // you can only write your code here!
    var result =  ''
    var kamus = 'abcdefghijklmnopqrstuvwxyz'
    for (var i =0; i < kata.length; i++) {
      for (var j = 0; j < kamus.length; j++) {
        if (kata[i] === kamus[j]) {
          if (kata[i] === 'z') {
            result += 'a'
          }else {
            result += kamus[j+1]
          }
        }
      }
    }
    return result
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('kzren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu