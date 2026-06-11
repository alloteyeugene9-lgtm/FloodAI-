# Demo: Run FloodAI locally (mock data)

This demo runs a local simulation of FloodAI using mock data so you can produce citation-backed responses for your hackathon demo.

Prerequisites: Node.js (18+)

Run the demo:

```bash
node scripts/run_demo.js
```

What the demo shows:
- Example prompts from `evals/prompts.json` are executed.
- Observations include data source labels (e.g., `Ghana MET (mock)`), JSON snippets, and timestamps.
- Recommended actions are produced and a confidence label explains whether the response used mock or live data.

Use `docs/demo_video_script.md` to record a concise 90–120 second video walkthrough for your hackathon submission.

Judging highlights to emphasize in your presentation:
- Data provenance: each claim is tied to a source and timestamp.
- Operational focus: immediate, actionable recommendations prioritized by risk.
- Safety-first design: instructions and evacuation guidance prioritize lives first.
- Extensible: stubs in `scripts/api/` make it easy to plug real APIs for live demos.
