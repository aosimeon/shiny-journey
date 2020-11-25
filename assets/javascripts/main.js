const pulls = document.querySelector(".header__pri-nav-item:first-child");
const headerSearch = document.querySelector(".header__search");
const primaryNav = document.querySelector(".header__pri-nav");
const hamburgerMenu = document.querySelector(".header__hamburger-menu");

// Changes "Pull requests" to "Pulls"
window.addEventListener('resize', () => {
    if (window.innerWidth <= 910) {
        pulls.innerText = "Pulls";
    } else {
        pulls.innerText = "Pull requests"
    }

    if (window.innerWidth >= 850) {
        headerSearch.style.display = "block";
        primaryNav.style.display = "block";
    } else {
        headerSearch.style.display = "none";
        primaryNav.style.display = "none";
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth <= 910) {
        pulls.innerText = "Pulls";
    } else if (window.innerWidth <= 850) {
        pulls.innerText = "Pull requests"
    } else {
        pulls.innerText = "Pull requests"
    }
});

// Mobile menu
let isMenu = true;
hamburgerMenu.addEventListener('click', () => {
   if (isMenu) {
       headerSearch.style.display = "block";
       primaryNav.style.display = "block";
       isMenu = false;
   } else {
       headerSearch.style.display = "none";
       primaryNav.style.display = "none";
       isMenu = true;
   }
});


