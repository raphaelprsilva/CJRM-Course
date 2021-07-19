const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
  // Estou verificando se a propriedade 'readyState' do 'request'
  // é igual a 4, pois, só neste estado, que posso "fazer algo"
  // com a resposta
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.responseText);
  }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
request.send();

// Retorna um Objeto
// console.log(request);
