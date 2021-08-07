const url = 'https://economia.awesomeapi.com.br/json/all';

const getUsers = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    console.log(Object.keys(data));
  } catch (error) {
    console.log(error);
  }
}

getUsers();