/* Mobile navigation button */
// dom content loaded
document.addEventListener("DOMContentLoaded", () => {
    
    const primaryNav = document.getElementById("primary-navigation");
    const navButton = document.querySelector(".mobile-nav-toggle");
    const primaryNavSide = document.querySelector(".mobile-nav-side");
    const navButtonBar = document.querySelectorAll(".bar");

    navButton.addEventListener("click", () => {
        const visibility = primaryNav.getAttribute("data-visible");
        if (visibility === "false") {
            primaryNav.setAttribute("data-visible", true);
            navButton.setAttribute("value", true);
            primaryNavSide.setAttribute("data-visible", true);
            navButtonBar.forEach((bar) => bar.setAttribute("data-visible", true));
        } else {
            primaryNav.setAttribute("data-visible", false);
            navButton.setAttribute("value", false);
            primaryNavSide.setAttribute("data-visible", false);
            navButtonBar.forEach((bar) => bar.setAttribute("data-visible", false));
        }
    });

    primaryNavSide.addEventListener("click", () => {
        primaryNav.setAttribute("data-visible", false);
        navButton.setAttribute("value", false);
        primaryNavSide.setAttribute("data-visible", false);
        navButtonBar.forEach((bar) => bar.setAttribute("data-visible", false));
    });

    /* Scroll event */

    const navbar = document.querySelector("nav");

    function handleScroll() {
        if (window.pageYOffset > 0) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", handleScroll);

    /* Lightbox */

    const images = document.querySelectorAll(".picture img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const closeLightbox = document.getElementById("close-lightbox");

    if (lightbox) {
        images.forEach((image) => {
            image.addEventListener("click", () => {
                const fullImageSrc = image.getAttribute("data-full-image");
                lightboxImage.src = fullImageSrc;
                lightbox.classList.remove("hidden");
            });
        });

        closeLightbox.addEventListener("click", () => {
            lightbox.classList.add("hidden");
        });

        lightbox.addEventListener("click", (e) => {
            if (e.target !== lightboxImage) {
                lightbox.classList.add("hidden");
            }
        });
    }

    /* Hc-mode */

    const root = document.documentElement;
    const hcButton = document.querySelector(".hc-mode");

    if (hcButton) {
        hcButton.addEventListener("click", () => {
            const value = hcButton.getAttribute("value");
            if (value === "false") {
                root.style.fontSize = "130%";
                hcButton.setAttribute("value", true);
            } else {
                root.style.fontSize = "";
                hcButton.setAttribute("value", false);
            }
        });
    }
});
