function highestScore (students) {
    
    var obj = {}
  
    // console.log(tertinggi)
    for (var i = 0; i < students.length; i++) {
        // if(tertinggi < students[i].score){
        //     tertinggi = students[i].score
        // }
        // console.log(students[i].class)
       //console.log(obj[students[i]]) 
        if (obj[students[i].class] === undefined){
            obj[students[i].class] = {}
            obj[students[i].class].name = students[i].name
            obj[students[i].class].score = students[i].score
        }

        //obj[students[i].class].name = students[i].name
        //obj[students[i].class].score = 
        //console.log("hello ===> ", tertinggi.score, students[i].score )
        if (students[i].score > obj[ students[i].class ].score ) {
            // obj[students[students[i].class]
            obj[students[i].class].name = students[i].name
            obj[students[i].class].score = students[i].score
        }        
        
    }

    return obj
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
      score: 75,
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