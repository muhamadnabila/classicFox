function groupAnimals(animals) {
    // you can only write your code here!
    var vocals = []
    for (var i = 0; i < animals.length; i++) {
      var flag = true
      for (var j = 0; j < vocals.length; j++) {
        if (animals[i][0] === vocals[j]) {
          flag = false
        }
      }
      if (flag === true) {
        vocals.push(animals[i][0])
      }
    }
    for (var i = 0; i < vocals.length; i++) {
      var tempSort = ''
      for (var j = 0; j < vocals.length; j++) {
        if (vocals[i] < vocals[j]) {
          tempSort = vocals[i]
          vocals[i] = vocals[j]
          vocals[j] = tempSort
        }
      }
    }
    // console.log(vocals)
    var result = []
    for (var i = 0; i < vocals.length; i++) {
      var tempHewan = []
      for (var j = 0; j < animals.length; j++) {
        if (vocals[i] === animals[j][0]) {
          tempHewan.push(animals[j])
        }
      }
      result.push(tempHewan)
    }
    return result
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]