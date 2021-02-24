// Exo Copy Img
let btn = document.getElementsByClassName("btn")[0]
let container = document.getElementById ("mignon-container")
let img = document.querySelector("img")

btn.addEventListener("click", () =>{
    let clone = img.cloneNode()
    container.appendChild(clone)
})
console.log(img)

// Exo Rm Images
let container1 = document.getElementById("mignon2-container")
let img1 = container1.children

container1.addEventListener("click", (e) =>{
    if(e.target.tagName == "IMG"){
        e.target.remove()
        if(img1.length == 0){
            setTimeout (()=>{
                for(let i = 0; i<5; i++){
                    let clone = e.target.cloneNode()
                    container1.appendChild(clone)
                }
            },2000)
        }
    }
    
})

//Exo add Li

let ul = document.querySelector("ul")
let li = document.createElement("li")
let li3 = document.querySelectorAll("#exo-add-li > ul > li")[1]
li.textContent =  "li num 2"
ul.insertBefore(li, li3)


//Exo Li from Input 

let liste = document.querySelector("ul")
let cont = document.createElement("li")
let cont1 = document.querySelectorAll("#exo-li-from-input")