let str = "y(3(p)p(3)r)s"

function parensValid(str) {
    let arr = [];

    for(var i = 0; i < str.length; i++){

        switch(str[i]){
            case "(":
                arr.push(str[i]);
                break;
            case ")":
                if(arr[arr.length-1] === "("){
                    arr.pop();
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

console.log(parensValid(str));