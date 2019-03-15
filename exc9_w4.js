function checkAB(num) {
    var distenceA = []
    var distenceB = []
    // var result = false
    for (var i = 0; i < num.length; i++) {
      if (num[i] === 'a') {
        distenceA.push(i)
      }else if (num[i] === 'b') {
        distenceB.push(i)
      }
    }
    console.log(distenceA, distenceB)
    if (distenceA.length === 0 || distenceB.length === 0) {
      return false
    }
      for (var j = 0; j < distenceA.length; j++) {
        for (var k = 0; k < distenceB.length; k++) {
          if (Math.abs(distenceA[j] - distenceB[k]) === 4) {
            return true
          }
        }
      }
    return false
}
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false