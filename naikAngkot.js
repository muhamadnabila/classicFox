function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    if (arrPenumpang.length === 0) {
        return []
    }
    var resultArray = []
    for (var i = 0; i < arrPenumpang.length; i++) {
        var tempObj = {}
        var naik = 0
        var turun = 0
        var cost = 2000
      for (var j = 0; j < rute.length; j++) {
          if (arrPenumpang[i][1] === rute[j]) {
            naik = j
          }else if (arrPenumpang[i][2] === rute[j]) {
            turun = j
          }
      }
        cost *= Math.abs(naik - turun)
    //   console.log(cost)
        tempObj.penumpang = arrPenumpang[i][0]
        tempObj.naikDari = arrPenumpang[i][1]
        tempObj.tujuan = arrPenumpang[i][2]
        tempObj.bayar = cost
        resultArray.push(tempObj)
    }
    return resultArray
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]