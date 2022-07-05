
for(; ;){
    var rand = Math.floor(Math.random() * 10 +1);
    if(rand == 9){
       console.log('Winner winner Chekin Dinner');
       break;
    }else{
       console.log('the Got it', rand);
    }
}