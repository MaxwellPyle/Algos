let str = "w(a{t}s[o(n{c}o)m]e)h[e{r}e]";

function bracesValid(str) {
    let bracesArray = [];
    let parensArray = [];
    let bracketsArray = [];

    for (let i = 0; i < str.length; i++) {
        switch(str[i]) {
            case "(":
                parensArray.push(str[i]);
                break;
            case ")":
                if(parensArray[parensArray.length-1] === "("){
                    parensArray.pop();
                } else {
                    return false;
                }
                break;
            case "[":
                bracesArray.push(str[i]);
                break;
            case "]":
                if(bracesArray[bracesArray.length-1] === "["){
                    bracesArray.pop();
                } else {
                    return false;
                }
                break;
            case "{":
                bracketsArray.push(str[i]);
                break;
            case "}":
                if(bracketsArray[bracketsArray.length-1] === "{"){
                    bracketsArray.pop();
                } else {
                    return false;
                }
                break;
            default:
                continue;
        }
    }
    return true;
}

console.log(bracesValid(str));