$(function () {

});

// JS Tabs
// 1: https://stackoverflow.com/questions/59432791/how-to-make-tabs-with-pure-js
// 2: https://codepen.io/wangel13/pen/OXBrRp

function Tabs() {
    var bindAll = function () {
        var menuElements = document.querySelectorAll('[data-tab]');
        for (var i = 0; i < menuElements.length; i++) {
            menuElements[i].addEventListener('click', change, false);
        }
    }

    var clear = function () {
        var menuElements = document.querySelectorAll('[data-tab]');
        for (var i = 0; i < menuElements.length; i++) {
            menuElements[i].classList.remove('active');
            var id = menuElements[i].getAttribute('data-tab');
            document.getElementById(id).classList.remove('active');
        }
    }

    var change = function (e) {
        clear();
        e.target.classList.add('active');
        var id = e.currentTarget.getAttribute('data-tab');
        document.getElementById(id).classList.add('active');
    }

    bindAll();
}

var connectTabs = new Tabs();





// JS Scroll Reveal - https://codepen.io/kccnma/pen/MQeXPY

// reveal point from bottom and top of the window
var srPoint = 250;
window.addEventListener('scroll', reveal);
reveal();

function reveal() {
    var srSelector = document.querySelectorAll('.scrollreveal');
    for (var i = 0; i < srSelector.length; i++) {
        var windowHeight = window.innerHeight;
        var srTop = srSelector[i].getBoundingClientRect().top;
        var srBottom = srSelector[i].getBoundingClientRect().bottom;
        if (srTop < windowHeight - srPoint) {
            srSelector[i].classList.add('scrollreveal__active')
        } else {
            // srSelector[i].classList.remove('scrollreveal__active');
        };
        if (srBottom < 0 + srPoint) {
            // srSelector[i].classList.remove('scrollreveal__active');
        }
    }
};