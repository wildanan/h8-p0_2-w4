function digitPerkalianMinimum(angka) {
    // var angkaKecil = 0
    var arrkali = []
    var pembagian = 0
    var pembagianStr = ''
    var digitTerkecil = 0
    for (var i = 1; i <= angka; i++) {
        pembagian = angka / i 
    
        pembagianStr = i.toString() + pembagian.toString()
        
        if (pembagian % 1 === 0) {
            console.log(pembagianStr.length, 'digitTerkecil')
            if (digitTerkecil === 0) {
                digitTerkecil = pembagianStr.length
            }

            if (digitTerkecil > pembagianStr.length) {
                digitTerkecil = pembagianStr.length
            // }
            }
            
        }
        
    }
    return digitTerkecil
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2