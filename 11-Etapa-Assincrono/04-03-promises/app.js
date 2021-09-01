const getData = (url) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    
    request.addEventListener('readystatechange', () => {
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
  })
}

getData('https://jsonplaceholder.typicode.com/todos/')
  .then((todos) => console.log(todos))
  .catch((error) => console.log(error))

// const getData = () => {
//   return new Promise((resolve, reject) => {
//     // resolve('Dados aqui');
//     reject('Erro aqui');
//   })
// };

// getData()
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error))