const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');

button.addEventListener('click', () => {
  popup.style.display = 'block';
});

popup.addEventListener('click', (event) => {
  const classNameOfClickedElement = event.target.classList[0];

  // Se o console for exibido, será mostrado um 'DOMTokenList'
  // com a classe do item clicado, que será um array
  // Se for especificado, que eu desejo o valor na posição '0',
  // será obtida o valor da classe, no caso, 'popup-link'
  // Clique no link 'Saiba mais' e veja
  // console.log(classNameOfClickedElement);

  const classNames = ['popup-link', 'popup-close', 'popup-wrapper'];

  // Vai retornar um boolean, e vai verificar se PELO MENOS ALGUM dos items de 'classNames'
  // possui a classe especificada para o popup desaparecer
  const shouldClosePopUp = classNames.some(className => className === classNameOfClickedElement);

  if (shouldClosePopUp) {
    popup.style.display = 'none';
  }
})