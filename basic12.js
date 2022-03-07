function zeroOutNegs(arr){
    for(var i=0; i<arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}

let arr = [1, 2, 3, -4, 5, -6, 7];
console.log(zeroOutNegs(arr));