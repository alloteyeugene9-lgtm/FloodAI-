# API Setup for FloodAI

This guide explains how to connect FloodAI to external data providers. You can test the agent without real keys using the built-in mock data.

1. OpenWeatherMap
   - Sign up: https://openweathermap.org/api
   - Get API key and set in `env/.env.local` as `OPENWEATHER_API_KEY=your_key_here`

   - To run the demo with live OpenWeather data, set the key and run:

```bash
# set key in env/.env.local (Windows PowerShell example)
Add-Content -Path env\.env.local -Value "OPENWEATHER_API_KEY=your_key_here"

# then run the demo
node scripts/run_demo.js
```

2. Ghana Meteorological Agency
   - If the Ghana MET provides an API for your project, obtain credentials and set the following in `env/.env.local`:

```
GHANA_MET_API_URL=https://api.ghanamet.example/river_levels
GHANA_MET_API_KEY=your_key_here
```

   - The plugin expects a simple GET endpoint that accepts `location` and `apikey` query parameters and returns JSON with `river_levels`, `rainfall_mm_last_24h`, and optional `warnings`.

3. Local testing (no keys)
   - The repository includes mock data under `scripts/mockData/` used by stubs in `scripts/api/`.
   - When no API key is present, the agent will use mock data and clearly label responses as "mock".

4. Notes for production
   - Do NOT commit real API keys to version control. Store keys in `env/.env.local` or in your secret manager.
   - Implement real HTTP calls in `scripts/api/openweather.js` and `scripts/api/ghanamet.js` when ready.
