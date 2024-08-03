import NasiLemak from '../images/nasiLemak.jpg';
import nasiKandar from '../images/NasiKandar.jpg';
import berryWaffle from '../images/berryWaffle.jpg';
import kueyTeow from '../images/KueyTeow.jpg';

const ourMenu = function() {
    
    // Selector statements
    const content = document.querySelector("#content");

    // Generate HTML elements
    const menuDiv = document.createElement("div");

    const itemOne = document.createElement("div");
    const itemTwo = document.createElement("div");
    const itemThree = document.createElement("div");
    const itemFour = document.createElement("div");

    const itemOneText = document.createElement("div");
    const itemTwoText = document.createElement("div");
    const itemThreeText = document.createElement("div");
    const itemFourText = document.createElement("div");

    const imageNL = new Image();
    const imageNK = new Image();
    const imageBW = new Image();
    const imageKT = new Image();

    const itemOneH3 = document.createElement("h3");
    const itemTwoH3 = document.createElement("h3");
    const itemThreeH3 = document.createElement("h3");
    const itemFourH3 = document.createElement("h3");

    const itemOneP = document.createElement("p");
    const itemTwoP = document.createElement("p");
    const itemThreeP = document.createElement("p");
    const itemFourP = document.createElement("p");

    // Add classes
    menuDiv.classList.add("menu-container");
    itemOne.classList.add("menu-item");
    itemTwo.classList.add("menu-item");
    itemThree.classList.add("menu-item");
    itemFour.classList.add("menu-item");

    // Add content
    imageNL.src = NasiLemak;
    imageNK.src = nasiKandar;
    imageBW.src = berryWaffle;
    imageKT.src = kueyTeow;

    itemOneH3.textContent = "Nasi Lemak - 12 RM";
    itemTwoH3.textContent = "Nasi Kandar - 15 RM";
    itemThreeH3.textContent = "Berry Waffle - 10 RM";
    itemFourH3.textContent = "Kuey Teow - 14 RM";

    itemOneP.textContent = "add on: chicken chop / grilled chicken + 9 | chicken popcorn + 6"
    itemTwoP.textContent = "The meal consists of steamed rice combined with an array of distinct curries, sides dishes, and gravies"
    itemThreeP.textContent = "Belgian waffle, seasonal berries, whipped cream and syrup"
    itemFourP.textContent = "Char kway teow is a stir-fried rice noodle dish from Maritime Southeast Asia"
    
    // Append items
    itemOneText.append(itemOneH3, itemOneP);
    itemTwoText.append(itemTwoH3, itemTwoP);
    itemThreeText.append(itemThreeH3, itemThreeP);
    itemFourText.append(itemFourH3, itemFourP);

    itemOne.append(itemOneText, imageNL);
    itemTwo.append(itemTwoText, imageNK);
    itemThree.append(itemThreeText, imageBW);
    itemFour.append(itemFourText, imageKT);

    menuDiv.append(itemOne, itemTwo, itemThree, itemFour);
    content.append(menuDiv);
}

export { ourMenu };