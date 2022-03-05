import bunny from './images/guillermo-casales-0rgv5ydipU8-unsplash.jpg';

function createMenuItem(imageLocation, description, price) {
    const item = document.createElement("div");
    item.classList.add("item");
    
    const imageElement = () => {
        const element = document.createElement("img");
        element.src = imageLocation;
        return element; 
    }

    const descriptElement = () => {
        const element = document.createElement("p");
        element.textContent = description;
        return element;
    }

    const costElement = () => {
        const element = document.createElement("p");
        element.textContent = "$" + price;
        return element;
    }

    item.appendChild(imageElement());
    item.appendChild(descriptElement());
    item.appendChild(costElement());

    return item;
}

const menu = (() => {
    const fullMenu = [];

    const addToMenu = (...item) => {
        item.forEach(item => {
            fullMenu.push(item);
        })
    }

    return {
        fullMenu,
        addToMenu,
    }    
})();

/* add menu items here */
menu.addToMenu(
    createMenuItem(bunny, 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 
    "12"),

    createMenuItem(bunny,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 
    5),

    createMenuItem(bunny,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    13.4),
    
    createMenuItem(bunny, 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    15.99),
)



function loadMenu() {
    const main = document.querySelector(".main");
    const menuElement = document.createElement("div");
    menuElement.classList.add("menu");

    menu.fullMenu.forEach(item => {
        menuElement.appendChild(item);
    });

    main.appendChild(menuElement);
}

export {loadMenu}