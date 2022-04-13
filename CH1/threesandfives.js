function ThreesFives(start, end){
    sum = 0;
    for (var i = start; i <= end; i++) {
        if((i % 3 == 0 || i % 5 == 0) && (i % 15 !== 0)) {
            sum += i;
            console.log(i);
        }
    }
    return sum;
}

console.log(ThreesFives(4, 100))