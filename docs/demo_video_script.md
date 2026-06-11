# FloodAI Demo Video Script

## Purpose
This document provides a ready-to-record demo video script and storyboard for FloodAI. It is intended to make the project submission complete by giving judges a polished walkthrough of the agent, its capabilities, and the emergency response value.

## Video Overview
- Length: 90–120 seconds
- Format: narration + screen capture
- Content: problem, solution, live demo, architecture, credibility, ask

## Scene 1 — Opening (0:00–0:12)
- On screen: FloodAI title slide or project logo
- Narration: "This is FloodAI, a Ghana flood intelligence agent built on Microsoft 365 Copilot. It combines weather, river-level, and risk-zone data to give officials fast, actionable response guidance."
- Visual: show `README.md` overview or `appPackage/declarativeAgent.json` title

## Scene 2 — Problem Statement (0:12–0:26)
- On screen: map of Accra flood zones or list of risk factors
- Narration: "Accra faces rapid urban flooding from river overflow and poor drainage, and decision-makers need trusted, auditable guidance during a crisis. FloodAI closes that gap with source-cited recommendations."
- Visual: highlight `docs/references.md` or `docs/q_and_a.md`

## Scene 3 — Solution Summary (0:26–0:40)
- On screen: FloodAI core capabilities list
- Narration: "FloodAI identifies high-risk zones, alerts NADMO and AMA, recommends evacuations, and tracks relief needs — all with data provenance and safety-first instructions."
- Visual: show `appPackage/instruction.txt` requirements for citations and timestamps

## Scene 4 — Demo Walkthrough (0:40–1:05)
- On screen: VS Code window with `scripts/run_demo.js` and terminal output
- Narration: "Here is the local demo. It executes sample flood prompts, uses mock data when live APIs are unavailable, and clearly labels each source with a timestamp and confidence level."
- Visual: run `node scripts/run_demo.js` and show output from prompt 1 and prompt 3; highlight `Ghana MET (mock)` and `OpenWeather (mock)` plus `Confidence: Moderate (mock data)`

## Scene 5 — Technical Architecture (1:05–1:20)
- On screen: architecture diagram or bullet list
- Narration: "FloodAI is built as a declarative Copilot agent with API plugin stubs for OpenWeatherMap and Ghana MET, plus mock fallback data. This makes it easy to deploy now and integrate live sensors later."
- Visual: show `scripts/api/openweather.js`, `scripts/api/ghanamet.js`, and `scripts/mockData`

## Scene 6 — Credibility & Submission Strength (1:20–1:35)
- On screen: citations and judge-ready references
- Narration: "Every claim is grounded in public data sources and emergency response best practices, with a full reference set included for judges. The project is ready to submit with a demo package and documentation."
- Visual: show `docs/references.md` and `README.md`

## Scene 7 — Closing (1:35–1:45)
- On screen: call-to-action slide
- Narration: "FloodAI is ready for the Innovation Studio Hackathon: a practical, credible solution for Ghana flood response with clear auditability and real-world impact."
- Visual: show final shot of `FloodAI-Hackathon-Submission.zip` and project name

## Recording Instructions
1. Use a screen recorder such as OBS, Loom, or PowerPoint screen capture.
2. Record in a quiet room with clear voice narration.
3. Capture the terminal running `scripts/run_demo.js` and the key files: `README.md`, `appPackage/instruction.txt`, `scripts/run_demo.js`, `docs/references.md`.
4. Keep the runtime demo short: show 1 or 2 prompt outputs, not all 4.
5. Export the video at 720p or 1080p.

## Key Judging Points to Mention
- Real-time flood intelligence with data source attribution
- Safe, actionable response guidance for NADMO and AMA
- Mock fallback makes the demo reproducible without live API keys
- Clear submission package and evaluation prompts included
