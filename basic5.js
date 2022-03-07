function greaterThanY(arr, y) {
    var numGreater = 0;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] > y){
            numGreater++;
        }
    }
    console.log("numbers greater than %s: %s", y, numGreater);
}
