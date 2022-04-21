let arr = [3, 4, 5, 6, 2, 3, 11, 444, 22, 33, 43, 55, 3, 4, 0, 88]

function secondLargest(arr) {
    let max = 0;
    let scndmax = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
        else if(arr[i] > scndmax) {
            scndmax = arr[i];
        }
    }
    return scndmax;
}

console.log(arr);
console.log(secondLargest(arr));