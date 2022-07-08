const arr = [4,5,6,8,1,2,3];

for(var i=0; i<arr.length; i++){
    arr[i]=arr[i]+3;
}
console.log(arr);

// Odd Even sum
const arrs = [4,5,6,8,1,2,3];
let result = 0;
let results = 0;
for(var i=0; i<arrs.length; i++){
    if(arrs[i]%2===0){
        result = result + arrs[i]
    }else{
        results = results + arrs[i]
    }
   
}
console.log(result);
console.log(results);

