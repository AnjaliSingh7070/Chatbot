async function getWeather() {
    const location = document.getElementById("location").value;

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=YOUR_API_KEY`);
    const data = await response.json();

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <h2>${data.name}</h2>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;
}
