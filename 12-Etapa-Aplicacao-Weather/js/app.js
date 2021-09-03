const cityForm = document.querySelector('[data-js="change-location"]');
const cityName = document.querySelector('[data-js="city-name"]');
const cityWeather = document.querySelector('[data-js="city-weather"]');
const cityTemperature = document.querySelector('[data-js="city-temperature"]');
const cityCardContainer = document.querySelector('[data-js="city-card"]');
const timeImg = document.querySelector('[data-js="time"]');
const timeIconContainer = document.querySelector('[data-js="time-icon"]');

cityForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  cityCardContainer.style.display = "flex";
  const cityInput = event.target.city.value;
  const [{ Key, LocalizedName }] = await getCityData(cityInput);
  const [{ Temperature: { Metric }, WeatherText, IsDayTime, WeatherIcon }] = await getCityWeather(Key);
  const { Value } = Metric;
  const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg" />`;

  IsDayTime ? timeImg.src = './src/day.svg' : timeImg.src = './src/night.svg'
  // if (IsDayTime) {
  //   timeImg.src = './src/day.svg';
  // } else {
  //   timeImg.src = './src/night.svg';
  // }

  timeIconContainer.innerHTML = timeIcon;
  cityName.textContent = LocalizedName;
  cityWeather.textContent = WeatherText;
  cityTemperature.textContent = Value;

  cityForm.reset();
});