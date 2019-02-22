// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const words = []

    const strArray = str.split(' ')

    for(let i = 0; i <strArray.length; i++) {
        const word = strArray[i][0].toUpperCase() + strArray[i].slice(1)
        words.push(word)


    }

    return words.join(' ')


    // let result = str[0].toUpperCase();

    // for(let i = 1; i <str.length; i++) {
    //     if(str[i-1] === ' ') {
    //         result += str[i].toUpperCase()
    //     } else {
    //         result += str[i]
    //     }
    // }
    // return result





}

module.exports = capitalize;
