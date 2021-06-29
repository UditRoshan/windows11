const sidebar = document.querySelector('.sidebar');
const widgetsContainer = document.querySelector('.widgets-container');

sidebar.addEventListener('click', ()=>{
    if (sidebar.style.left == "42%" && widgetsContainer.style.left == "21%") {
        sidebar.style.left = "1%";
        widgetsContainer.style.left = "-21%";
    } else {
        sidebar.style.left = "42%";
        widgetsContainer.style.left = "21%";
    }
});