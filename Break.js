for (let i = 1; i < 30; i++) {
   if(i % 5 == 0){
    break
   }else{
    console.log(i,'Loop break');
   }
    
}



while (true){
    var rand = Math.floor(Math.random() * 10 +1);
     if(rand == 9){
        console.log('Winner winner Chekin Dinner');
        break;
     }else{
        console.log('the Got it', rand);
     }
}

