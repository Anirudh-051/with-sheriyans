let outer = document.querySelector(".outer");
let inner = document.querySelector(".inner");
let body = document.body;
let h1 = document.querySelector("h1");

// Check for saved user preference, if any
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    body.classList.add('light-mode');
    outer.classList.add('active');
}

outer.addEventListener("click", function() {
    outer.classList.toggle("active");
    body.classList.toggle('light-mode');
    h1.textContent = body.classList.contains('light-mode') ? 'This is a light mode' : 'This is a dark mode';
});