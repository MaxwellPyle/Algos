var arr = [4, 3, 6, 0, 10, 4, 1]
function popFront(arr) {
    var first = arr.shift();
    return first;
}

console.log(popFront(arr));
console.log(arr);
