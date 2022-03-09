import bunnyIcon from './images/rabbit-7040066.svg'
import facebookIcon from './images/facebook.svg'
import instagramIcon from './images/instagram.svg'
import twitterIcon from './images/twitter.svg'


function headerTabItems() {
    const ul = document.createElement("ul");

    const home = document.createElement("li");
    home.textContent = "Home";
    home.setAttribute("id", "home");
    home.classList.add("selected");
    ul.appendChild(home)

    const menu = document.createElement("li");
    menu.textContent = "Menu";
    menu.setAttribute("id", "menu");
    ul.appendChild(menu)

    const contact = document.createElement("li");
    contact.textContent = "Contact";
    contact.setAttribute("id", "contact");
    ul.appendChild(contact)

    return ul;
}

function headerTitle() {
    const title = document.createElement("h1");
    title.textContent = "Hay Gourmet";

    return title;
}

function headerIcon() {
    const icon = document.createElement("div");
    icon.classList.add("icon");
    icon.style.background = `rgba(0, 0, 0, .75) url(${bunnyIcon}) no-repeat center`;

    return icon;
}

function createHeader() {
    const headerContainer = document.createElement("div");
    headerContainer.classList.add("header");
    
    headerContainer.appendChild(headerTitle());
    headerContainer.appendChild(headerTabItems());
    headerContainer.appendChild(headerIcon());

    return headerContainer;
}

function footerItems() {
    const ul = document.createElement("ul");
    
    const facebook = document.createElement("li")
    facebook.style.background = `url(${facebookIcon}) no-repeat center/100%`;
    ul.appendChild(facebook);

    const instagram = document.createElement("li")
    instagram.style.background = `url(${instagramIcon}) no-repeat center/100%`;
    ul.appendChild(instagram);

    const twitter = document.createElement("li")
    twitter.style.background = `url(${twitterIcon}) no-repeat center/100%`;
    ul.appendChild(twitter);

    return ul;
}

function createFooter() {
    const footerContainer = document.createElement("div");
    footerContainer.classList.add("footer");

    footerContainer.appendChild(footerItems());

    return footerContainer;
}

function createMain() {
    const main = document.createElement("div")
    main.classList.add("main");

    return main;
}

function pageLoad() {
    const content = document.createElement('div');
    content.classList.add("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    document.body.appendChild(content);
}

const getTabs = () => document.querySelectorAll(".header li");

export {pageLoad, getTabs};