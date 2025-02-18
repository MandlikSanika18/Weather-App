const apiKey = "86b0aa32a9773f88ee9b304ff916bdd4"

const searchBox=document.querySelector(".search-input");
const searchBtn=document.querySelector("#icon");
const WeatherIcon=document.querySelector(".weather-icon")

async function weatherData(cityname){
    const response= await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}&units=metric`);

    if(response.status == 404 || searchBox.value == ""){
        document.querySelector(".container").style.height="120px";
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        const data = await response.json()
        console.log(data);

    document.querySelector(".container").style.height="500px";
    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C ";
    document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
    document.querySelector(".wind").innerHTML= data.wind.speed + "km/h";

        if(data.weather[0].main == "Clouds"){
            WeatherIcon.src="images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            WeatherIcon.src="images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            WeatherIcon.src="images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            WeatherIcon.src="images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            WeatherIcon.src="images/mist.png";
        }
        document.querySelector(".error").style.display="none";
        document.querySelector(".weather").style.display="block";
    }
    }

    

searchBtn.addEventListener("click", () => {
    weatherData(searchBox.value);
});


