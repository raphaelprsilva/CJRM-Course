/*
  Neste exercício, vamos praticar um pouco do que vimos até aqui, através da 
  API do GIPHY, que é um website de GIFs (https://giphy.com/).

  - Seu desafio é implementar uma funcionalidade de busca dos GIFs. Quando o 
    usuário digitar o termo de busca no input e pressionar enter, um GIF deve 
    ser exibido na tela. Como neste exemplo: https://youtu.be/RHe-uCJGCeA
  - Observe que o GIF mais recente é inserido acima dos GIFs anteriores;
  - Para fazer requests para a API do GIPHY, você precisará de uma API key. 
    Para obtê-la, siga os seguintes passos:
    - Acesse https://developers.giphy.com/dashboard/ e faça o login;
    - No Dashboard, clique em "Create an App", clique em "API Selected" e em 
      "Next Step";
    - Dê um nome e descrição para o app e crie-o;
    - Clique no código da API key para copiá-la;
  - O submit do form deve ser feito para o endpoint abaixo. Atente-se para os 2
    [PLACEHOLDERS] que devem ser substituídos:
    - https://api.giphy.com/v1/gifs/search?api_key=[SUA_CHAVE_DA_API_AQUI]&limit=1&q=[VALOR_INSERIDO_NO_INPUT]
    - Se quiser testar outras possibilidades, os endpoints da API estão 
      listados na documentação: https://developers.giphy.com/docs/api/endpoint#search
  - Ignore os avisos no console. Para limpá-lo, pressione "ctrl + L".
*/

const form = document.querySelector('[data-js="form"]');
const imagesContainer = document.querySelector('.out');

const key = 'WtBQu15IGzfXWW7jwYrAf4pVykm2p40Q';

const getGIPHYApiUrl = (inputValue) =>
  `https://api.giphy.com/v1/gifs/search?api_key=${key}&limit=1&q=${inputValue}`;

const generateImageGiphy = (giphData) => {
  const srcImage = giphData.data[0].images.downsized.url;
  const giphImage = document.createElement('img');

  giphImage.src = srcImage;
  giphImage.alt = giphData.data[0]['title'];

  imagesContainer.insertAdjacentElement('afterend', giphImage)
};

const insertGiphIntoDOM = async (giphUrl, event) => {
  try {
    const response = await fetch(giphUrl);

    if (!response.ok) {
      throw new Error('Was not possible to get data from API.');
    }

    const giphData = await response.json();
    generateImageGiphy(giphData);
    event.target.reset();
  } catch (error) {
    alert(`${error.message}`);
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const inputValue = event.target.search.value;
  const GIPHYUrl = getGIPHYApiUrl(inputValue);

  insertGiphIntoDOM(GIPHYUrl, event);

})