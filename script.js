document.getElementById('get-weather-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value.trim();
    const apiKey = 'YOUR_API_KEY';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    if (city) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    const weather = `
                        <h2>${data.name}</h2>
                        <p>Temperature: ${data.main.temp}°C</p>
                        <p>Weather: ${data.weather[0].description}</p>
                    `;
                    document.getElementById('weather-result').innerHTML = weather;
                } else {
                    document.getElementById('weather-result').innerHTML = '<p>City not found!</p>';
                }
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                document.getElementById('weather-result').innerHTML = '<p>Failed to retrieve weather data!</p>';
            });
    } else {
        document.getElementById('weather-result').innerHTML = '<p>Please enter a city name!</p>';
    }
});
