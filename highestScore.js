function highestScore (students) {
    // Code disini
    // var score = 0
    for (var i = 0; i < students.length; i++) {
        for (var j = 0; j < students.length; j++) {
            if (i !== j) {
                if ( students[i] !== undefined && students[j] !== undefined) {
                    if (students[i].class === students[j].class) {
                        if (students[i].score > students[j].score) {
                            // score = students[i].score
                            students[j] = undefined
                        }

                    }
                }
            }
        }
    }
    // console.log(students)
    var resultObj = {}
    for (var i = 0; i < students.length; i++) {
        var tempObj = {}
        if (students[i] !== undefined) {
            tempObj.name = students[i].name
            tempObj.score = students[i].score
            resultObj[students[i].class] = tempObj
        }
    }
    return resultObj
    
  }
  
  // TEST CASE
  console.log(highestScore([
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
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
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
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}