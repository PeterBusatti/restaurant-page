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
        element.textContent = price;
        return element;
    }

    item.appendChild(imageElement());
    item.appendChild(descriptElement());
    item.appendChild(costElement());

    return item;
}

const menu = (() => {
    const fullMenu = [];

    const hay = createMenuItem(bunny, "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "$12");
    const hay2 = createMenuItem(bunny, "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "$12");
    const hay3 = createMenuItem(bunny, "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "$12");
    const hay4 = createMenuItem(bunny, "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "$12");

    fullMenu.push(hay, hay2, hay3, hay4);

    return {
        fullMenu,
    }    
})();




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