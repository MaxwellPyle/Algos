let arr = [1, 2, 3, 4, 5, 6, 7, 8];

function reverseArray(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++;
        --end;
    }
}

function rotateArray(arr, rotate) {
    rotate %= arr.length;

    reverseArray(arr, 0, (arr.length - 1));
    reverseArray(arr, 0, (rotate - 1));
    reverseArray(arr, rotate, (arr.length - 1));

    return arr
}

console.log(arr);
rotateArray(arr, 4);
console.log(arr);