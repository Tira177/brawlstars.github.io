const images = document.querySelectorAll('.open-case__img');
let popup = document.querySelector('.popup');
let popup__link = document.querySelector('.popup-block__link');

const popup_title = document.querySelector('.popup-title');



const LINK = 'https://t.me/+j_VaRIoX_0U4Mzcy';

function startRandomAnimation() {

    if (images.length === 0) {
        console.error("No images found with the class 'image'.");
        return;
    }

    images.forEach(img => img.classList.remove('animated'));

    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    if (randomImage) {
        randomImage.classList.add('animated');
    }

    setTimeout(startRandomAnimation, Math.random() * 2000 + 1000);
}

startRandomAnimation();


images.forEach(function(el) {
    el.addEventListener('click', () =>  {
        popup.classList.add('df')

        if (el.getAttribute('data-stardrop') == 'angel') {
            popup_title.textContent = 'Забери 10 ангельских стардропов:';
        } else {
            popup_title.textContent = 'Забери 10 демонских стардропов:';
        }

        console.log(el.getAttribute('data-stardrop'))
    } 
)})



document.querySelector('.popup-close').addEventListener('click', function() {
    popup.classList.remove('df');
});


popup__link.href = LINK;
