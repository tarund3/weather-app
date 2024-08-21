async function getWeather() {
    const location = document.getElementById('location').value;
    const apiKey = '6c348726d85840b68e5b234c1cc45cca'; 
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    
    if (data.cod === 200) {
        const celsius = data.main.temp;
        const fahrenheit = (celsius * 9/5) + 32;

        document.getElementById('weather-result').innerHTML = `
            <p>Temperature: ${celsius.toFixed(1)} °C / ${fahrenheit.toFixed(1)} °F</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    } else {
        document.getElementById('weather-result').innerHTML = '<p>City not found. Please try again.</p>';
    }
}

