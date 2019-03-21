function changeMe(arr) {
    var obj = {}
    var age = 0
    var name = ''
    if (arr.length === 0) {
        obj = ''
    }else{
        for (var i = 0; i < arr.length; i++) {
            age = arr[i][3]
            if (age === undefined || age > 2019) {
                age = 'Invalid Birth Date'
            }else if (age < 2019){
                age = 2019 - age
            }
            console.log('1. ' + arr[i][0] + arr[i][1] + ':')
            obj.firstName = arr[i][0]
            obj.lastName = arr[i][1]
            obj.gender = arr[i][2]
            obj.age = age
    
            console.log(obj)
        }
    }
}
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 2982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""