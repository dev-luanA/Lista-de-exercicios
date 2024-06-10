const categoryButtons = document.querySelectorAll('.category-button');
const images = document.querySelectorAll('.image');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;

        images.forEach(image => {
            if (category === 'all') {
                image.style.display = 'block';
            } else {
                if (image.classList.contains(category)) {
                    image.style.display = 'block';
                } else {
                    image.style.display = 'none';
                }
            }
        });
    });
});
