import bunny from './images/guillermo-casales-0rgv5ydipU8-unsplash.jpg';

const homeContent = (() => {
    const headline = () => {
        const createHeadline = document.createElement("h2");
        createHeadline.textContent = "Quality sourced ingredients shipped right to your door!";
        return createHeadline;
    }

    const text = () => {
        const createText = document.createElement("p");
        createText.textContent = "This is your one stop shop for your rabbit's nutritional needs.";
        return createText;
    }

    const img = () => {
        const createImg = document.createElement("img");
        createImg.src = bunny;
        createImg.alt = "rabbit eating from bowl";
        return createImg;
    }

    return {
        headline,
        text,
        img,
    }
})();

function loadHome() {
    const main = document.querySelector(".main");
    const home = document.createElement("div");
    home.classList.add("home");

    home.appendChild(homeContent.headline());
    home.appendChild(homeContent.text());
    home.appendChild(homeContent.img());

    main.appendChild(home);
}

export {loadHome}