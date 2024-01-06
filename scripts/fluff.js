

// remove fluff from key
export function removeFluff(fluffedUp){
    const characters ='ghijklmnopqrstuvwxyz';
    // let chars = [...characters]

    let lean = ""
    for (a=0; a < fluffedUp.length; a++){
        if (!characters.includes(fluffedUp.charAt(a))){
            lean += fluffedUp.charAt(a)
        }
    }
    // console.log(lean.length)

    return lean
}

// let withFluff = "cj1z1h9ifl9yfo2y8o4q5j8yetcpdody3m7oct3w8j3xes8h9y7z6w8v1zeq6gdyaq7hbzew"
// console.log(removeFluff(withFluff))
// ----------------------------------
