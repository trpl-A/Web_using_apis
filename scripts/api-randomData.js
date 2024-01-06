// FRUIT
// from https://random-data-api.com/documentation
// from https://thispersondoesnotexist.com
// ===============================


function showFace(){
    // random face
    let baseUrl = "https://thispersondoesnotexist.com"

    let outputFace = document.getElementById("random-face")
    outputFace.style.display = "block"
    outputFace.src = baseUrl
}
// -------------------------------------

async function displayDetails(){
    showFace()

    // first fetch call
    let response = await fetch("https://random-data-api.com/api/v2/users")
    let data = await response.json()
    // console.log(data)

    // second fetch call
    let response1 = await fetch("https://random-data-api.com/api/v2/blood_types")
    let data1 = await response1.json()

    
    // displaying on webpage
    let output = document.getElementById("output0")

    output.innerHTML = ""
    output.innerHTML = "fetching data..."

    setTimeout(() => {
        output.innerHTML = ""
        output.innerHTML = 
        "<br> - Username: " + data["username"] + 
        "<br> - Name: " + data["first_name"] + 
        "<br> - Surname: " + data["last_name"] + 
        "<br> - Password: " + data["password"] + 
        "<br> - Emall: " + data["email"] + 
        "<br> - Avatar: " + data["avatar"] + 
        "<br> - Phone number: " + data["phone_number"] + 
        "<br> - DOB: " + data["date_of_birth"] +  
        "<br> - Employment: " + data["employment"]["title"] + 
        "<br> - Blood group: " + data1["group"] + 
        "<br>"
    }, "2000")
    
    // output.innerHTML = 
    //     "<br> - Username: " + data["username"] + 
    //     "<br> - Name: " + data["first_name"] + 
    //     "<br> - Surname: " + data["last_name"] + 
    //     "<br> - Password: " + data["password"] + 
    //     "<br> - Emall: " + data["email"] + 
    //     "<br> - Avatar: " + data["avatar"] + 
    //     "<br> - Phone number: " + data["phone_number"] + 
    //     "<br> - DOB: " + data["date_of_birth"] +  
    //     "<br> - Employment: " + data["employment"]["title"] + 
    //     "<br> - Blood group: " + data1["group"] + 
    //     "<br>"

    // maybe add?
    console.log("address", data["address"])
    console.log("ID", data["id"])
    console.log("uid", data["uid"])
}
// -------------------------------------
