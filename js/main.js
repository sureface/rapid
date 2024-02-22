let navCollapse = document.querySelector(".nav-collapse");
let openBtn = document.querySelector(".open-btn");
let closeBtn = document.querySelector(".close-btn");
let navLink = document.querySelectorAll(".nav-link");
let nav = document.querySelector("header nav");

openBtn.addEventListener("click",()=>{
    navCollapse.classList.add("active");
    document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click",()=>{
    navCollapse.classList.remove("active");
    document.body.style.overflow = "auto";
});

navLink.forEach(link => link.addEventListener("click",() => {navCollapse.classList.remove("active");document.body.style.overflow = "auto";}));

window.addEventListener("scroll",()=>{
    if(document.documentElement.scrollTop > 10){
        nav.classList.add("fixed");
    }else{
        nav.classList.remove("fixed");
    }
});