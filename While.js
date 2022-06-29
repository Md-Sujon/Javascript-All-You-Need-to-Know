var Runnuning = true;

while(Runnuning){
    var rand = Math.floor(Math.random() * 100 + 1);
    if(rand == 98){
        console.log('Winner Winner Chiken Dinner');
        Runnuning = false;
    }else{
        console.log('To have got', rand);
    }
}