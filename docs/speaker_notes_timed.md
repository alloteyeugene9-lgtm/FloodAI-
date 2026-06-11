Speaker Notes — FloodAI (Exact second ticks)

0:00 — Hello — I’m [Your Name].
0:01 — This is FloodAI.
0:02 — Real‑time flood intelligence for Accra.
0:03 — Fast, sourced, actionable.
0:04 — I’ll run a short demo snapshot next.
0:05 — Problem: urban flooding is sudden.
0:06 — Blocked drains and rapid runoff make it worse.
0:07 — Roads, clinics, and shelters can lose access.
0:08 — Communities often get little warning.
0:09 — Decision-makers need clear, trustworthy data.
0:10 — Delays cost lives and property.
0:11 — FloodAI addresses that gap directly.
0:12 — It focuses on operations, not just alerts.
0:13 — It ties data to prioritized actions.
0:14 — What FloodAI does in short:
0:15 — Ingests meteorological and river gauges.
0:16 — Identifies high‑risk zones automatically.
0:17 — Produces prioritized, safety‑first instructions.
0:18 — Every claim includes source and timestamp.
0:19 — So decisions are auditable and traceable.
0:20 — Now the demo snapshot: a sample output.
0:21 — (Read aloud while showing demo) Example output:
0:22 — “Odaw River basin — CRITICAL.”
0:23 — Source: Ghana MET, timestamp 2026‑06‑11T00:00Z.
0:24 — Recommended action: immediate targeted evacuation.
0:25 — Open nearby shelters and preposition supplies.
0:26 — Deploy rescue teams to the Odaw access points.
0:27 — Stage additional teams at Korle Lagoon and Abossey Okai.
0:28 — Short mitigation: clear main outfalls and pumps.
0:29 — Confidence: labeled as live or mock with rationale.
0:30 — Pause briefly so judges can read the full output.
0:31 — (Pause) — allow 3–4 seconds for reading.
0:32 — (Pause) — continue narration.
0:33 — Technical architecture — high level now.
0:34 — Declarative agent config defines behavior.
0:35 — Modular API plugins pull live feeds or mock data.
0:36 — `scripts/api/` contains adapters for each source.
0:37 — `instruction.txt` enforces citations and uncertainty.
0:38 — `evals/prompts.json` provides reproducible tests.
0:39 — This makes the system extensible and auditable.
0:40 — Live demo readiness: swap mock for live APIs.
0:41 — Add `OPENWEATHER_API_KEY` and Ghana MET endpoint.
0:42 — The agent will then present live, cited observations.
0:43 — For offline or degraded networks, mock fallback works.
0:44 — We label all fallback outputs as “mock/estimated.”
0:45 — Why this matters: trust and actionability.
0:46 — Judges want impact, feasibility, and trust.
0:47 — FloodAI delivers all three in a compact workflow.
0:48 — Impact example: faster targeted evacuations.
0:49 — Safety example: confidence labels avoid false alarms.
0:50 — Scalability: port to other cities by swapping datasets.
0:51 — Deployment: plug into NADMO or municipal dashboards.
0:52 — Data provenance enables after‑action review.
0:53 — Now, short operational examples you can ask for.
0:54 — Example 1: “Show high‑risk zones and why.”
0:55 — Example 2: “Recommend evacuation for Odaw River.”
0:56 — Example 3: “List immediate relief resources for Alajo.”
0:57 — The agent returns sources, timestamps, and actions.
0:58 — It also states its confidence level clearly.
0:59 — Quick note on safety: human‑in‑the‑loop escalation.
1:00 — High‑impact orders can require confirmation.
1:01 — Alerts that affect lives trigger double checks.
1:02 — We avoid automated mass evacuations without review.
1:03 — Now — the ask and next steps.
1:04 — We’re seeking integration with Ghana MET and NADMO.
1:05 — Field testing with real sensor feeds and responders.
1:06 — That will move mock outputs to live operational feeds.
1:07 — For the hackathon, we’ve prepared demo artifacts.
1:08 — `scripts/run_demo.js` simulates outputs with mock data.
1:09 — `docs/demo.md` explains how to run and test.
1:10 — `docs/presentation.md` and slides are ready for judges.
1:11 — Key takeaway: data + provenance = trustworthy action.
1:12 — FloodAI prioritizes life, clarity, and speed.
1:13 — Closing: we turn data into life‑saving orders.
1:14 — I’ll finish with a direct invitation to collaborate.
1:15 — Ask: help integrate live Ghana MET and field‑test.
1:16 — We can set up a small pilot with NADMO within days.
1:17 — We’ll validate with `evals/prompts.json` and field checks.
1:18 — Final slide: thank you and demo offer.
1:19 — Thank you — I’d like to take one or two questions.
1:20 — (If a judge asks a quick question, answer briefly.)
1:21 — Possible quick Q: “How do you avoid false alarms?”
1:22 — Answer: multi‑signal corroboration + confidence labels.
1:23 — Possible quick Q: “Can it work offline?”
1:24 — Answer: yes — cached sensor data + mock mode labeled.
1:25 — Possible quick Q: “How quickly to port to another city?”
1:26 — Answer: hours to days — swap flood zones dataset + endpoints.
1:27 — Reiterate: every operational claim has source+timestamp.
1:28 — Judges care about trust: we give them evidence.
1:29 — Offer to show the run_demo output live if time permits.
1:30 — If yes: run `node scripts/run_demo.js` and narrate results.
1:31 — If time allows, demonstrate one sample prompt.
1:32 — Example prompt to run: prompt_001 — current situation.
1:33 — Narrate the sample line and cite source again.
1:34 — Pause briefly to let judges read the output (2–3s).
1:35 — Resume: summarize the recommended immediate action.
1:36 — Reassure judges about safety checks and human oversight.
1:37 — Reiterate the ask: integration and field testing.
1:38 — Close: “Thank you — we’re ready to deploy a pilot.”
1:39 — Invite contact or next steps after demo.
1:40 — Optional: offer to walk through code or API mapping.
1:41 — If asked about technical stack: mention Node + declarative agent.
1:42 — If asked about data sources: mention Ghana MET, NADMO, OpenWeather.
1:43 — If asked about validation: mention `@microsoft/m365-copilot-eval`.
1:44 — If asked about ethics/privacy: mention no PII ingestion and audits.
1:45 — If asked about scale: mention modular plugins and porting ease.
1:46 — If asked about UX: show conversation starters in `declarativeAgent.json`.
1:47 — If asked about next steps: outline pilot timeline (days→weeks).
1:48 — If they request a live API demo later, collect endpoint and key.
1:49 — Offer to provide a short technical handoff doc after demo.
1:50 — Reiterate you can run the demo locally for judges afterward.
1:51 — Final reminder: FloodAI links evidence to action.
1:52 — End with a concise one‑line summary: “Data, provenance, action.”
1:53 — Thank the judges again for their time.
1:54 — Offer to answer any remaining questions.
1:55 — If no more questions, invite follow-up contact info exchange.
1:56 — Close with: “We’d love to pilot this with NADMO.”
1:57 — Smile, stay ready for Q&A, and hand off to team if present.
1:58 — Final closing line: “Thank you — FloodAI.”
1:59 — End of 2:00 slot — await judges’ reactions.
2:00 — (Optional) Extra second: repeat contact invitation if needed.
