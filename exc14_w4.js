function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var angkod = []
    var indexBer = 0
    var indexPul = 0
    
    for (var i = 0; i < arrPenumpang.length; i++) {
        for (var j = 0; j < rute.length; j++) {
            if (rute[j] === arrPenumpang[i][1]){
                indexBer = j
            } else if (rute[j] === arrPenumpang[i][2]) {
                indexPul = j
            }
        }
        var obj = {}
            obj.penumpang = arrPenumpang[i][0]
            obj.naikDari = arrPenumpang[i][1]
            obj.tujuan = arrPenumpang[i][2]
            obj.bayar = (Math.abs(indexPul - indexBer)) * 2000

                angkod.push(obj)
    }
    return angkod
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]