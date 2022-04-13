function maxMinAverage(arr){
    var min = arr[0];
    var max = arr[0];
    var sum = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] < min){
            min = arr[i];
        }
        if(arr[i] > max) {
            max = arr[i];
        }
        sum += arr[i];
    }
    var average = sum / arr.length;
    console.log("Max: %s", max);
    console.log("Min: %s", min);
    console.log("Average: %s", average);
}
