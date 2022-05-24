const balancedIndex = (array) => {
    let rightSum = array.reduce((a,b) => a + b);
    let leftSum = 0;

    for(let i = 0; i < array.length; i++) {
        rightSum -= array[i];

        if(rightSum === leftSum) {
            return i;
        }
        leftSum += array[i];
    }

    return -1
}

let sample = [5, 3, 4, 5, 4, 3, 5];
let sample2 = [1, 2, 4, 5, 5];

console.log(balancedIndex(sample));
console.log(balancedIndex(sample2));