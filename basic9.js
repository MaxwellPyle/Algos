function iterateArray(arr){
    for(i in arr){
        console.log("array[", i, "] is equal to", arr[i]);
    }
}

let myArray = [1, 5, 6, "test", "bomb"];
iterateArray(myArray);
