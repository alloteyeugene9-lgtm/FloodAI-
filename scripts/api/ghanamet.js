// Ghana Meteorological Agency plugin with live fetch when `GHANA_MET_API_URL` and `GHANA_MET_API_KEY` are configured.
const path = require('path');
const fs = require('fs');

async function getRiverAndRainfall(location) {
  const key = process.env.GHANA_MET_API_KEY;
  const apiUrl = process.env.GHANA_MET_API_URL; // e.g. https://api.ghanamet.gov/river_levels
  const timestamp = new Date().toISOString();

  if (!apiUrl || !key) {
    const mockPath = path.join(__dirname, '..', 'mockData', 'ghanamet_mock.json');
    const data = JSON.parse(fs.readFileSync(mockPath, 'utf8'));
    return { source: 'mock', timestamp, location, data };
  }

  try {
    const city = encodeURIComponent(location.split(',')[0].trim());
    const url = `${apiUrl}?location=${city}&apikey=${encodeURIComponent(key)}`;
    const resp = await fetch(url);
    if (!resp.ok) {
      const text = await resp.text();
      return { source: 'error', timestamp, location, status: resp.status, body: text };
    }
    const data = await resp.json();
    return { source: 'ghanamet', timestamp, location, data };
  } catch (err) {
    return { source: 'error', timestamp, location, error: String(err) };
  }
}

module.exports = { getRiverAndRainfall };
