const APIKey = '004dTU1swCv8D9SGILWREoq0Yv33s8fB';
const getCityUrl = (cityUrl) =>
  `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityUrl}`;

const getCityWeatherUrl = (key, APIKey) => 
  `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${APIKey}&language=pt-br`;

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

const getCityWeather = async (cityName) => {
  const [cityData] = await getCityData(cityName);
  const { Key } = cityData;
  const response = await fetchData(getCityWeatherUrl(Key, APIKey));
  return response;
};

getCityWeather('Uberlândia');
