const arr = [45,9,4,6,3,55,22,3,4,7];

let find = 55;
let isFound = false;

for (let i = 0; i < arr.length; i++) {
   if(arr[i] === find){
    console.log('Data Found '+i);
    isFound = true;
    break;
   }
    
}
if(!isFound){
    console.log('Data Not Found');
}