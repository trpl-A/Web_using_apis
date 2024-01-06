// WEATHER
// from https://openweathermap.org/api


async function getWeather(){
    let key = "c119f9f28458ecdd37c383e897681e6da7be" // original lengh = 32

    // search by city name
    let region = document.getElementById("city-name-input").value 
    if (region == ""){
        region = "cape town"
    }
    console.log(region)

    let k = key.slice(3, -1)
    let baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${region}&units=metric&appid=${k}`
    let response = await fetch(baseUrl)
    let data = await response.json()
    // console.log(data)

    // OUTPUT
    let output = document.getElementById("output6")
    output.innerHTML = ""
    output.innerHTML += "<br> - City: " + data["name"] +
        "<br> - Country code: " + data["sys"]["country"] + 

        "<br>" + 
        "<br> - Temperature: " + data["main"]["temp"] +
        "<br> - Minimum temperature: " + data["main"]["temp_min"] +
        "<br> - Maximum temperature: " + data["main"]["temp_max"] +
        "<br> - Feels like: " + data["main"]["feels_like"] +

        "<br>" + 
        "<br> - Pressure: " + data["main"]["pressure"] +
        "<br> - Humidity: " + data["main"]["humidity"] +
        "<br> - Wind speed: " + data["wind"]["speed"] +
        "<br> - Wind direction: " + data["wind"]["deg"] + "°" + 

        "<br>" + 
        "<br> - Latitude: " + data["coord"]["lat"] + "°" + 
        "<br> - Longitude: " + data["coord"]["lon"] + "°" + 
        "<br> - Timezone: " + data["timezone"] + 
        "<br>"
}
// ---------------------
// getWeather()