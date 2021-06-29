const logo = document.querySelector('.logo');
const startMenu = document.querySelector('.startmenu');

logo.addEventListener('click', ()=> {
    if(startMenu.style.transform == "scale(1)" && startMenu.style.bottom == "6%"){
        startMenu.style.transform = "scale(0)";
        startMenu.style.bottom = "-36%";
    } else {
        startMenu.style.transform = "scale(1)";
        startMenu.style.bottom = "6%";
    }
})