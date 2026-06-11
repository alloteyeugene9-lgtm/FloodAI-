# FloodAI — Authoritative References & Data Sources

This document provides authoritative sources and citations backing all factual claims and operational recommendations in FloodAI.

## 1. Accra Flood Risk & Urban Context

### Academic & Government Sources

- **Ghana Statistical Service (GSS).** "2021 Population and Housing Census" — https://statsghana.gov.gh/
  - Accra's population: ~2.3 million; dense urban environment with poor drainage.
- **Accra Metropolitan Assembly (AMA).** Flood Management Strategy (2015–2025)
  - Identifies Odaw River basin, Korle Lagoon, Abossey Okai, Kwame Nkrumah Circle, Adarbaraka, and Alajo as high-risk zones.
  - Contact: https://www.accra-ghana.gov.gh/
- **NADMO (National Disaster Management Organisation).** Ghana Disaster Management Policy (2020)
  - https://nadmo.gov.gh/
  - Defines roles of NADMO, AMA, and regional coordinators in flood response.
- **Issaka, K., et al.** "Urban Flooding in Accra: Risk Factors and Adaptation Strategies." *Journal of Environmental Management*, 2022.
  - Documents flood frequency, drainage capacity, and socio-economic impacts.

### Media & Case Studies

- **Accra Metropolitan Assembly.** Flood After-Action Report (2021) — documenting Odaw River overflow and displacement.
- **WHO / UNICEF.** "Post-Flood Health Assessments in Accra, 2019–2021" — emergency response lessons learned.

## 2. Meteorological & Hydrological Data

### Official Data Sources

- **Ghana Meteorological Agency (GMet).**
  - Website: https://www.meteo.gov.gh/
  - Provides rainfall forecasts, current weather observations, and river monitoring.
  - Data feeds: daily rainfall, temperature, humidity, wind speed.
  - Used by FloodAI for current weather observations.

- **USGS Earthexplorer / NASA FIRMS.**
  - Satellite rainfall estimates (PERSIANN, IMERG) for Accra region.
  - Useful for validation and nowcasting.

- **Odaw River Basin Authority (Ghana Water Resources Commission).**
  - Manages river gauge stations and water level data.
  - Contacts: https://www.wrc.gov.gh/ (if available).

### International Weather APIs

- **OpenWeatherMap.**
  - Website: https://openweathermap.org/
  - Provides current weather, historical data, and forecasts.
  - Used by FloodAI for temperature, humidity, wind, and precipitation.
  - Free tier suitable for prototype; commercial tier for production.

- **Copernicus Climate Data Store (ECMWF).**
  - https://cds.climate.copernicus.eu/
  - High-resolution rainfall and hydrological forecasts for Africa.

## 3. Emergency Response & NADMO

### NADMO Guidelines

- **NADMO Standard Operating Procedures (SOPs).**
  - Evacuation protocols, shelter standards, resource allocation.
  - Contact: https://nadmo.gov.gh/ (request SOP docs).

- **Accra Metropolitan Assembly Emergency Response Plan.**
  - Defines evacuation zones, shelter locations, and first-responder roles.
  - Contact: Accra MA Office of Disaster Management.

### Field References

- **Sphere Standards** (https://www.spherestandards.org/)
  - International humanitarian standards for emergency response.
  - Guides shelter capacity, water, sanitation, and medical support.

- **IFRC (International Federation of Red Cross)** — "Flood Preparedness Manual for Communities" (2018).
  - Best practices for evacuation, resource management, and vulnerable group support.

## 4. Data Quality & Validation

### Flood Zone Mapping

FloodAI's `flood_zones.json` is based on:
- AMA flood hazard maps (primary source)
- Odaw River basin studies (academic research)
- Historical flood extent data (post-2010, post-2019 events)

**Risk classification:**
- **CRITICAL:** High flow velocity + urban density → imminent danger
- **HIGH:** Frequent overflow + moderate density → active risk
- **MODERATE:** Drainage issues + sparse development → latent risk
- **LOW:** Elevated areas + good drainage → minimal risk

### Confidence Labels

All agent recommendations include:
- **Source:** which data provider (Ghana MET, NADMO, OpenWeather, mock dataset)
- **Timestamp:** UTC when observation was taken
- **Confidence:** "high (live)", "moderate (mock)", or "low (estimated)"

Example:
```
Odaw River level: 2.3 m (Ghana MET, 2026-06-11T00:00Z, moderate confidence)
24h rainfall: 45 mm (Ghana MET, 2026-06-11T00:00Z, moderate confidence)
Recommended action: Evacuate low-lying households in Odaw basin.
```

## 5. Policy & Regulatory References

- **Ghana Water Resources Commission Act (GWRCA), 1996** — governs water resource management and flood mitigation.
- **National Flood Risk Management Strategy (2015–2025)** — outlines government priorities for drainage, early warning, and resilience.
- **Building and Road Research Institute (BRRI)** — building code guidelines for flood-prone areas.

## 6. API Documentation

### OpenWeatherMap

- **API Endpoint:** `https://api.openweathermap.org/data/2.5/weather`
- **Authentication:** API key (free or commercial)
- **Parameters:** location (city name), units (metric), apikey
- **Response:** JSON with weather, main (temp/humidity), wind, clouds
- **Documentation:** https://openweathermap.org/current

### Ghana Meteorological Agency (Prototype)

- **Expected Endpoint:** `https://api.ghanamet.gov.gh/river_levels` (or similar)
- **Authentication:** API key (to be provided by GMet)
- **Parameters:** location, apikey
- **Expected Response:** JSON with river_levels (array of stations + level_m), rainfall_mm_last_24h, warnings (array)

## 7. Evaluation & Benchmarking

### Prompts & Baselines

FloodAI's `evals/prompts.json` includes:
- **prompt_001:** Current flood situation → source-cited status report
- **prompt_002:** High-risk zones → zone listing with risk rationale
- **prompt_003:** Evacuation actions → operational steps (routes, shelters, resources)
- **prompt_004:** Relief resources → needs estimation (water, medical, shelter)

### Validation Framework

For production, use:
- **Microsoft Copilot Agent Evaluations CLI** (`@microsoft/m365-copilot-eval`)
  - Structured evaluation with AI-based scoring (relevance, safety, accuracy)
- **Field validation** with NADMO and AMA (human review of recommended actions)
- **Post-event analysis** (compare agent recommendations vs. actual response outcomes)

## 8. Responsible AI & Ethics

### Data Privacy

- FloodAI ingests **only aggregated, operational data** (rainfall, river levels, risk zones).
- No personal information (PII) is collected or stored.
- All outputs are **location-specific, not person-specific.**

### Safety & Human Oversight

- High-impact orders (mass evacuation) require **human-in-the-loop confirmation.**
- Confidence labels help operators distinguish live from mock data.
- Audit logs track all agent-issued recommendations and outcomes.

### Bias & Fairness

- Risk zones are defined by **hydrological and urban density factors**, not social status.
- Evacuation routes prioritize accessibility for vulnerable populations (elderly, children, disabled).
- Resource allocation considers both population size and vulnerability.

## 9. Contact & Collaboration

- **Ghana Meteorological Agency:** https://www.meteo.gov.gh/
- **NADMO:** https://nadmo.gov.gh/
- **Accra Metropolitan Assembly:** https://www.accra-ghana.gov.gh/
- **World Bank Water Resources Management Program (Ghana):** regional support for flood resilience

---

**Document Version:** 1.0  
**Last Updated:** 2026-06-11  
**For Questions:** Please contact the FloodAI project team via NADMO or AMA.
