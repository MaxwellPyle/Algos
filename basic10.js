function printArrayAverage(arr) {
    if (arr.length == 0) {
        console.log("Empty arr, no average val");
    return;
    }
    var sum = arr[0];
    for (var idx = 1; idx < arr.length; idx++) {
        sum += arr[idx];
    }
    console.log("Average value is:", sum / arr.length);
}

let arr = [1,5,10,20,30,40,50,60,70,80,];
printArrayAverage(arr);