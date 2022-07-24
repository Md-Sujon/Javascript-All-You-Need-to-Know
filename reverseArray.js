var array = [4,2,3,6,8,5]

for (let i = 0; i < (array.length/2); i++) {
    const element = array[i];
    array[i] =  array[array.length -1 -i]
    array[array.length -1 -i] = element;
    
}
console.log(array);