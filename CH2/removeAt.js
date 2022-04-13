let arr = [4, 6, 22, 1, 65, 4, 343];
let idx = 3; 

function removeAt(arr, idx) {
    for(var i = 0; i < arr.length; i++) {
        if(i == idx){
            arr.splice(i, 1);
        }
    }
}

console.log(arr);
removeAt(arr, idx);
console.log(arr);
