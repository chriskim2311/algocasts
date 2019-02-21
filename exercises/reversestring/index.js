// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    //SOLUTION 1
    // const arr= str.split('')
    // arr.reverse()
    // return arr.join('')

    //SOLUTION 2
    // let reversed = ''
    // for(let i =0; i < str.length; i++) {
    //     reversed = str[i] + reversed
    // }
    // return reversed

    return str.split('').reduce((reversed, character) => {
       return character + reversed
    }, '')




}

module.exports = reverse;
