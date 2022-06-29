nums = [1,2,34,54,55,34,32,11,19,17,54,66,13];

let Even = [];
let Odd = []
let TotalEvenNum = 0;
let totalOddNum = 0;
let AllNumber = 0; 

const OddEven = (nums) =>{
    for(var i = 0; i<nums.length; i++){
        const element = nums[i]
        if(element % 2 == 0){
            Even.push(element)
            TotalEvenNum = TotalEvenNum+element
            AllNumber = AllNumber+element
        }else{
            Odd.push(element)
            totalOddNum = totalOddNum + element
            AllNumber = AllNumber+element
        }
    }
}
OddEven(nums)
console.log('AllNumber Summation',AllNumber);
console.log('All Even Summation:',TotalEvenNum);
console.log('All Odd Summation:',totalOddNum);
console.log('Even Number:',Even);
console.log('Odd Number:',Odd);
