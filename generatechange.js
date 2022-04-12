function generateCoinChange(num) {
    var dollars = 0;
    var quarters = 0;
    var dimes = 0;
    var nickels = 0;
    var pennies = 0;

    while (num - 1 > 0) {
        num -= 1;
        dollars += 1;
    }
    while(num - 0.25 >= 0){
        num -= 0.25;
        quarters += 1;
    }
    while(num - 0.1 >= 0){
        num -= 0.1;
        dimes += 1;
    }
    while(num - 0.05 >= 0){
        num -= 0.05;
        nickels += 1;
    }
    while (num - 0.01 >= 0){
        num -= 0.01;
        pennies += 1;
    }
    return "The number of dollars: " + dollars + "\n The number of quarters: " + quarters + "\n The number of dimes: " + dimes + "\n The number of nickels: " + nickels + "\n The number pennies: " + pennies;
}

console.log(generateCoinChange(4.25));