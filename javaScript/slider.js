// dom content loaded
document.addEventListener("DOMContentLoaded", () => {
    /* Image slider */

    const firstSlide = document.querySelector(".first-image");
    const firstNumber = document.querySelector(".first-number");
    const firstPrompt = document.querySelector(".first-prompt");
    const sliderImages = document.querySelectorAll(".slide img"); // Array with 4 elements
    const sliderButtons = []; // Buttons for the slider

    for (let i = 0; i < 4; i++) {
        sliderButtons[i] = document.getElementById("f" + (i + 1));
        sliderButtons[i].addEventListener("click", () => slide(i + 1));
    }

    // Set the first image to be visible by default
    sliderImages[0].style.opacity = "1";
    sliderImages[0].style.filter = "none";
    sliderButtons[0].checked = true;

    // Moves the slider
    function slide(index) {
        const getCSSValue = (selector, prop) => parseFloat(window.getComputedStyle(document.querySelector(selector))[prop]);
        const slideDistance = getCSSValue(".slide", "width") + getCSSValue(".slide", "marginRight");
        const numberDistance = getCSSValue(".number", "width") + getCSSValue(".number", "marginRight");
        const promptDistance = getCSSValue(".prompt", "height") + getCSSValue(".prompt", "marginTop");

        if (index === 1) {
            firstSlide.style.marginLeft = "0";
            firstNumber.style.marginLeft = "0";
            firstPrompt.style.marginBottom = "0";
        } else {
            firstSlide.style.marginLeft = -(index - 1) * slideDistance + "px";
            firstNumber.style.marginLeft = -(index - 1) * numberDistance + "px";
            firstPrompt.style.marginBottom = -(index - 1) * promptDistance + "px";
        }

        for (let j = 0; j < 4; j++) {
            sliderImages[j].style.opacity = sliderButtons[j].checked ? "1" : "0.3";
            sliderImages[j].style.filter = sliderButtons[j].checked ? "none" : "blur(2px)";

            // For debugging
            if (sliderButtons[j].checked === true) console.log("Button " + (j + 1) + " is checked");
            else console.log("Button " + (j + 1) + " is unchecked");
        }
    }
});
