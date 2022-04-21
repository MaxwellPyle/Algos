let str = "blacksburgrubskcalb"
let str2 = "asdfasdfeee"

function isPalindrome(str) {
    var middle = Math.floor(str.length / 2)
    for (var i = 0; i < middle; i++) {
        if(str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    return true;
    }
}

console.log(isPalindrome(str))
console.log(isPalindrome(str2))