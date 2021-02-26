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
            },1000)
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

// 4

let button = document.querySelector("#exo-li-from-input button");
let myUl = document.querySelector("#exo-li-from-input>ul");
let inputTodo = document.querySelector(".form-control");

button.addEventListener("click", () => {
    if (inputTodo.value.trim() != "") {
        let myLi = document.createElement("li");
        myLi.textContent = inputTodo.value;
        myUl.appendChild(myLi);
        inputTodo.value = "";
    }
});

let editOrder = document.querySelectorAll("button")[2];
editOrder.addEventListener("click", () => {
    let liTodo = [...document.querySelectorAll("#exo-li-from-input>ul li")];
    let newTodo = [];
    for (let i = 0; i < liTodo.length; i) {
        let random = Math.floor(Math.random() * liTodo.length);
        newTodo.push(liTodo[random]);
        liTodo.splice(random, 1);
        document.querySelector("#exo-li-from-input>ul li").remove();
    }
    newTodo.forEach(e => {
        let li = document.createElement("li");
        li.textContent = e.textContent;
        myUl.appendChild(li);
    });
});
