// Start Menu

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
});

// Start Menu All Apps List

const allApps = document.querySelector('.all-apps');
const allAppList = document.querySelector('.all-app-list');

allApps.addEventListener('click', ()=>{
    if (allAppList.style.right == "0%") {
        allAppList.style.right = "-40%";
    } else {
        allAppList.style.right = "0%";
    }
})

// Widgets Panel and Sidebar

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

// Notification and Date Time Panel

const notification = document.querySelector('.notification');
const dt = document.querySelector('.d-t');
const dateTime = document.querySelector('.date-time');

dateTime.addEventListener('click', ()=> {
    if (notification.style.left == "82%" && dt.style.left == "82%") {
        notification.style.left = "100%";
        dt.style.left = "100%";
    } else {
        notification.style.left = "82%"
        dt.style.left = "82%";
    }
});

// Error on Mobile Devices

const nonsenseButton = document.querySelector('.nonsenseButton');
const content = document.querySelector('.content');

nonsenseButton.addEventListener('click', ()=>{
    content.style.opacity = "1";
});

// Windows Funtionalities 

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
});

minimize.addEventListener('click', ()=>{
    chromeWindow.style.top = "53.5%";
    chromeWindow.style.left = "7.2%";
    chromeWindow.style.transform = "scale(0)";
});

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
});

close.addEventListener('click', ()=>{
    chromeWindow.style.top = "53.5%";
    chromeWindow.style.left = "7.2%";
    chromeWindow.style.transform = "scale(0)";
});
