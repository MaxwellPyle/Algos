let str = "Play that funky music";

function removeBlanks(str) {
    let newStr = '';
    for (var i = 0; i < str.length; i++) {
        if(str.charAt(i) != ' '){
            newStr += str[i]
        }
    }
    return newStr;
}

console.log(removeBlanks(str));