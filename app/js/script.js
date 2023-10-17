const apiKey = "a76c7a5c03e39efa2b392e82dcf60b3a";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}`;

const input_value = document.querySelector('.input_value');
const btn = document.querySelector('.btn');
const weather_icon = document.querySelector('.weather-icon');

const getWeather = async (city) => {
  const response = await fetch(`${apiUrl}&q=${city}`);

  if (response.status == 404) {
    document.querySelector('.error').style.display = "block";
    document.querySelector('.weather').style.display = "none";
  }
  else {
    let data = await response.json();
    document.querySelector('.city_name').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + ` km/h`;
    document.querySelector('.weather').style.display = "block";
    document.querySelector('.error').style.display = "none";

    if (data.weather[0].main == "Clouds") {
      weather_icon.src = "images/clouds.png"
    }
    else if (data.weather[0].main == "Clear") {
      weather_icon.src = "images/clear.png"
    }
    else if (data.weather[0].main == "Drizzle") {
      weather_icon.src = "images/drizzle.png"
    }
    else if (data.weather[0].main == "Mist") {
      weather_icon.src = "images/mist.png"
    }
    else if (data.weather[0].main == "Rain") {
      weather_icon.src = "images/rain.png"
    }
    else if (data.weather[0].main == "Snow") {
      weather_icon.src = "images/snow.png"
    }
  }

};

btn.addEventListener('click', () => {
  getWeather(input_value.value);
});

