//hide side bar
const hide_sidebar = document.getElementById("hide-sideBar");
const sidebar = document.getElementById("side-bar-div");
const show_sidebar = document.getElementById("show-sidebar");

hide_sidebar.addEventListener('click', () => {
    sidebar.style.display = 'none';
    show_sidebar.style.display = 'block';
});

show_sidebar.addEventListener('click', () => {
    sidebar.style.display = 'block';
    show_sidebar.style.display = 'none';
});

//Mobile menu toogle feature
const mobileMenu = document.querySelector(".logo-mobile");
const mobile_menu_feature = document.querySelector(".menu-hidden");

mobileMenu.addEventListener('click', () => {
    mobile_menu_feature.style.display = 'block';
});

//Light and dark mode toogle feature
const lightMode = document.getElementById("light-theme");

const lightModeLogo = document.getElementById("logo");
const hideSidebar = document.querySelector(".hide-sidebar");
const darkMode = document.getElementById("dark-theme");
const sideBarBackground = document.querySelector(".side-bar");
const headerBackground = document.querySelector(".sticky-header");

lightMode.addEventListener('click', () => {
    hideSidebar.style.backgroundColor = "#635fc7";
    lightModeLogo.src = "./assets/logo-dark.svg";
    hideSidebar.style.color = "#ffffff";
    darkMode.style.display = 'block';
    lightMode.style.display = 'none';
    sideBarBackground.style.backgroundColor = "#20212C";
    headerBackground.style.backgroundColor = "#20212C";
    headerBackground.style.color = "#ffffff";
    document.body.style.backgroundColor = "#000112";
});

darkMode.addEventListener('click', () => {
    lightMode.style.display = 'block';
    darkMode.style.display = 'none';
    hideSidebar.style.backgroundColor = "#f4f7fd";
    hideSidebar.style.color = "#635fc7";
    lightModeLogo.src = "./assets/logo-light.svg";
    sideBarBackground.style.backgroundColor = "#ffffff";
    headerBackground.style.backgroundColor = "#ffffff";
    headerBackground.style.color = "#000000";
    document.body.style.backgroundColor = "#f4f7fd"; 
});