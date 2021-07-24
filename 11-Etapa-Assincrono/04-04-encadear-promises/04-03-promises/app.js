const getDigimons = (url) =>
  new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
      // Estou verificando se a propriedade 'readyState' do 'request'
      // é igual a 4, pois, só neste estado, que posso "fazer algo"
      // com a resposta
      const isRequestOkay = request.readyState === 4 && request.status === 200;
      const isRequestNotOkay = request.readyState === 4;
      if (isRequestOkay) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      }

      if (isRequestNotOkay) {
        reject('Não foi possível obter os dados');
      }
    });

    request.open('GET', url);
    request.send();
  });

getDigimons('https://digimon-api.vercel.app/api/digimon/name/Koromon')
  .then((koromon) => {
    console.log(koromon);
    return getDigimons(
      'https://digimon-api.vercel.app/api/digimon/name/Tsunomon'
    );
  })
  .then((tsunomon) => {
    console.log(tsunomon);
    return getDigimons(
      'https://digimon-api.vercel.app/api/digimon/name/Agumon'
    );
  })
  .then((agumon) => console.log(agumon))
  .catch((error) => console.log(error));
