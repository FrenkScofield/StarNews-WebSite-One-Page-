var swiper = new Swiper('.swiper-container', {
    //     nextButton: '.swiper-button-next',
    // prevButton: '.swiper-button-prev',
    slidesPerView: 3,
    spaceBetween: 10,
    autoplay: 3500,
    autoplayDisableOnInteraction: false,
    loop: true,
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    }
});


//Automatically loads a dark or light theme based on system preferences Start
const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
    document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
    document.body.classList.toggle("light-theme");
}

btn.addEventListener("click", function (e) {
    if (e.currentTarget.style.backgroundColor == "white") {

        document.getElementById("btnMod").style.backgroundColor = "black";
        document.getElementById("btnMod").style.color = "white";
        document.getElementById("btnMod").innerText = "Gunuz modu";
    } else {
        document.getElementById("btnMod").style.backgroundColor = "white";
        document.getElementById("btnMod").style.color = "black";
        document.getElementById("btnMod").innerText = "Gece modu"
    }

    if (prefersDarkScheme.matches) {
        document.body.classList.toggle("light-theme");
        var theme = document.body.classList.contains("light-theme")
            ? "light"
            : "dark";

    } else {
        document.body.classList.toggle("dark-theme");
        document.body.classList.toggle("btn-toggle")

        var theme = document.body.classList.contains("dark-theme")
            ? "dark"
            : "light";
    }
    localStorage.setItem("theme", theme);
});


//adjusts prayer times Start
function waitAndshow() {

    var systemdate = new Date();

    var time = document.getElementById("clock").innerHTML = systemdate.toLocaleTimeString();

    var sabah = "5:06:00 AM"
    var oglen = "12:52:30 PM"
    var ikindi = "4:48:00 PM"
    var aksam = "7:39:00 PM"
    var yatisi = "9:02:00 PM"

    if (time === sabah) {
        document.getElementById("namazTime").innerHTML = "Sabah "
    } else if (time === oglen) {
        document.getElementById("namazTime").innerHTML = "Öğle "
    } else if (time === ikindi) {
        document.getElementById("namazTime").innerHTML = "İkindi "
    } else if (time === aksam) {
        document.getElementById("namazTime").innerHTML = "Akşam "
    } else if (time === yatisi) {
        document.getElementById("namazTime").innerHTML = "Yatsı "
    }
}
setInterval(waitAndshow, 1000);


//js codes of multiple choice in head
$(document).ready(function () {
    $(".dropdown").hover(function () {
        var dropdownMenu = $(this).children(".dropdown-menu");
        if (dropdownMenu.is(":visible")) {
            dropdownMenu.parent().toggleClass("open");
        }
    });
});

