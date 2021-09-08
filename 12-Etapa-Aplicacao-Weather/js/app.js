const cityForm = document.querySelector('[data-js="change-location"]');
const cityName = document.querySelector('[data-js="city-name"]');
const cityWeather = document.querySelector('[data-js="city-weather"]');
const cityTemperature = document.querySelector('[data-js="city-temperature"]');
const cityCardContainer = document.querySelector('[data-js="city-card"]');
const timeImg = document.querySelector('[data-js="time"]');
const timeIconContainer = document.querySelector('[data-js="time-icon"]');

const getWeatherDataFromLocalStorage = (keyName) => {
  const localWeatherData = localStorage.getItem(keyName);
  const parsedLocalWeatherData = JSON.parse(localWeatherData);
  const {
    weatherText: weatherTextLocal,
    IsDayTime: isDayTimeLocal,
    WeatherIcon: weatherIconLocal,
    Value: valueLocal,
    LocalizedName: localizedNameLocal
  } = parsedLocalWeatherData;

  const timeIcon = `<img src="./src/icons/${weatherIconLocal}.svg" />`;
  isDayTimeLocal ? timeImg.src = './src/day.svg' : timeImg.src = './src/night.svg'

  timeIconContainer.innerHTML = timeIcon;
  cityName.textContent = localizedNameLocal;
  cityWeather.textContent = weatherTextLocal;
  cityTemperature.textContent = valueLocal;
}


if (localStorage.length) {
  cityCardContainer.style.display = "flex";

  getWeatherDataFromLocalStorage('weatherData');
}

cityForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const cityInput = event.target.city.value;

  const [{ Key, LocalizedName }] = await getCityData(cityInput);
  const [{ Temperature: { Metric }, WeatherText, IsDayTime, WeatherIcon }] = await getCityWeather(Key);
  const { Value } = Metric;

  cityCardContainer.style.display = "flex";

  const weatherData = { WeatherText, IsDayTime, WeatherIcon, Value, LocalizedName };
  const stringfiedWeatherData = JSON.stringify(weatherData);

  const keyName = 'weatherData';
  localStorage.setItem(keyName, stringfiedWeatherData);

  getWeatherDataFromLocalStorage(keyName);

  cityForm.reset();
});