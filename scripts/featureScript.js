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