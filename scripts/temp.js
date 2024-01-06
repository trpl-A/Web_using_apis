
// maybe use this
// https://github.com/robertoduessmann/weather-api


// TEST1
async function tempTesting(){
    // let baseUrl = "https://api.imgflip.com/get_memes"

    let response = await fetch(baseUrl)
    let data = await response.json()
    console.log(data)

    // console.log(data["data"]["memes"])
    // console.log(data["data"]["memes"].length)
    // console.log(data["data"]["memes"][0]["name"])
    // console.log(data["data"]["memes"][0]["url"])
    // console.log()

}
// tempTesting()
// --------------------------------

// TEST2

async function tempTesting1(baseUrl){
    let response = await fetch(baseUrl)
    let data = await response.json()
    console.log(data)

    // console.log(data.length)
    // console.log(data["data"].length)
    console.log()

}
// from https://github.com/mcnaveen/random-words-api
// maybe clone and use this repo/API
// let testUrl = "https://random-words-api.vercel.app/word"

// from https://phishstats.info/#apidoc
// let testUrl = "https://phishstats.info:2096/api/phishing?_where=US"

// from https://github.com/fawazsullia/password-generator/
// let passwordLen = 10
// let testUrl = `https://passwordinator.onrender.com/?num=true&char=true&caps=true&len=${passwordLen}`

// let testUrl = "http://alpha-meme-maker.herokuapp.com/memes/13"

// from https://openweathermap.org/api


// tempTesting1(testUrl)