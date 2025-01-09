let index = 0;
const slides = document.querySelectorAll('.carousel-images img').length;
const width = 550;

function updateCarousel() {
    const carousel = document.querySelector('.carousel-images');
    carousel.style.transform = "translateX(" + (-index * width) + "px)";
}

function previousSlide() {
    if (index > 0){
        index -= 1;
    }
    else{
        index = slides - 1;
    }
    updateCarousel();
}

function nextSlide() {
    if (index < slides - 1){
        index += 1;
    }
    else{
        index = 0;
    }
    updateCarousel();
}
