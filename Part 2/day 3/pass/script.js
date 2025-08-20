let view = document.getElementById("view");
let password = document.getElementById("password");
view.addEventListener("click",function(){
    if(password.type === "password"){
        password.type = "text";
        view.src = "./view.png";
    }else{
        password.type = "password";
        view.src = "./hide.png";
    }
});