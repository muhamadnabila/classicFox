function graduates (students) {
    // Code disini
    // var tempClass = []
    // var filterStudents = []
    // for (var i = 0; i < students.length; i++) {
    //     var flagClass = true
    //     var flagScore = true
    //     if (students[i].score < 75) {
    //         flagScore = false
    //     }
    //     for (var j = 0; j < tempClass.length; j++) {
    //         if (students[i].class === tempClass[j]) {
    //             flagClass = false
    //         }
    //     }
    //     if (flagClass === true ) {
    //         tempClass.push(students[i].class)
    //     }
    //     if (flagScore === true)  {
    //         filterStudents.push(students[i])
    //     }

    // }
    // // console.log(filterStudents)
    // var result = {}
    // for ( var i = 0; i < tempClass.length; i++) {
    //     var tempArray = []
    //     for ( var j = 0; j < filterStudents.length; j++) {
    //         if (tempClass[i] === filterStudents[j].class) {
    //             var tempObj = {}
    //             tempObj.name = filterStudents[j].name
    //             tempObj.score = filterStudents[j].score
    //             tempArray.push(tempObj)
    //         }
    //     }
    //     result[tempClass[i]] = tempArray
    // }
    // return result

    var result = {}
    for (var i = 0; i < students.length; i++) {
        var array = []
        for ( var j = 0; j < students.length; j++) {
            if (students[j].score > 75) {
            var tempObj = {}
                if (students[i].class === students[j].class) {
                    tempObj.name = students[j].name
                    tempObj.score = students[j].score
                    array.push(tempObj)
                }
            }
        }
        result[students[i].class] = array
    }
    return result
  }
  
  console.log(graduates([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  console.log(graduates([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
//   // {
//   //   foxes: [
//   //     { name: 'Alexander', score: 100 },
//   //     { name: 'Vladimir', score: 92 }
//   //   ],
//   //   wolves: [
//   //     { name: 'Alisa', score: 76 },
//   //   ],
//   //   tigers: [
//   //     { name: 'Viktor', score: 80 }
//   //   ]
//   // }
  
  
  console.log(graduates([])); //{}