// COUNTRY INFO
// from https://restcountries.com/
// ===============================

/*
* using fetch API to extract the names of the countries, 
* then organise these names alphabetically, 
* and display this info on the webpage
*/
async function getAll(){
    let baseUrl = "https://restcountries.com/v3.1/all"

    let response = await fetch(baseUrl)
    let data = await response.json()

    // getting the names of the countries; adding data to a list
    let listOfCounties = []
    data.forEach(country => {
        // console.log(data.indexOf(country) + 1)
        let nameInfo = country["name"]["common"] + " (" + country["name"]["official"] + ")"
        listOfCounties.push(nameInfo)
    });

    // displaying info on webpage
    // output
    let output = document.querySelector("#output2")
    output.innerHTML = ""

    output.innerHTML += "Number of countries: " + data.length + "<br><br>"
    listOfCounties.sort().forEach(country => {
        // console.log(country)
        output.innerHTML += "- " + country + "<br>"
    })

    
}
// ------------------------------------
// getAll()


/*
* using fetch API to get data aboit a specific country
* then organise and display the data
*/
async function getCountryInfo(){
    let userCountry = document.getElementById("userCountry").value 

    if (userCountry == ""){
        userCountry = "malaysia"
    }
    let baseUrl = `https://restcountries.com/v3.1/name/${userCountry}?fullText=true`
    // or
    // https://restcountries.com/v3.1/name/{name}

    let response = await fetch(baseUrl)
    let data = await response.json()
    // console.log(data)


    // display
    let output = document.querySelector("#output2")
    output.innerHTML = ""
    output.innerHTML += `Country: ${data[0]["name"]["common"]} 
        <br> Official name: ${data[0]["name"]["official"]} 
        
        <br>
        <br> Geography
        <br> - Continent: ${data[0]["continents"]}
        <br> - Region: ${data[0]["region"]}
        <br> - Sub-region: ${data[0]["subregion"]}
        <br> - Latitute and Longitute: ${data[0]["latlng"]}
        <br> - Area (square kilometres): ${data[0]["area"]}
        <br> - Borders at other countries: ${data[0]["borders"]}
        <br> - Landlocked: ${data[0]["landlocked"]}

        <br>
        <br> Other
        <br> - Languages: ${data[0]["languages"]["eng"]}
        <br> - Timezones: ${data[0]["timezones"]}
        <br> - Approx population: ${data[0]["population"]}
        <br> - Independent: ${data[0]["independent"]}
        <br> - UN Member: ${data[0]["unMember"]}
        <br> - Capital: ${data[0]["capital"]}
        <br> - Capital info: ${data[0]["capitalInfo"]["latlng"]} 

        <br>        
        <br> - Independent: ${data[0]["independent"]}
        <br> - UN Member: ${data[0]["unMember"]}
        <br> - Capital: ${data[0]["capital"]}
        <br> - Capital location: (${data[0]["capitalInfo"]["latlng"]})
        <br> - Region: ${data[0]["region"]} 

        <br>
        <br> * go to map: ${(data)[0]["maps"]["googleMaps"]}
        <br> * go to map: ${(data)[0]["maps"]["openStreetMaps"]}
        `
}
// ------------------------------------
// getCountryInfo()