function arrayPush(array, num){
    for (i= array.length-1; i >=0; --i){
        array[i + 1] = array[i];
    }
    array[0] = num;
}

var array = [1, 5, 6, 4, 4];
var num = 6
arrayPush(array, num);


console.log(array)