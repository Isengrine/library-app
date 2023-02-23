function showSlide() {
    //Goes back to first slide if slideIndex is bigger than total slides
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    //Goes to last slide if slideIndex is less than 0
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    //Make every slide hidden (via "display = "none"")
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //Remove the "active" class from every dot
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    //Show the slide in the array (via "display = "block"")
    slides[slideIndex - 1].style.display = "block";
    //Set the "active" on the dot in the array
    dots[slideIndex - 1].className += " active";
}

//Used when the Next/Prev buttons are clicked
function plusSlides(n) {
    slideIndex += n;
    showSlide();
}

//Used when a dot is clicked
function currentSlide(n) {
    slideIndex = n;
    showSlide();
}

let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");

let slideIndex = 1;

showSlide();