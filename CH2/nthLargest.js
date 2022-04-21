let arr = [3, 5, 44, 2, 23, 45, 21, 0, 8, 999, 32, 441];

function nthLargest(arr, n) {
    arr.sort((a,b) =>a-b);
    return arr[arr.length-n];
}

console.log(nthLargest(arr, 2));