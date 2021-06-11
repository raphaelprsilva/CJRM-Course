const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');

button.addEventListener('click', () => {
  // Quando eu clico no botão 'Clique aqui', será definido que
  // o estilo mostrado, ou seja, 'style.display' será 'block'
  popup.style.display = 'block';
});

popup.addEventListener('click', (event) => {
  const classNameOfClickedElement = event.target.classList[0];

  // Se o console for exibido, será mostrado um 'DOMTokenList'
  // Isso se tivertmos algo assim: 'event.target.classList'
  // com a classe do item clicado, que será um array
  // Se for especificado, que eu desejo o valor na posição '0',
  // será obtida o valor da classe, no caso, 'popup-link'
  // e assim por diante. Então, a lógica que vamos desenvolver, é:
  // Se eu clicar em algum dos items, com as classes em questão,
  // eu desejo, fechar o 'popup'.
  // Clique no link 'Saiba mais' e veja
  // console.log(classNameOfClickedElement);

  // Classes que eu desejo capturar ao clicar, e que fecharão o popup
  const classNames = ['popup-link', 'popup-close', 'popup-wrapper'];

  // O 'some' vai retornar um boolean, e vai verificar se PELO MENOS ALGUM dos items de 'classNames'
  // possui a classe especificada para o popup desaparecer
  const shouldClosePopUp = classNames.some(className => className === classNameOfClickedElement);

  // Se 'shouldClosePopup' for verdadeiro, o estilo do 'popup', será 'none'
  if (shouldClosePopUp) {
    popup.style.display = 'none';
  }
})