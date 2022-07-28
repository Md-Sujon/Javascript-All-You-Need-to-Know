// this is expression
var summation = function add(a,b){
    return a+b;
}



// Anonymous function
setTimeout(function(){
    console.log('this is print 2 second after');
},2000)

var result = summation;
console.log(result(10,20));