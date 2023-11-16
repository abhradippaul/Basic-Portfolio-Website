// javascript
const mobile_menu_logo = document.querySelector("#mobile-menu")
const nav_links_div = document.querySelector(".nav-links-div")
let toggle_menu = true
mobile_menu_logo.addEventListener("click",()=>{
    if(toggle_menu) {
        nav_links_div.style.display = "flex"
        mobile_menu_logo.src = "./assets/close.png"
        toggle_menu = false
    }else{
        nav_links_div.style.display = "none"
        mobile_menu_logo.src = "./assets/hamburger.png"
        toggle_menu = true
    }
})