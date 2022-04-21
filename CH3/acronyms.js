let str = "Live from New York, it's Saturday Night!";

function acryonym(str) {
    let newStr = '';
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i - 1) == ' ' || i == 0){
            newStr += str[i].toUpperCase();
        }
    }
    return newStr;
}

console.log(acryonym(str));