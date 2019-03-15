
function shoppingTime(memberId, money) {
//   var obj = {}
  var listBarang = [['sepatuSacatu', 1500000], ['Zoro', 500000], ['H&N', 250000], ['Uniklooh', 175000], ['casingHandphone', 50000]]
  var kembalian = 0

  if (memberId === '' || memberId === undefined || money === undefined) {
      return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  }else if (money <= 15000) {
      return 'Mohon maaf, uang tidak cukup'
  }else{
    var change = money
    var obj = {}
    obj.memberID = memberId
    obj.money = money
    obj.lisPurchased = []
    obj.changeMoney = change

    
    for (var i = 0; i < listBarang.length; i++) {
        var harga = listBarang[i][1]
        // console.log(change, 'kemba')
        if (money >= harga) {
            obj.lisPurchased.push(listBarang[i][0])
            obj.changeMoney -= harga
        }
        // obj.changeMoney = change
    }
  }
      
  return obj
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja