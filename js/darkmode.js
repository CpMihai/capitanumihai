let darkModeSwitch = document.getElementById("darkmode-switch");

darkModeSwitch.addEventListener("click", function (e){ 
    let body = document.querySelector("body");
    let isEnabled = body.classList.contains("darkmode");
    let switchIcon = document.querySelector("#switch-icon");
    if (!isEnabled) {
        switchIcon.classList.remove("bi-moon-fill");
        switchIcon.classList.add("bi-sun-fill");
        body.classList.add("darkmode");
        switchIcon.style.color = "white";
    } else { 
        body.classList.remove("darkmode");
        switchIcon.classList.remove("bi-sun-fill");
        switchIcon.classList.add("bi-moon-fill");
        switchIcon.style.color = "black";
    }
});

