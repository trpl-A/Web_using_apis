// CAT IMAGE API
// =============


class CatImage{
    constructor(){
        this.keyDimensions = [500, 1000, 1600, 2000, 2500, 3000, 3600, 4000, 4400]
        this.baseUrl = "https://placekitten.com"
    }

    // METHODS =====================================
    // number of methods: 5

    /*
    - method #1
    - generateDimensions();
    - generates a random number for the image dimensions
    
    - @param {NONE}
    - @returns {number} num - a number
    - @example
        // returns 565
        generateDimensions();
    */
    generateDimensions(){
        let range = Math.round(Math.random() * this.keyDimensions.length)
        let dimensionRange = this.keyDimensions[range]

        let num = 0
        while (num < 400){
            num = Math.round(Math.random() * dimensionRange)
        }

        return num 
    }

    
    /*
    * method #2
    * ensureNum();
    * checking if its a valid number 
    * if value is NaN, the method with regenerate a number
    
    * @param {number} value - any number or Nan 
    * @returns {number} newNum - a number (not NaN)
    */
    ensureNum(value){
        let newNum = NaN
    
        if (isNaN(value)){
            while (isNaN(newNum)){
                newNum = this.generateDimensions()
            }
            // console.log("updated value")
            // console.log(newNum)
        }
    
        else{
            newNum = value 
        }
    
        return newNum 
    }


    /*
    * method #3
    * increaseWidth();
    * this function adjusts the the width

    * @param {number} width  - The width; dimension1
    * @param {number} height - The height; dimension2
    * @returns {number} width - the adjusted width
    * @throws {n/a} (no exceptions added)
    */
    increaseWidth(width, height){
        while ((2 * width) < height){
            // width += 100

            // or
            width += (height - width) / 2
        }

        return width 
    }


    /*
    * method #4
    * increaseHeight();
    * this function adjusts the the height

    * @param {number} width  - The width; dimension1
    * @param {number} height - The height; dimension2
    * @returns {number} height - the adjusted height
    */
    increaseHeight(width, height){
        while ((2 * height) < width){
            // height += 100

            // or
            height += (width - height) / 2
        }

        return height 
    }

        
    /*
    * method #5; checkRatio();
    * this function checks if the ratio between the width and height is valid
    * the ratio between the 2 numbers should not be greater than 2, or smaller than 2^(-1)
    * adjusts values if needed by using method #3 and method #4
        
    * @param {number} dim1 - The width; dimension1
    * @param {number} dim2 - The height; dimension2
    * @returns {string} url - the complete url
    */
    checkRatio(dim1, dim2){
        let url = this.baseUrl 

        if (dim1 > (dim2 * 2)){
            // console.log("height to small; increase height")
            // let a = this.increaseHeight(dim1, dim2)
            // url += `/${dim1}/${a}`

            // quicker and simpler solution; aspect ratio (1:1)
            dim2 = dim1 
            url += `/${dim1}/${dim2}`
        }

        else if (dim2 > (dim1 * 2)){
            // console.log("width to small; increase width")
            // let b = this.increaseWidth(dim1, dim2)
            // url += `/${b}/${dim2}`

            // quicker and simpler solution
            dim1 = dim2 
            url += `/${dim1}/${dim2}`
        }

        else{
            // console.log("valid")
            url += `/${dim1}/${dim2}`
        }

        return url 
    }

}
// =======================================
// testing an instance of the object

let url = ""
function testing(){
    let testObj = new CatImage()

    let d1 = testObj.generateDimensions()
    let d2 = testObj.generateDimensions()
    // console.log(d1, d2)
    
    d1 = testObj.ensureNum(d1)
    d2 = testObj.ensureNum(d2)
    // console.log(d1, d2)

    url = testObj.checkRatio(d1, d2)
    console.log(url)
}
// =======================================

function showImage(){
    testing()
    
    // show image
    let image = document.querySelector("#display-image").querySelector("img")
    image.src = ""
    image.src = url 

    // show link to the image
    let displayUrl = document.getElementById("display-url")
    displayUrl.innerText = `getting image...`

    let rawUrl = document.getElementById("raw-url")
    rawUrl.innerHTML = ""

    setTimeout(() => {
        displayUrl.innerText = `Link to image: `
        rawUrl.innerText = `${url}`
        // displayUrl.querySelector("i").innerText = `${url}`
        // displayUrl.innerText = `Link to image: ${url}`
    }, "3000");

    
}
// =======================================

function gotoUrl(){
    window.open(url)
}
// =======================================

function mainCat(){
    testing()
    showImage()
}
// =======================================