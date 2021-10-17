export default function fetchWeather(props) {
  return props;
}


// https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${weather_api_key}
// https://api.openweathermap.org/data/2.5/weather?q=${response[0].name}&appid=${weather_api_key}
// ttps://api.openweathermap.org/data/2.5/weather?q=${response.location.city}&appid=${weather_api_key}
// https://api.ipregistry.co/?key=${ip_locator_key}