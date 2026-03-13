let menu = document.querySelector("#menu-btn");
let nav = document.querySelector("#nav-part2");

menu.addEventListener("click",function(){
    nav.classList.toggle("active");
});