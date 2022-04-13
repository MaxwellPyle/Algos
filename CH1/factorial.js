function factorial(num) {
    var factorial = num;
    if (num === 0 || num === 1) 
        return 1;
    while (num > 1) { 
        num--; 
        factorial *= num;
    }
    return factorial;
}

console.log(factorial(4));