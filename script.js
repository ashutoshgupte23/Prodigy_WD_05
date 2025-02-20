// script.js

const apiKey = 'your_api_key_here'; // Replace with your actual API key
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('get-weather-btn').addEventListener('click', async () => {
    const location = document.getElementById('location-input').value;
    if (!location) {
        alert('Please enter a location');
        return;
    }

    try {
        const response = await fetch(`${apiUrl}?q=${location}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error('Location not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
});

function displayWeather(data) {
    const cityName = data.name;
    const temperature = data.main.temp;
    const conditions = data.weather[0].description;

    document.getElementById('city-name').innerText = `Weather in ${cityName}`;
    document.getElementById('temperature').innerText = `${temperature}°C`;
    document.getElementById('conditions').innerText = capitalizeFirstLetter(conditions);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
