// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
var n = 10;
for(var i = 1; i<=n; i++){
    var result = '';
    for (let j = 1; j <= i; j++) {
         result =result +j + ' ';   
    }
    console.log(result);
}

// *****
// *****
// *****
// *****
// *****
var m = 5;
for(var i = 1; i<=m; i++){
    var result = '';
    for(var j = 1; j<=m; j++){
     result += '* '
    }
    console.log(result);
}

// *
// **
// ***
// ****
// *****
var o = 10;
for(var i = 1; i<=o; i++){
    var result = '';
    for(var j = 1; j<=i; j++){
        result +='* '; 
    }
    console.log(result);
}