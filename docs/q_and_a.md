# Simulated Live Q&A — Judges' Likely Questions and Suggested Answers

Q1: How reliable is FloodAI's data?
- A: FloodAI shows the source and timestamp for every claim. Our confidence label explains whether data is live or mock; for production we integrate Ghana MET and NADMO feeds and run automated validity checks.

Q2: How do you avoid false alarms?
- A: We combine multiple sources (river gauges + meteorology + rainfall) and use thresholds with hysteresis. Alerts require at least two corroborating signals or human-in-the-loop confirmation for high-impact orders.

Q3: Can this run offline during network outages?
- A: Yes — the agent can operate in degraded mode using recent cached sensor readings and local rules, and will label all outputs as "estimated/mock" until live connectivity is restored.

Q4: How do you protect privacy and prevent misuse?
- A: FloodAI only uses aggregated, location-specific operational data; access controls and audit logs are enforced at the deployment layer (tenant/roles). Sensitive PII is never ingested.

Q5: How quickly can this be deployed to other cities?
- A: The agent is declarative — replace the `flood_zones.json` dataset and point the API plugins to local endpoints. Typical porting time: hours to days depending on sensor availability.

Q6: What are the failure modes and mitigations?
- A: Failures: missing live data, API errors, false positives. Mitigations: mock fallback, confidence labels, human-in-the-loop escalation, and redundant alert channels.

Q7: How will you validate accuracy in the field?
- A: Use the `evals/prompts.json` set for structured evaluation and run `@microsoft/m365-copilot-eval` for automated scoring; follow with small-scale field trials with NADMO.

Q8: How is this different from existing alert systems?
- A: FloodAI ties operational actions directly to data with citation and urgency-aware instructions, focusing on human-centred evacuation and resource prioritization rather than only broadcasting warnings.
