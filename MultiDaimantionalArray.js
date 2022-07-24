const array = [
    [5,45,6,1,54],
    [8,69,3,2,1],
    [2,3,6,4,1]
]

for (let i = 0; i < array.length; i++) {
    
    for (let j = 0; j < array[i].length; j++) {
        const element = array[i][j];
        console.log('Element'+i+":"+element);
    }
}