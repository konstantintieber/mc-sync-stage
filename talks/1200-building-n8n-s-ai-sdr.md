# Building n8n's AI SDR

- **When:** Wed 14 Oct 2026, 12:00–12:30 (30 min)
- **Where:** Sync Stage (Studio 3), Ecosystem Day
- **Format:** Talk
- **MC:** Konsti
- **Detail page:** https://n8n.io/intheloop/agenda/building-n8n-s-ai-sdr-d34c087a/

## Abstract

n8n runs its own AI SDR on n8n. It's called Freddie. Version 1 was the textbook multi-agent pattern: a master orchestrator that fanned out to five specialist sub-agents (licensing, enterprise sales, plan advice, community retrieval-augmented generation (RAG), email drafting) on every turn, whether it needed all five or not.

We tore that apart. V2 replaces the sub-agent layer with skills. Instead of prompting a whole separate agent to check "is this allowed under our license," Freddie calls a Sustainable Use License skill directly as a tool, and only pulls in the skills a given query actually needs.

This talk covers the why and the how. Why paying to spin up and prompt five agents in parallel was wasteful when most conversations only needed one or two. How skills made the agent faster and measurably less prone to hallucination. The real trade-off we accepted: skills are more robust but harder to hot-patch than the old Notion-driven prompts were. And why we also killed our external vector database in the process, moving knowledge retrieval in-house to cut a third-party dependency.

We'll also touch on the guardrails this shift didn't remove. It's still an agent making real decisions against a live customer relationship management (CRM) system, and it still needs a safety net.

If you're running, or considering, a multi-agent setup and wondering whether it's earning its complexity, this is the "we tried it both ways" talk.

## Speaker

### Josef Hlava (Speaker)

- **Title:** AI Automation Engineer · n8n
- **LinkedIn:** https://www.linkedin.com/in/josefhlava/
- **Speaker page:** https://n8n.io/intheloop/speakers/josef-hlava-78c248c0/
- **Photo:** https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/ITL_26_thumbnail_Josef_Hlava_787c97c41d.jpg

Josef Hlava is an AI Automation Engineer at n8n and one of the first engineers on its automation team, with a background in recruitment and HR automation before moving into engineering. He's currently building n8n's AI agent for inbound sales, and spends most of his time figuring out how to get an AI system trusted with real pipeline and real judgment calls.
