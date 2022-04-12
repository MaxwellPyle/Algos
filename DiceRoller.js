function diceRoller(){
    var die1 = 0;
    var die2 = 0;
    var avg = 0;
    var max = 1;
    var min = 6;
    var rolls = 0;
    var total = 0;

    do{
        die1 = Math.floor(Math.random() * 6) + 1;
        die2 = Math.floor(Math.random() * 6) + 1; 

        rolls += 1;

        total = total + die1 + die2;
        avg = total / (rolls*2);

        if(die1 > max){
            max = die1;
        }
        if(die2 > max){
            max = die2;
        }
        if(die1 < min){
            min = die1;
        }
        if(die2 < min){
            min = die2;
        }
        
    } while(die1 != die2);

    console.log("min: ", min);
    console.log("max: ", max);
    console.log("average: ", avg);
    console.log("total: ", total);
    console.log("number of rolls: ", rolls);
}

diceRoller();