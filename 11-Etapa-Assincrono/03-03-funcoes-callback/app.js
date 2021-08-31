const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
  const isRequestOkay = request.readyState === 4 && request.status === 200;
  const isRequestNotOkay = request.readyState === 4;

  if (isRequestOkay) {
    console.log('request.responseText:', request.responseText)
    return;
  }

  if (isRequestNotOkay) {
    console.log('Was not possible get data from API');
  }
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
request.send();