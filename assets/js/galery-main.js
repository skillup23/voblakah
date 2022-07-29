/*=============== POPUP MAIN GALERY ===============*/
let popupImg = document.querySelector('.popup__image');

document.querySelectorAll('.galery__data img').forEach(image => {
  image.onclick = () => {
    popupImg.style.display = 'block';
    document.querySelector('.popup__image img').src = image.getAttribute('src');
  }
});

document.querySelector('.popup__image span').onclick = () => {
  popupImg.style.display = 'none';
};

popupImg.addEventListener('click', (e) => {
  if (e.target == popupImg) {
    popupImg.style.display = 'none';
  }
});