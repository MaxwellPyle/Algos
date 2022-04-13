let arr = [4, 5, -5, -3, 8, 10, 100, -11];

function removeNegs(arr) {
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] < 0){
            arr.splice(i, 1);
            i--;
        }
    }
}

console.log(arr);
removeNegs(arr);
console.log(arr);
