// some Number ingnore
for (let i = 0; i <= 10; i++) {
       if(i == 5 || i == 7 || i==8 || i==9 || i==10){
        continue
       } else{
        console.log(i);
       }
}
//array some name ingnore
const arr = ['sujon','rakib','twafiq','mamun','faysal','Afridy'];
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(element == 'rakib' || element == 'mamun'){
        continue;
    }
    console.log(element);
}


//array some even or odd ingnore
const number = [4,5,6,8,4,1,2,8,3,9,4,5,6,2,1,3];
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if(element % 2 == 1){ 
      continue;
    }else{
        console.log(element);
        
    }
}
