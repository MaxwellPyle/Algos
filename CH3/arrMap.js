let arr1 = [1, 2, 3, 4]
let arr2 = [5, 6, 7, 8]

function arrMap(arr1, arr2) {
    let obj = {}
    for(let i = 0; i < arr1.length; i++){
        obj[arr1[i]] = arr2[i]
    }
    return obj;
}

console.log(arrMap(arr1, arr2));