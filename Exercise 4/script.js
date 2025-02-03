
// Replace with your WeatherAPI key
const apiKey = 'a9ed535a5723e33ce479e44a10f340ec';
// Change this to the city you want to search
const city = 'Davao';

const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    const url =`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
    fetch(url)
    .then(response => response.json())

    .then(data => {
        console.log(data);
        document.getElementById("weather_city").textContent =
        data.location.name || 'N/A';
        document.getElementById("weather_temperature").textContent =
        `${data.current.temp_c}°C` || 'N/A';
        document.getElementById("weather_condition").textContent =
        data.current.condition.text || 'N/A';
    });
});