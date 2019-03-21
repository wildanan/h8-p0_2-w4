// function ubahHuruf(kata) {
//     var kamus = 'abcdefghijklmnopqrstuvwxyz'
//     var kataBaru = ''
//     for (var i = 0; i < kata.length; i++) {
//         for (var j = 0; j < kamus.length; j++) {
//             if (kata[i] === kamus[j]) {
//                 kataBaru += kamus[j + 1]
//             }
//         }
//         if (kata[i] === kamus[kamus.length -1]){
//             kataBaru += kamus[0]
//         }else if (kata[i] === ' ') {
//             kataBaru += ' '
//         }
//     }
//         // console.log(kamus[0], '<== ini kamus')
//     return kataBaru
    
//   }

function ubahHuruf(kata) {
    var kamus = 'abcdefghijklmnopqrstuvwxyz'
    var kataBaru = ''
    for (var i = 0; i < kata.length; i++) {
        for (var j = 0; j < kamus.length; j++) {
            if (kata[i] === kamus[j]) {
                kataBaru += kamus[j + 1]
            
            }else if (kata[i] === kamus[kamus.length -1]){
                kataBaru += kamus[0]
                break
            }else if (kata[i] === ' ') {
                kataBaru += ' '
                break
            }
        }
    }
        // console.log(kamus[0], '<== ini kamus')
    return kataBaru
    
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu
  console.log(ubahHuruf('ini adalah z'))
  console.log(ubahHuruf('apakah zudah venar zemua'))