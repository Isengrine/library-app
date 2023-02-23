function showSlide() {
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function plusSlides(n) {
    slideIndex += n;
    showSlide();
}

function currentSlide(n) {
    slideIndex = n;
    showSlide();
}

let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");

let slideIndex = 1;

showSlide();