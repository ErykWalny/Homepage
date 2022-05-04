
let button = document.querySelector(".button")
let body = document.querySelector(".body")
let themeName = document.querySelector(".themeName")
button.addEventListener("click", () => {

    body.classList.toggle("body2");

    if (body.classList.contains("body2")) {
        themeName.innerText = "Żółte";
    } 
    else {themeName.innerText = "Czarne";}
});

/*

let button = document.querySelector(".button")
let body = document.querySelector(".body")
button.addEventListener("click", () => {

    body.classList.toggle("body2", ".calosc");
});
*/