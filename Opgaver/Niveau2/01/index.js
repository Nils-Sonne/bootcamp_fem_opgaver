let buttonContainer = document.querySelector("#buttons");
let buttons = document.querySelectorAll ('button');


buttonContainer.addEventListener("click", (event) => {
    if(event.target.localName === "button"){ 
    buttons.forEach(button => button.removeAttribute("style"))
    event.target.style.backgroundColor = "yellow"; 
    }
});
