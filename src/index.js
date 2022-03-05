import './style.css';
import {pageLoad, getTabs as tabs} from './page-load.js';
import {loadHome} from './home.js';
import {loadMenu} from './menu.js';
import {loadContact} from './contact.js';

init();

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

function addListeners() {
    tabs().forEach(tab => {
        tab.addEventListener("click", changePage);
    })
}

function changePageHighlight(e) {
    tabs().forEach(tab => {
        if (tab.classList == "selected") {
            tab.classList.toggle("selected");
        }
    })
    e.target.classList.toggle("selected");
}

function init() {
    pageLoad();
    loadHome();
    addListeners();
}
