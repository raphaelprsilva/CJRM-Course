const url = 'https://economia.awesomeapi.com.br/json/all';

fetch(url)
  .then((response) => {
    console.log('response:', response);
    return response.json()
  })
  .then((data) => console.log(data))
  .catch((error) => console.log('error:', error))
