function sum(){
    var add = 0;
    for (let i = 0; i < arguments.length; i++) {
       add = add + arguments[i];
    }
    console.log(add);
}
sum(1,2,3,5,6,4,5,6)