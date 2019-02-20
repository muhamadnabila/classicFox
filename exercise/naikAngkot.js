function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var hasilArray = []
    for (var i = 0; i < arrPenumpang.length; i++) {
      var obj = {
        penumpang : arrPenumpang[i][0],
        naikDari : arrPenumpang[i][1],
        tujuan : arrPenumpang[i][2],
        bayar : 2000
      }
      var jarak = 0
      for (var j = 0; j < rute.length; j++) {
        if (rute[j] === obj.naikDari) {
          jarak = Math.abs(jarak - j)  
        }
        else if (rute[j] === obj.tujuan) {
          jarak = Math.abs(jarak - j) 
        }
      }
      obj.bayar *= jarak
      hasilArray.push(obj)
    }
    return hasilArray
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]