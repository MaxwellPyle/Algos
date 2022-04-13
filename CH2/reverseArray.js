let arr = [22, 44, 33, 565, 64, 4, 6, 1245, 3, 9]

function reverseArray(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(arr);
console.log(reverseArray(arr));


