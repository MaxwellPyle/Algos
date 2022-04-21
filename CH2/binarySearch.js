let arr = [2, 4, 6, 8, 10, 12, 14, 16, 17, 18, 19, 20]



function binarySearch(arr, key, min, max) {
    if (min > max) return false;

    let mid = Math.floor((min + max) / 2);

    if(arr[mid] == key) return true;

    if (arr[mid] > key){
        binarySearch(arr, key, min, mid - 1);
    }
    else if (arr[mid] < key){
        binarySearch(arr, key, mid + 1, max);
    }
}

console.log(binarySearch(arr, 12, 0, arr.length - 1));