const fs = require('fs');
const path = require('path');
const openweather = require('./api/openweather');
const ghanamet = require('./api/ghanamet');

function readJSON(relPath) {
  return JSON.parse(fs.readFileSync(path.join(__dirname, '..', relPath), 'utf8'));
}

async function handlePrompt(prompt) {
  const location = 'Accra, Ghana';
  const weather = await openweather.getCurrentWeather(location);
  const met = await ghanamet.getRiverAndRainfall(location);
  const zones = readJSON('scripts/mockData/flood_zones.json');

  const timestamp = (weather.timestamp || met.timestamp) || new Date().toISOString();

  const response = {
    prompt: prompt.text,
    summary: `${zones[0].zone} at ${zones[0].risk} risk (mock). Immediate attention recommended.`,
    observations: [
      { source: weather.source === 'mock' ? 'OpenWeather (mock)' : 'OpenWeather', data: weather.data || weather.note, timestamp: weather.timestamp },
      { source: met.source === 'mock' ? 'Ghana MET (mock)' : 'Ghana MET', data: met.data || met.note, timestamp: met.timestamp }
    ],
    recommended_actions: [
      'Issue flash alerts to NADMO and Accra Metropolitan Assembly for Odaw River basin.',
      'Advise evacuations in low-lying areas and open emergency shelters.',
      'Deploy rescue teams to Odaw River basin first.'
    ],
    confidence: weather.source === 'mock' || met.source === 'mock' ? 'Moderate (mock data)' : 'High (live data)'
  };

  return response;
}

async function main() {
  const prompts = readJSON('evals/prompts.json');
  for (const p of prompts) {
    console.log('\n=== Prompt: ' + p.id + ' ===');
    const res = await handlePrompt(p);
    console.log('Prompt:', res.prompt);
    console.log('\nSummary:\n', res.summary);
    console.log('\nObservations:');
    for (const o of res.observations) {
      console.log('-', o.source, JSON.stringify(o.data), 'timestamp:', o.timestamp);
    }
    console.log('\nRecommended actions:');
    res.recommended_actions.forEach((a, i) => console.log(`${i+1}. ${a}`));
    console.log('\nConfidence:', res.confidence);
  }
}

main().catch(err => { console.error(err); process.exit(1); });
