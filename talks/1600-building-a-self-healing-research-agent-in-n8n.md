# Building a Self-Healing Research Agent in n8n

- **When:** Wed 14 Oct 2026, 16:00–16:40 (40 min)
- **Where:** Sync Stage (Studio 3), Ecosystem Day
- **Format:** Talk
- **MC:** Aya
- **Detail page:** https://n8n.io/intheloop/agenda/building-a-self-healing-research-agent-in-n8n-8674a7b6/

## Abstract

Most agents repeat their mistakes.

The speaker built a self-healing research agent in n8n whose Discord users close the loop for it: every answer gets a human verdict, and that verdict goes back into the same vector store the agent retrieves from, one collection holding the agent's run history, its eval set, and its training signal, with the human in the loop as the writer.

A single payload filter retrieves past failures separately from past successes, so every new run is briefed on both what worked and what didn't, with no fine-tuning anywhere.

The speaker will show the build live, end-to-end, and attendees will leave with an importable workflow, a setup README, and clear licensing, ready to run against their own Discord server.

## Takeaway

Learn a working pattern for self-healing agent loops: one collection serving as the agent's run history, eval set, and training signal, with a human in the loop as the writer

Discover the one-filter trick that retrieves past failures separately from past successes, so every new run is briefed on both

Leave with an importable workflow, setup README, and clear licensing, ready to run against your own Discord server

## Speaker

### Clelia Astra Bertelli (Speaker)

- **Title:** DevRel Engineer · Qdrant
- **LinkedIn:** https://www.linkedin.com/in/clelia-astra-bertelli-583904297/
- **GitHub:** https://github.com/AstraBert
- **X / Twitter:** https://x.com/itsclelia
- **Speaker page:** https://n8n.io/intheloop/speakers/clelia-astra-bertelli-55ece145/
- **Photo:** https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/ITL_26_thumbnail_Clelia_Astra_Bertelli_28ba277490.jpg

Clelia Astra is a Developer Relations Engineer at Qdrant, focusing on search and AI: agents, retrieval, performance and scaling, and open source devtools and libraries. She's also an n8n user and developer, having gotten into it while building and maintaining the LlamaParse community node for LlamaIndex. Outside of work, she codes for fun (mostly in Rust), and loves hiking, traveling, and watching TV series.
