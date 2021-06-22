const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');

button.addEventListener('click', () => {
  popup.style.display = 'block';
});

popup.addEventListener('click', ({ target }) => {
  const classNameOfClickedElement = target.className;
  const classNames = ['popup-close', 'popup-wrapper', 'popup-link']
  const shouldClosePopup = classNames.some(className =>
    className === classNameOfClickedElement);

  if (shouldClosePopup) {
    popup.style.display = 'none';
  }
});