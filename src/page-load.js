function createTabItems() {
    const ul = document.createElement("ul");

    const home = document.createElement("li");
    home.textContent = "Home";
    ul.appendChild(home)

    const menu = document.createElement("li");
    menu.textContent = "Menu";
    ul.appendChild(menu)

    const contact = document.createElement("li");
    contact.textContent = "Contact";
    ul.appendChild(contact)

    return ul;
}

function createTitle() {
    const title = document.createElement("h1");
    title.textContent = "Hay Gourmet";

    return title;
}

function icon() {
    const icon = document.createElement("div");
    icon.classList.add("icon");

    return icon;
}

function header() {
    const headerContainer = document.createElement("div");
    headerContainer.classList.add("header");
    
    headerContainer.appendChild(createTitle());

    headerContainer.appendChild(createTabItems());

    headerContainer.appendChild(icon());

    return headerContainer;
}

function createFooterItems() {
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");

    ul.appendChild(li);
    ul.appendChild(li2);
    ul.appendChild(li3);

    return ul;
}

function footer() {
    const footerContainer = document.createElement("div");
    footerContainer.classList.add("footer");

    footerContainer.appendChild(createFooterItems());

    return footerContainer;
}

function main() {
    const main = document.createElement("div")
    main.classList.add("main");

    return main;
}

function pageLoad () {
    const content = document.getElementById("content");

    content.appendChild(header());
    content.appendChild(main());
    content.appendChild(footer());
}


export {pageLoad};