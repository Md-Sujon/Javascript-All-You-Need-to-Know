nums = [1,2,34,54,55,34,32,11,19,17,54,66,13];

let Even = [];
let Odd = []
let TotalEvenNum = 0;
let totalOddNum = 0;
let AllNumber = 0; 

const OddEven = (nums) =>{
    for(var i = 0; i<nums.length; i++){
        if(nums[i] % 2 == 0){
            Even.push(nums[i])
            TotalEvenNum = TotalEvenNum+nums[i]
            AllNumber = AllNumber+nums[i]
        }else{
            Odd.push(nums[i])
            totalOddNum = totalOddNum + nums[i]
            AllNumber = AllNumber+nums[i]
        }
    }
}
OddEven(nums)
console.log('AllNumber Summation',AllNumber);
console.log('All Even Summation:',TotalEvenNum);
console.log('All Odd Summation:',totalOddNum);
console.log('Even Number:',Even);
console.log('Odd Number:',Odd);




// const oddNumbers = [1,2,34,54,55,34,32,11,19,17,54,66,13].filter((number) => number % 2==0);
// console.log(oddNumbers);



// var nums = [1,2,34,54,55,34,32,11,19,17,54,66,13];
// var evens = [];
// var odds = [];

// var evenNumbers = function(nums) {
//     for (var i = 0; i < nums.length; i++) {

//         if ((nums[i] % 2) != 1) {
//             evens.push(nums[i]);
               
//         }
//         else {
//             odds.push(nums[i]);
              
//         }
//     }

// };

// evenNumbers(nums);
// console.log("Even",evens);
// console.log("Odd",odds);