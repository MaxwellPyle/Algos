let arr = [3, 5, 1, 8, 22, 4, 44, 33, 2]

function findSkyline(arr) {
    let max = 0;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
        else {
            arr.splice(i, 1);
            --i;
        }
    }
}

console.log(arr);
findSkyline(arr);
console.log(arr);