import image from "../images/aboutus.jpg";

const aboutUs = function() {
    
    // Selector statements
    const content = document.querySelector("#content");

    // Generate HTML elements
    const imageDiv = document.createElement("div");
    const textDiv = document.createElement("div");
    const textHeader = document.createElement("h3");
    const textP1 = document.createElement("p");
    const textP2 = document.createElement("p");
    const textP3 = document.createElement("p");
    const textP4 = document.createElement("p");
    const img = new Image()

    // Add classes
    imageDiv.classList.add("image-container");
    textDiv.classList.add("text-div");

    // Add content
    img.src = image;

    textHeader.textContent = "About Us";
    textP1.textContent = "Glaze Eatery is an independently owned eatery founded in 2018."
    textP2.textContent = "Since we started, we have been serving all day breakfast, lunch and dinner set meal, selections of cakes and pastries, alongside coffee and beverages."
    textP3.textContent = "Our menu takes on inspiration from the food we all grew up eating here in Malaysia."
    textP4.textContent = "Over two years later, this remains our goal, to offer things local, fuss free and reminds us of home."
    
    // Append items
    textDiv.append(textHeader, textP1, textP2, textP3, textP4);
    imageDiv.appendChild(img);
    content.append(imageDiv, textDiv);

}

export { aboutUs };