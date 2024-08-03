import image from '../images/glaze.jpg';

const landingPage = function() {

    // Selector statements
    const content = document.querySelector("#content");

    // Generate HTML elements
    const imageDiv = document.createElement("div");
    const introductionDiv = document.createElement("div");
    const introductionH1 = document.createElement("h1");
    const introductionH3 = document.createElement("h3");
    const introductionPOne = document.createElement("p");
    const introductionPTwo = document.createElement("p");
    
    // Assign classes
    imageDiv.classList.add("image-container");
    introductionDiv.classList.add("introduction");

    // Add content
    const img = new Image();
    img.src = image;

    introductionH1.textContent = "Hello it's Glaze";
    introductionH3.textContent = "An independently owned eatery. capturing our love for home comforts";
    introductionPOne.textContent = "Part eatery and part cafe, we are your neighbourhood eatery best for early morning coffee, quick lunches, and a night hangout spot. Come pop in and say hello!";
    introductionPTwo.textContent = "Looking forward to welcoming you soon."

    // Append children
    imageDiv.appendChild(img);
    introductionDiv.append(introductionH1, introductionH3, introductionPOne, introductionPTwo);
    content.append(imageDiv, introductionDiv);
}

export { landingPage };