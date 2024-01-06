// MEALS
// from https://www.themealdb.com/api.php

// CLEAN THIS UP
// clear the input once the user clicks and button or presses and key



/*
formatting instructions
@param {String} (long string of instructions)
@return {String}
*/
function formatInstructions(instruc){
    // remove quotes at start and end of string
    instruc = instruc.slice(0, -2)

    // adding line breaks
    // dividing the string into points
    for (a=0; a < instruc.length; a++){
        if (a == 0){
            instruc = instruc.replace(instruc[a], `<br> - ${instruc[a]}`)
        }

        else if (instruc.charAt(a) == "."){
            instruc = instruc.replace(".", "<br> - ")
        }
    }

    return instruc 
}
// ---------------------------------------



// display random recipe
async function randomMeal(){
    let randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php"
    let response = await fetch(randomMealUrl)
    let data = await response.json()
    // console.log(data)

    let result = [
        "\nID:", data["meals"][0]["idMeal"],
        "\nMeal:",  data["meals"][0]["strMeal"], 
        "\nCategory:", data["meals"][0]["strCategory"], 
        "\nCuisine:", data["meals"][0]["strArea"], 
    ]

    if (data["meals"][0]["strYoutube"] != "" && data["meals"][0]["strYoutube"] != null){
        result.push("\nYoutube video: ", data["meals"][0]["strYoutube"])
    }

    if (data["meals"][0]["strSource"] != "" && data["meals"][0]["strSource"] != null){
        result.push("\nSource: ", data["meals"][0]["strSource"])
    }


    let output = document.querySelector("#output1")
    output.innerHTML = ""

    // display 'header info' on webpage
    // space between colon and info proceeding the colon
    result.forEach(dataPiece=> {
        output.innerText += " " + dataPiece
    })


    // INSTRUCTIONS
    let instruc = data["meals"][0]["strInstructions"]
    instruc = formatInstructions(instruc)
    // console.log(instruc)

    // display instructions
    output.innerHTML += "<br><br>Instructions"
    output.innerHTML += "<br>" + instruc + "\n"
}
// ---------------------------------------
// randomMeal()


// search and filter by first letter
async function getRecipes(){
    let lette = document.getElementById("by-letter").value 
    let firstLetter = ""
    // let nums = "0123456789"
    let alpha = "abcdefghijklmnopqrstuvwxyz"

    if (lette == ""){
        firstLetter = "a"
    }
    else if (alpha.includes(lette.charAt(0))){
        firstLetter = lette.charAt(0)
    }
    else{
        console.log("*invalid input*")
    }


    let baseUrl = ""
    baseUrl = `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`
    let response = await fetch(baseUrl)
    let data = await response.json()


    // array of meal names, and details
    let dishes = data["meals"]

    let output = document.querySelector("#output1")
    output.innerHTML = ""

    // display on webpage
    output.innerHTML += `<br>Dishes that start with '${firstLetter}'`
    output.innerHTML += "<br>Number of dishes: " + dishes.length + "<br>"

    dishes.forEach(dish => {
        let line1; 
        let line2; 

        // determining if the meal objs/dicts have links (URLS)
        if((dish["strSource"] == null || dish["strSource"] == "") && 
            (dish["strYoutube"] == null || dish["strYoutube"] == "")){
            line1 = ""
            line2 = ""
        }
        else if((dish["strSource"] == null || dish["strSource"] == "") && 
            !(dish["strYoutube"] == null || dish["strYoutube"] == "")){
            line1 = ""
            line2 = "<br> - " + dish["strYoutube"]
        }
        else if(!(dish["strSource"] == null || dish["strSource"] == "") && 
            (dish["strYoutube"] == null || dish["strYoutube"] == "")){
            line1 = "<br> - " + dish["strSource"]
            line2 = ""
        }
        else{
            line1 = "<br> - " + dish["strSource"]
            line2 = "<br> - " + dish["strYoutube"]
        }

        // display on webpage
        output.innerHTML +=  "<br><br>#" + (dishes.indexOf(dish) + 1)+ 
        "<br>" + dish["strMeal"] + " (ID: " + dish["idMeal"] + ")" +
        "<br> - " + dish["strArea"] + 
        line1 + line2
    })
}
// ---------------------------------------
// getRecipes()


