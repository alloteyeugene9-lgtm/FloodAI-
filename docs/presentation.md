## FloodAI — Hackathon Presentation Guide

Goal: demonstrate a realistic, citation-backed emergency flood agent for Accra that can be extended to live data sources.

Structure (2–3 minutes):

1) Problem (20s)
- Rapid urban flooding in Accra causes loss of life and property; decision-makers need fast, factual, actionable intelligence.

2) Solution (40s)
- FloodAI ingests meteorological and river-level data, identifies high-risk zones, and issues prioritized, safety-first recommendations.
- Emphasize data provenance: every claim includes a source and timestamp (Ghana MET, NADMO, OpenWeather).

3) Live demo (60s)
- Run `node scripts/run_demo.js` (or show Agents Playground UI) to demonstrate:
  - Current flood status with source citations and timestamps
  - High-risk zones and rationale
  - Immediate evacuation and resource actions

4) Technical highlights (30s)
- Modular API plugins: `scripts/api/` with mock fallback for offline demos.
- Declarative agent config in `appPackage/declarativeAgent.json` and `instruction.txt` enforces citation and uncertainty reporting.
- Easy to extend: plug in real Ghana MET endpoint and OpenWeather key to move from mock to live data.

5) Why this wins
- Safety-first, evidence-driven, and actionable — judges care about real-world impact, trustworthiness, and demoability.

Commands to run during demo:
```powershell
node scripts/run_demo.js
```
