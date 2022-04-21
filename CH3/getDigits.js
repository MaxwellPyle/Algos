let str = '0s1a3y5w7h9a2t4?6!8?0';

function getDigits(str) {
    let numbers = '';
    for (let i = 0; i < str.length; i++) {
        if(!isNaN(str[i]) && str[i] != 0){
            numbers += str[i];
        }
    }
    return numbers;
}

console.log(getDigits(str));