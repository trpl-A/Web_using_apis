// im bored
// from https://www.boredapi.com
// =============================


async function getActivity(){
    let baseUrl = "https://www.boredapi.com/api/activity"
    let response = await fetch(baseUrl)
    let data = await response.json()
    
    console.log(data)
    console.log(data["activity"])

    let output = document.getElementById("output3")
    output.innerHTML = ""
    output.innerHTML += data["activity"]
}
// getActivity()
// -----------------------------