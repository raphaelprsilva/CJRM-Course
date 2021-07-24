const getTodos = (url) =>
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

getTodos('https://digimon-api.vercel.app/api/digimon/name/Koromons')
  .then((digimon) => console.log(digimon))
  .catch((error) => console.log(error));
