// OpenWeatherMap plugin with live fetch when `OPENWEATHER_API_KEY` is configured.
const path = require('path');
const fs = require('fs');

async function getCurrentWeather(location) {
  const key = process.env.OPENWEATHER_API_KEY;
  const timestamp = new Date().toISOString();
  if (!key) {
    const mockPath = path.join(__dirname, '..', 'mockData', 'openweather_mock.json');
    const data = JSON.parse(fs.readFileSync(mockPath, 'utf8'));
    return { source: 'mock', timestamp, location, data };
  }

  try {
    const city = encodeURIComponent(location.split(',')[0].trim());
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    const resp = await fetch(url);
    if (!resp.ok) {
      const text = await resp.text();
      return { source: 'error', timestamp, location, status: resp.status, body: text };
    }
    const data = await resp.json();
    return { source: 'openweather', timestamp, location, data };
  } catch (err) {
    return { source: 'error', timestamp, location, error: String(err) };
  }
}

module.exports = { getCurrentWeather };
