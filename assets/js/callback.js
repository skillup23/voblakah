/*=============== POPUP MAIN CALLBACK ===============*/
let popupCallback = document.querySelector('.popup__callback');

document.querySelectorAll('.home__button').forEach(callback => {
  callback.onclick = () => {
    popupCallback.style.display = 'block';
  }
});

document.querySelector('.popup__callback span').onclick = () => {
  popupCallback.style.display = 'none';
};

popupCallback.addEventListener('click', (e) => {
  if (e.target == popupCallback) {
    popupCallback.style.display = 'none';
  }
});