import './styles.css';
import { landingPage } from './js-files/homepage';
import { aboutUs } from './js-files/aboutus';
import { ourMenu } from './js-files/menu';

const homepage = (function(){

    // cache DOM
    const content = document.querySelector("#content");

    // selectors
    const homeBtn =  document.querySelector("#home-btn");
    const aboutBtn = document.querySelector("#about-us-btn");
    const menuBtn = document.querySelector("#menu-btn");

    // function
    const clearContent = function() {
        content.textContent = "";
    };

    // bind events
    homeBtn.addEventListener("click", () => {
        clearContent();
        landingPage();
    });
    aboutBtn.addEventListener("click", () => {
        clearContent();
        aboutUs();
    });

    menuBtn.addEventListener("click", () => {
        clearContent();
        ourMenu();
    });

    landingPage()
})();
