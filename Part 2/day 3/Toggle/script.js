let btn = document.querySelector(".btn");
let h1 = document.querySelector("h1");
let box = document.querySelector(".box");
btn.addEventListener("click",function(){
    document.body.classList.toggle("dark-mode");
    btn.textContent = document.body.classList.contains("dark-mode") ? "Light" : "Dark";
    h1.textContent = document.body.classList.contains("dark-mode") ? "This is a dark mode" : "This is a light mode";
    box.style.border = document.body.classList.contains("dark-mode") ? "1px solid white" : "1px solid black";
});