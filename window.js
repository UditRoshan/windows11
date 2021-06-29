const chromeWindow = document.querySelector('.chromeWindow');
const minimize = document.querySelector('.minimize');
const maximize = document.querySelector('.maximize');
const close = document.querySelector('.close');
const chromeIcon = document.querySelector('.chromeIconJs');


chromeIcon.addEventListener('click', ()=>{
    if (chromeWindow.style.top == "0%" && chromeWindow.style.left == "0%" && chromeWindow.style.transform == "scale(1)") {
        chromeWindow.style.top = "53.5%";
        chromeWindow.style.left = "7.2%";
        chromeWindow.style.transform = "scale(0)";
    } else {
        chromeWindow.style.top = "0%";
        chromeWindow.style.left = "0%";
        chromeWindow.style.transform = "scale(1)";
    }
})

minimize.addEventListener('click', ()=>{
    chromeWindow.style.top = "53.5%";
    chromeWindow.style.left = "7.2%";
    chromeWindow.style.transform = "scale(0)";
})

maximize.addEventListener('click', ()=>{
    if (chromeWindow.style.width == "100vw" && chromeWindow.style.height == "95vh" && chromeWindow.style.top == "0%" && chromeWindow.style.left == "0%" && chromeWindow.style.borderRadius == "0px") {
        chromeWindow.style.width = "1400px";
        chromeWindow.style.height = "750px";
        chromeWindow.style.top = "5.5%";
        chromeWindow.style.left = "7.2%";
        chromeWindow.style.borderRadius = "8px"
    } else {
        chromeWindow.style.width = "100vw";
        chromeWindow.style.height = "95vh";
        chromeWindow.style.top = "0%";
        chromeWindow.style.left = "0%";
        chromeWindow.style.borderRadius = "0px"
    }
})

close.addEventListener('click', ()=>{
    chromeWindow.style.top = "53.5%";
    chromeWindow.style.left = "7.2%";
    chromeWindow.style.transform = "scale(0)";
})