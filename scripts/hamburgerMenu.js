const headerNavigation = document.querySelector(".header_navigation-menu");
const hamburgerMenu = document.querySelector(".menu_hamburger");
const body = document.querySelector("body");
const navLinks = document.querySelectorAll(".navigation_menu-link")

hamburgerMenu.addEventListener("click", function () {
    hamburgerMenu.classList.toggle("active");
    if (hamburgerMenu.classList.contains("active")) {
        headerNavigation.classList.add("active");
        body.classList.add("lock");
    } else {
        headerNavigation.classList.remove("active");
        body.classList.remove("lock");
    }
})

for (let navLink of navLinks) {
    navLink.addEventListener("click", function () {
        if (hamburgerMenu.classList.contains("active")) {
            hamburgerMenu.classList.remove("active");
            headerNavigation.classList.remove("active");
            body.classList.remove("lock");
        }
    })
}
