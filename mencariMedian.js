function cariMedian(arr) {
    // you can only write your code here!
    var result = 0
    
    for (var i = 0; i < arr.length; i++) {
      if (arr.length % 2 === 1) {
        result = arr[Math.floor(arr.length / 2)]
      } else if (arr.length % 2 === 0) {
        // console.log(arr[(arr.length/2) - 1])
        result = (arr[arr.length/2] + arr[(arr.length/2) - 1]) / 2  
  
      }
    }
    console.log(result)
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5