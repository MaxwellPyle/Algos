function negativeSwap(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i] < 0){
            arr[i] = "dojo";
        }
        console.log(arr[i]);
    }
}
