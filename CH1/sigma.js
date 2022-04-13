function sigma(num){
    var sum = 0;
    if(num == 0 || num == 1) {
        return 1;
    }
    while(num > 0){
        sum += num;
        num--;
    }
    return sum;
}

console.log(sigma(4));