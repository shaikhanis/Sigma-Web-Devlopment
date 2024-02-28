const apiKey = "027604a43de2983b6e67897710d0093b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=matric&q=";
//https://api.openweathermap.org/data/2.5/weather?q=germany&appid=027604a43de2983b6e67897710d0093b
//https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const responce = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (responce.status == 404) {
        document.querySelector(".errore").style.display = "block"
        document.querySelector(".weather").style.display = "none"

    } else {

        var deta = await responce.json();

        document.querySelector(".city").innerHTML = deta.name;
        document.querySelector(".temp").innerHTML = Math.round(deta.main.temp/10) + " °C";
        document.querySelector(".humidity").innerHTML = deta.main.humidity + "%";
        document.querySelector(".wind").innerHTML = deta.wind.speed + " kh/h";

        if (deta.weather[0].main == "Clouds") {
            weatherIcon.src = "assets/images/Clouds.png"
        }
        else if (deta.weather[0].main == "Clear") {
            weatherIcon.src = "assets/images/clear.png"

        }
        else if (deta.weather[0].main == "Rain") {
            weatherIcon.src = "assets/images/rain.png"

        }
        else if (deta.weather[0].main == "Drizzale") {
            weatherIcon.src = "assets/images/drizzal.png"

        }
        else if (deta.weather[0].main == "Mist") {
            weatherIcon.src = "assets/images/mist.png"
        }

        document.querySelector(".weather").style.display = "block"
        document.querySelector(".errore").style.display = "none"
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

checkWeather();
