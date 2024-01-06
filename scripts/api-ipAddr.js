// Geo info
// from https://ipapi.co/
// ----------------------


async function getLocation(){
    let userIn = document.getElementById("ipv4").value 

    // let userIn = "1.1.1.1"
    let baseUrl = `https://ipapi.co/${userIn}/json/`
    let response = await fetch(baseUrl)
    let data = await response.json()
    // console.log(data)

    // output
    let output = document.getElementById("output4")
    output.innerHTML = ""

    output.innerHTML += "<br> - IPv4 address: " + data["ip"] + 
        "<br> - Network: " + data["network"] + 
        "<br> - ASN (Autonomous System Number): " + data["asn"] + 
        "<br> - ISP/ IT Organisation: " + data["org"] + 

        "<br>" +
        "<br> - Country: " + data["country_name"] + " (" + data["country"] + ")" + 
        "<br> - Country area: " + data["country_area"] +
        "<br> - Region: " + data["region"] +
        "<br> - City: " + data["city"] +
        "<br> - Latitude: " + data["latitude"] +
        "<br> - Longitude: " + data["longitude"] + 

        "<br>" + 
        "<br> - Phone code: " + data["country_calling_code"] +
        "<br> - Country population: " + data["country_population"] + 
        "<br> - Currency: " + data["currency"] 
}
// --------------------------
// getLocation()