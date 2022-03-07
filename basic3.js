function findMax(arr) {
    if(arr.length == 0) {
        console.log("this array is empty!");
        return;
    }
    var max = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    console.log("Max value is: " + max);
}