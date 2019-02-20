function meleeRangedGrouping (str) {
    //your code here
    if (str.length === 0) {
        return []
    }
    var hasil = [[],[]]
    var splitStr = str.split(',')
    for (var i = 0; i < splitStr.length; i++) {
        var splitSecond = splitStr[i].split('-')
            if (splitSecond[1] === 'Ranged') {
                hasil[0].push(splitSecond[0])   
            }else if (splitSecond[1] === 'Melee'){
                hasil[1].push(splitSecond[0])
            }
    }
    return hasil
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []