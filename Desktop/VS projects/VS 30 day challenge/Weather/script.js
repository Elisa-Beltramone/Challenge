const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector("weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city );

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon = "images/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon = "images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

checkWeather();