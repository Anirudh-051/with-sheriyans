let btn = document.querySelector(".btn");
btn.addEventListener("click",function(){
    document.body.classList.toggle("body-dark");
    btn.textContent = document.body.classList.contains("body-dark") ? "Light" : "Dark";
});
btn.textContent = document.body.classList.contains("body-dark") ? "Light" : "Dark";
