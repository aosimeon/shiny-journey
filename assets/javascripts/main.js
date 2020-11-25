const pulls = document.querySelector(".header__pri-nav-item:first-child");
const headerSearch = document.querySelector(".header__search");
const primaryNav = document.querySelector(".header__pri-nav");
const hamburgerMenu = document.querySelector(".header__hamburger-menu");

// Changes "Pull requests" to "Pulls"
window.addEventListener('resize', () => {
    if (window.innerWidth <= 910 && window.innerWidth > 850) {
        pulls.innerText = "Pulls";
    } else if (window.innerWidth <= 850) {
        pulls.innerText = "Pull requests"
    } else {
        pulls.innerText = "Pull requests"
    }

    // if (window.innerWidth > 850) {
    //     headerSearch.style.display = "block";
    //     primaryNav.style.display = "block";
    // } else {
    //     headerSearch.style.display = "none";
    //     primaryNav.style.display = "none";
    // }
});

// Mobile menu
let isMenu = false;
hamburgerMenu.addEventListener('click', () => {
   if (!isMenu) {
       headerSearch.style.display = "block";
       primaryNav.style.display = "block";
       isMenu = true;
   } else {
       headerSearch.style.display = "none";
       primaryNav.style.display = "none";
       isMenu = false;
   }
});


