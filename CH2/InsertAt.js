let arr = [4, 6, 5, 8, 2, 14, 1, 6, 7, 67];
let val = 20 
let idx = 3
function insertAt(arr, val, idx) {
    for( var i = arr.length; i >= 0; i--) {
        if(i > idx){
            arr[i] = arr[i-1]
        } 
    }    
    arr[idx] = val;
}
insertAt(arr,val, idx);
console.log(arr);