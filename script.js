const hamburger = document.getElementById("hamburger");
const navItem = document.getElementById("navItem")

hamburger.addEventListener("click",()=>{
    navItem.classList.toggle("nav-items-active");
    console.log("its clicked")
})
