const APIKey = '004dTU1swCv8D9SGILWREoq0Yv33s8fB';
const getCityUrl = (cityUrl) =>
  `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityUrl}`;

const getCityWeatherUrl = (cityKey, APIKey) => 
  `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${APIKey}&language=pt-br`;

const fetchData = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Was not possible to get data from API.')
    }

    return await response.json();
  } catch ({ name, message }) {
    alert(`${name}: ${message}`);
  }
}

const getCityData = (cityName) => {
  const cityUrl = getCityUrl(cityName);
  return fetchData(cityUrl);
}

const getCityWeather = async (cityKey) => {
  const response = await fetchData(getCityWeatherUrl(cityKey, APIKey));
  return response;
};
