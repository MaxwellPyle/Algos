function sumToOne(n) {
    if(n < 10) return n;
    let res = n;
    while (res >= 10){
        res = 0;

        while (n > 0){
            res += n % 10;
            n = Math.floor(n / 10);
        }
        n = res
    }
    return res;
}

console.log(sumToOne(456));