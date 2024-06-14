//Luana Aparecida Tavares
document.addEventListener("DOMContentLoaded", function() {
    const slide = document.querySelector('.carousel-slide');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const slideWidth = document.querySelector('.carousel-slide img').clientWidth;

    let counter = 0;
    const slidesCount = document.querySelectorAll('.carousel-slide img').length;

    nextButton.addEventListener('click', () => {
        if (counter < slidesCount - 1) {
            counter++;
            updateSlidePosition();
        }
    });

    prevButton.addEventListener('click', () => {
        if (counter > 0) {
            counter--;
            updateSlidePosition();
        }
    });

    function updateSlidePosition() {
        const offset = -counter * slideWidth;
        slide.style.transform = `translateX(${offset}px)`;
    }

    setInterval(() => {
        if (counter < slidesCount - 1) {
            counter++;
            updateSlidePosition();
        } else {
            counter = 0;
            updateSlidePosition();
        }
    }, 3000);
});
