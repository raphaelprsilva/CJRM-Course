const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    // Estou verificando se a propriedade 'readyState' do 'request'
    // é igual a 4, pois, só neste estado, que posso "fazer algo"
    // com a resposta
    const isRequestOkay = request.readyState === 4 && request.status === 200;
    const isRequestNotOkay = request.readyState === 4;
    if (isRequestOkay) {
      callback(null, request.responseText);
      return;
    }

    if (isRequestNotOkay) {
      callback('Não foi possível obter os dados', null);
    }
  });

  request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
  request.send();

  // Retorna um Objeto
  // console.log(request);
};

getTodos((error, data) => {
  console.log('callback executado');

  if (error) {
    console.log(error);
    return;
  }

  console.log(data);
});
