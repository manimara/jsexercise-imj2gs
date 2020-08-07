function isLetter(s: string) {
    let str = s.charCodeAt(0);
    console.log(s, str);
    if ((str >= 65 && str <= 90) || (str <= 122 && str >= 97))
        return true;
    else
        return false;
}

function isPalindrome(s: string): boolean {
    let l: number = s.length;
    let len: number = Math.ceil(l / 2)
    for (let i = 0, j = l; i < len;) {
        if (isLetter(s[i])){
            if (isLetter(s[j])){
                if (s[i] == s[j]) {
                    i++;
                    j--;
                } else {
                    return false;
                }
            } else {
                j--;
            }
        } else {
            i++;
        }
    }
    return true;
};
const inp1 = "Aman, a plan, a canal: Panama"

console.log(
    isPalindrome(inp1),
    true
)