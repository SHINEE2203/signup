let signin = document.querySelector(".sin");
let signup = document.querySelector(".sup");
let slider = document.querySelector(".slider");
let form = document.querySelector(".form");
 signin.addEventListener("click",() =>{
    slider.classList.add("moveslider");
    form.classList.add("form-move");
 });
 signup.addEventListener("click",() =>{
    slider.classList.remove("moveslider");
    form.classList.remove("form-move");
 });