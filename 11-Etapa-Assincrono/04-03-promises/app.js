const getPokemons = (url) => {
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

getPokemons('https://pokeapi.co/api/v2/pokemon/bulbasaur/')
  .then((bulbasaur) => {
    console.log(bulbasaur);
    return getPokemons('https://pokeapi.co/api/v2/pokemon/ivysaur/')
  })
  .then((ivysaur) => {
    console.log(ivysaur);
    return getPokemons('https://pokeapi.co/api/v2/pokemon/venusaur/')
  })
  .then((venusaur) => console.log(venusaur))
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