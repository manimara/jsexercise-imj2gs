function isLetter(s) {
    var str = s.charCodeAt(0);
    console.log(s, str);
    if ((str >= 65 && str <= 90) || (str <= 122 && str >= 97) || (str >= 48 && str <= 57))
        return true;
    else
        return false;
}
function isPalindrome(s) {
    var l = s.length -1;
    // var len = Math.ceil(l / 2);
    for (var i = 0, j = l; i <= j;) {
        if (isLetter(s[i])) {
            if (isLetter(s[j])) {
                if (s[i].toLowerCase() == s[j].toLowerCase()) {
                    i++;
                    j--;
                }
                else {
                    return false;
                }
            }
            else {
                j--;
            }
        }
        else {
            i++;
        }
    }
    return true;
}
;
var inp1 = "Aman, a plan, a canal: Panama";
var inp2 = "0P";
console.log(isPalindrome(inp2), true);
