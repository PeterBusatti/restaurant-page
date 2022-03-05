import './style.css';
import {pageLoad} from './page-load.js';
import {loadHome} from './home.js';
import {loadMenu} from './menu.js';
import {loadContact} from './contact.js';

init();

function addListeners() {
    const tabs = document.querySelectorAll(".header li");

    tabs.forEach(tab => {
        tab.addEventListener("click", changePage);
    })
}

function changePageHighlight(e) {
    const tabs = document.querySelectorAll(".header li");

    tabs.forEach(tab => {
        if (tab.classList == "selected") {
            tab.classList.toggle("selected");
        }
    })
    e.target.classList.toggle("selected");
}

function changePage(e) {
    switch (e.target.id) {
        case "home":
            loadHome();
            break;
        case "menu":
            loadMenu();
            break;
        case "contact":
            loadContact();
            break;
    }
    changePageHighlight(e);
}

function init() {
    pageLoad();
    loadHome();
    addListeners();
}
