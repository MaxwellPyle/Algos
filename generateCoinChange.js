function generateCoinChange(cents) {
    var quarters = 0;
    var nickels = 0;
    var dimes = 0;
    var pennies = 0;
    if (Math.floor(cents / 25) > 0){
        quarters = Math.floor(cents / 25)
        cents -= (quarters*25);
    }
    if(Math.floor(cents / 10) > 0){
        dimes = Math.floor(cents / 10);
        cents -= (dimes*10);
    }
    if (Math.floor(cents / 5) > 0){
        nickels = Math.floor(cents / 5);
        cents -= (nickels*5);
    }
    pennies = cents;

    console.log("quarters: " + quarters + " dimes: " + dimes + " nickels: " + nickels + " pennies: " + pennies);
}

generateCoinChange(88);