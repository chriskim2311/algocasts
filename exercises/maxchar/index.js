// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const chars = {}
    let max = 0
    let maxChar = ''

    for( let i = 0; i < str.length; i++) {
        if(!chars[str[i]]) {
            chars[str[i]] = 1
        }
        else {
            chars[str[i]]++
        }
       

    }
    for(let char in chars) {
        if(chars[char]  > max) {
            max = chars[char]
            maxChar = char
            console.log(maxChar)
        }
    }
    return maxChar





}

module.exports = maxChar;
