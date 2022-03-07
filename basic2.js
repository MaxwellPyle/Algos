function printSum() {
    var sum = 0;
    for(i=0; i < 256; i++) {
        sum += i;
        console.log(sum);
    }
}

printSum();