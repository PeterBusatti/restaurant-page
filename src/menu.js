import bunny from './images/guillermo-casales-0rgv5ydipU8-unsplash.jpg';

function createMenuItem(imageLocation, title, description, price) {
    const item = document.createElement("div");
    item.classList.add("item");
    
    const imageElement = () => {
        const element = document.createElement("img");
        element.src = imageLocation;
        return element; 
    }

    const titleElement = () => {
        const element = document.createElement("p");
        element.textContent = title;
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
    item.appendChild(titleElement());
    item.appendChild(descriptElement());
    item.appendChild(costElement());

    return item;
}

const menuList = (() => {
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
menuList.addToMenu(
    createMenuItem(bunny, 
        "Timothy Hay",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 
        "12"),

    createMenuItem(bunny, 
        "Timothy Hay",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 
        "12"),
        
    createMenuItem(bunny, 
        "Timothy Hay",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 
        "12"),

    createMenuItem(bunny, 
        "Timothy Hay",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 
        "12"),
);



function loadMenu() {
    const main = document.querySelector(".main");
    main.textContent = "";
    
    const menuElement = document.createElement("div");
    menuElement.classList.add("menu");

    menuList.fullMenu.forEach(item => {
        menuElement.appendChild(item);
    });

    main.appendChild(menuElement);
}

export {loadMenu}