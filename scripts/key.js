

// returns random chars
function randomChar(){
    // const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    // no hexdecimal values
    const characters ='ghijklmnopqrstuvwxyz';

    let randomChar = characters.charAt(Math.floor(Math.random() * characters.length));
    return randomChar
}
// randomChar()
// ----------------------------------


// make key unusable
function change(thing){
    // using the spread operator to converrt to an array
    let changedThing = [...thing]
    // console.log(changedThing)

    let result =  ""
    changedThing.forEach(char =>{
        // console.log(char)
        // result += char + "x"
        result += char + randomChar()
    })
    // console.log(result)

    return result
}
// let k = ""
// console.log(change(k))
// ----------------------------------

