const burgeNavigation = document.querySelector(".burger_navigation");
const hamburgerMenu = document.querySelector(".menu_hamburger");
const body = document.querySelector("body");
const navLinks = document.querySelectorAll(".navigation_menu-link")

hamburgerMenu.addEventListener("click", function () {
    hamburgerMenu.classList.toggle("active");
    if (hamburgerMenu.classList.contains("active")) {
        burgeNavigation.classList.add("active");
        body.classList.add("lock");
    } else {
        burgeNavigation.classList.remove("active");
        body.classList.remove("lock");
    }
})

for (let navLink of navLinks) {
    navLink.addEventListener("click", function () {
        if (hamburgerMenu.classList.contains("active")) {
            hamburgerMenu.classList.remove("active");
            burgeNavigation.classList.remove("active");
            body.classList.remove("lock");
        }
    })
}
