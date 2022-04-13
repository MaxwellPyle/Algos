function arrShift(arr) { 
    for (var i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }
    arr[arr.length - 1] = 0;
    return arr;
}

let arr = [1, 5, 6, 7, 8, 9, 10];
console.log(arrShift(arr));