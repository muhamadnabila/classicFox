function cariModus(arr) {
    // you can only write your code here!
    var tempModus = []
    for (var i = 0; i < arr.length; i++) {
      var flag = false
      for (var j = 0; j < arr.length; j++) {
        if (i !== j) {
            if (arr[i] === arr[j]) {
              flag = true
            }
        }
      }
      if (flag === true) {
        tempModus.push(arr[i])
      }
    }
    // console.log(tempModus)
    if ( tempModus.length === 0 || tempModus.length === arr.length) {
      return -1
    } else {
      return tempModus[0]
    }
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1