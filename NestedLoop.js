// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// var n = 10;
// for(var i = 1; i<=n; i++){
//     var result = '';
//     for (let j = 1; j <= i; j++) {
//          result =result +j + ' ';   
//     }
//     console.log(result);
// }

// *****
// *****
// *****
// *****
// *****
// var m = 5;
// for(var i = 1; i<=m; i++){
//     var result = '';
//     for(var j = 1; j<=m; j++){
//      result += '* '
//     }
//     console.log(result);
// }

// *
// **
// ***
// ****
// *****
// var o = 10;
// for(var i = 1; i<=o; i++){
//     var result = '';
//     for(var j = 1; j<=i; j++){
//         result +='* '; 
//     }
//     console.log(result);
// }

// A
// A A
// A A A
// A A A A
// A A A A A

//  var  l= 10;
//  for (var i = 1; i<=l; i++){
//     let result = '';
//     for(var j = 1; j<=i; j++){
//       result = result + 'A '
     
//     }
//     console.log(result);
//  }

//      * 
//     * *
//    * * *
//   * * * *
//  *  * * * *

var x = 5;
for(let i = 1; i<=x; i++){
    const result = '';
    for (let j = x; j <= 1; j--) {
        console.log(j,' ');
       
        for (let k = 1; k <= j; k++) {
            result = result + '*';
            
        }
        console.log(result);
    }
}