# Sync stage MCs

Useful resources for the sync stage moderators (MC) Aya and Konsti.

What an MC does for speakers:
- **Greets you backstage**, about 10 minutes before your session. They check how to say your name, your title and their intro line. *They are also there to calm the nerves.*
- **Introduces you** in about 30 seconds: your name, company, the title of your talk and one reason to listen.
- **Watches the clock** during your session. *When your time is up, they walk on, so the next speaker gets their full slot.*
- **Closes your session**: thanks you and tells the room where to go next.
- **Asks if you're heading to the Community Lounge afterwards** (the Solution Zone for the Builders Stage). *If you say yes, they announce it, so people with questions know where to find you.*

See also [this notion page](https://app.notion.com/p/n8n/MC-cue-card-all-stages-both-days-3dd5b6e0c94f81a2bb31e8fa9c6c7767) for cue cards.
And [this private page](https://app.notion.com/p/n8n/MCs-for-Sync-stage-3f05b6e0c94f80fa998adc36170a1c25) for just the sync stage MCs.

## Who does what on every stage (from the 5 October Run of Show call)

- **Stage manager** (C2): runs the stage and the countdown, mics up the speakers. The first person a speaker talks to. When in doubt, ask them.
- **Wrangler** (C2): brings each speaker from the speaker lounge to the stage manager, and chases late speakers. Not your job.
- **Tech crew** (C2): slides, sound, screen and lights. Several people per stage.
- **MCs**: greet the speaker backstage, host, and move the room along.

## Who moderates which session:

- Aya: [Scaling n8n Inside Regulated Enterprises: 1M Executions, 3,000 Hours Back, Zero Engineering Bottleneck](./talks/1120-scaling-n8n-inside-regulated-enterprises-1m-executions-3-000-hours-back-zero-engineering-bottleneck.md) (talk)
- Konsti: [Building n8n's AI SDR](./talks/1200-building-n8n-s-ai-sdr.md) (talk)
- Aya: [Highly GDPR Restricted Environments: Inside a German City Administration](./talks/1310-highly-gdpr-restricted-environments-inside-a-german-city-administration.md) (talk)
- Konsti: [A Journey of a Thousand Custom Nodes](./talks/1350-a-journey-of-a-thousand-custom-nodes.md) (talk)
- Konsti: [How to Build Guardrails That Unlock Automation Freedom at Scale](./talks/1440-how-to-build-guardrails-that-unlock-automation-freedom-at-scale.md) (fireside chat)
- Aya: [Choosing the Right Workflows to Maximize ROI](./talks/1520-choosing-the-right-workflows-to-maximize-roi.md) (talk)
- Aya: [Building a Self-Healing Research Agent in n8n](./talks/1600-building-a-self-healing-research-agent-in-n8n.md) (talk)
- Konsti: [Agents Need Hands: A Personal Second Brain With n8n as Its Deterministic Kernel](./talks/1650-agents-need-hands-a-personal-second-brain-with-n8n-as-its-deterministic-kernel.md) (talk)

## Stage MC Assistant (app)

A small web app with the day's Sync Stage sessions and a silent reminder at every cue: greet backstage (T-10), call the room (T-2), open, two minutes left, time's up. Each reminder starts with the session's time and title, then says who hosts and what to do. Every session card opens the full abstract and speaker bios, rendered from the files in [talks/](./talks/). Code is in [app/](./app/).

**Open it:** https://konstantintieber.github.io/mc-sync-stage/

**Install on Android (Chrome):** open the link, menu ⋮ → *Add to Home screen* / *Install app*. Open it from the home screen, pick your name, tap **Start the day** and allow notifications. Tap **Test** to check the notification and vibration. Reminders make no sound.

**iPhone (Safari):** Share → *Add to Home Screen*, then open it from the home screen. Notifications only work from the installed app.

**On the day:** keep the app open in front. The screen stays on while it is. If you lock the phone or switch apps, reminders pause; when you come back, the latest missed cue fires once.

**Rehearse today:** add `?now=2026-10-14T11:49:30` to the link to fake the clock (Berlin time). The app shows a yellow "Rehearsal clock is on" line; tap *Back to real time* or open `?now=off` before the day.

**Develop:** in `app/`, `npm install`, `npm run dev`, `npm test`. The app reads `talks/*.md` directly, so editing a talk file is enough. Pushing to `main` deploys via GitHub Actions.
