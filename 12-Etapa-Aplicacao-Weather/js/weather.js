const APIKey = '004dTU1swCv8D9SGILWREoq0Yv33s8fB';
const getCityUrl = (cityUrl) =>
  `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityUrl}`;

const getCityData = async (cityName) => {
  try {
    const cityUrl = getCityUrl(cityName)
    const response = await fetch(cityUrl);

    if (!response.ok) {
      throw new Error('Was not possible to get data from API.')
    }
    const [cityData] = await response.json();
    return cityData;
  } catch ({ name, message }) {
    alert(`${name}: ${message}`);
  }
};

const getCityWeather = async (cityName) => {
  try {
    const { Key } = await getCityData(cityName);
    const cityWeatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}`;
    const response = await fetch(cityWeatherUrl);

    if (!response.ok) {
      throw new Error('Was not possible to get data from API.')
    }
    const [cityWeatherData] = await response.json();
    debugger
    return cityWeatherData;
  } catch ({ name, message }) {
    alert(`${name}: ${message}`);
  }
};

getCityWeather('São Paulo');