// search by id 
async function getRecipeDetails(){
    let userInNum = document.getElementById("by-id").value 
    let baseUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=`
    let response = await fetch(baseUrl + userInNum)
    let data = await response.json()
    console.log(data)

    let output = document.querySelector("#output1")
    output.innerHTML = ""

    // display
    output.innerHTML +=  "" +
    "<br>Meal: " + data["meals"][0]["strMeal"] + 
    "<br>ID: " + data["meals"][0]["idMeal"] 

    // adding ingredients and corresponding measurements/quantity to an array
    // ignoring empty ingredients and measurements
    let ingredients = Object.keys(data["meals"][0])
    let importantkeys = []
    // let recpieDict = dict()
    let count1 = 0

    ingredients.forEach(ing => {
        if ((ing.includes("strIng")) || (ing.includes("strMeas"))){
            // if ((data["meals"][0][ing] != null) || (data["meals"][0][ing] != "")){
            if ((data["meals"][0][ing] != null) 
                && (data["meals"][0][ing] != "")
                && (data["meals"][0][ing] != " ")){

                count1++
                importantkeys.push(ing)
            }
        }
    })


    // display ingredients
    output.innerHTML += "<br><br>Ingredients<br>"

    let allIngredients = importantkeys.length / 2
    let pair = [] // using this to differenciate between ingredient and measurement
    // console.log(allIngredients)
    // console.log(importantkeys.length)

    if (allIngredients <= 9){
        for (a=1; a < allIngredients+1; a++){
            importantkeys.forEach(imp => {
                if (imp.includes(a.toString())){
                    pair.push(imp)
    
                    if (pair.length == 2){
                        pair = []
                        output.innerHTML += " (" + data["meals"][0][imp] + ")<br>"
                    }
                    else{
                        output.innerHTML += "- " + data["meals"][0][imp] 
                    }
                }
            })
        }
    }
   

    // change this eventually 
    else{
        for (a=1; a < allIngredients+1; a++){
            importantkeys.forEach(imp => {
                if (imp.includes(a.toString())){
                    pair.push(imp)
    
                    if (pair.length == 2){
                        pair = []
                        output.innerHTML += " (" + data["meals"][0][imp] + ")<br>"
                    }
                    else{
                        output.innerHTML += "- " + data["meals"][0][imp] 
                    }
                }
            })
        }
    }


    // instructions data
    let instruc = data["meals"][0]["strInstructions"]
    instruc = formatInstructions(instruc)


    // verify links (URLs)
    let dish = data["meals"][0]
    let line1; 
    let line2; 

    if((dish["strSource"] == null || dish["strSource"] == "") && 
        (dish["strYoutube"] == null || dish["strYoutube"] == "")){
        line1 = ""
        line2 = ""
    }
    else if((dish["strSource"] == null || dish["strSource"] == "") && 
        !(dish["strYoutube"] == null || dish["strYoutube"] == "")){
        line1 = ""
        line2 = "<br> * " + dish["strYoutube"]
    }
    else if(!(dish["strSource"] == null || dish["strSource"] == "") && 
        (dish["strYoutube"] == null || dish["strYoutube"] == "")){
        line1 = "<br> * " + dish["strSource"]
        line2 = ""
    }

    else{
        line1 = "<br> * " + dish["strSource"]
        line2 = "<br> * " + dish["strYoutube"]
    }


    // display instructions and URLs
    output.innerHTML += "<br><br>Instructions" + instruc
    output.innerHTML += "<br><br> * " + dish["strMealThumb"] 
        + line1 
        + line2
}
// ---------------------------------------
// getRecipeDetails()