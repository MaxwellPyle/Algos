function squareValues(arr){
    for(var i=0; i<arr.length; i++) {
        arr[i] = arr[i]*arr[i];
    }
    return arr;
}

let arr = [1, 2, 3, 4, 5];
console.log(squareValues(arr));