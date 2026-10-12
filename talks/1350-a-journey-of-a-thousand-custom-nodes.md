# A Journey of a Thousand Custom Nodes

- **When:** Wed 14 Oct 2026, 13:50–14:30 (40 min)
- **Where:** Sync Stage (Studio 3), Ecosystem Day
- **Format:** Talk
- **MC:** Konsti
- **Detail page:** https://n8n.io/intheloop/agenda/a-journey-of-a-thousand-custom-nodes-2e250754/

## Abstract

At Trade Republic, n8n isn't just a tool for wiring up webhooks, it's the backbone of how internal systems talk to each other. But once you go beyond simple HTTP requests, you hit the same walls repeatedly: discoverability breaks down, patterns get copy-pasted across workflows and quietly go stale, and nobody remembers where the "canonical" version lived. Add internal APIs that don't behave like tidy REST services, long polling, human-in-the-loop steps, and repeated boilerplate for logging and error handling, and the cracks show.

In this talk, Trade Republic's n8n platform team walks through how they solved that problem: building custom nodes at scale. They'll cover why they chose custom nodes over custom workflows, and how they automated the boring part, generating nodes directly from internal OpenAPI specs, treating each as just another generated API client.

Finally, they'll dig into the internal SDK built on top: instrumentation for free (logging, tracing, auth), encapsulation of repeated patterns, and ergonomic conventions that make nodes easier to write and read.

## Takeaway

Understand the common failure modes of custom node sprawl: lost discoverability, stale copy-pasted patterns, and no clear canonical version

Learn why Trade Republic chose building custom nodes over custom workflows to solve internal integration problems

See how nodes can be auto-generated directly from internal OpenAPI specs, treating each as a generated API client

Discover what an internal SDK for node development can provide for free: logging, tracing, auth, and parameter validation

Identify the trade-offs of building on custom nodes: real friction, but real flexibility to shape the platform around your organization's needs

## Speakers

### Stanislav Cherenkov (Speaker)

- **Title:** Staff Engineer · Trade Republic
- **LinkedIn:** https://www.linkedin.com/in/stcherenkov/
- **Speaker page:** https://n8n.io/intheloop/speakers/stanislav-cherenkov-ca7f218f/
- **Photo:** https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/ITL_26_thumbnail_Stanislav_Cherenkov_2ba4c8b19c.jpg

Stanislav Cherenkov is a Staff Engineer at Trade Republic, where he leads the team maintaining the company's internal n8n infrastructure. Around the platform itself, he builds a broader tooling ecosystem: custom nodes and workflows, analytics and event tracking, smarter load balancing and performance detection, AI integrations, and workflow review and validation tools. He's spent years at the intersection of low-code tooling and fintech, working with companies of every size, from major banks to small blockchain startups. He's particularly interested in how AI-assisted workflows can be built and validated safely at scale, without slowing teams down.

### Allan Galera (Speaker)

- **Title:** Software Engineer · Trade Republic
- **LinkedIn:** https://www.linkedin.com/in/allangalera/
- **Speaker page:** https://n8n.io/intheloop/speakers/allan-galera-3bd9bb0e/
- **Photo:** https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/ITL_26_thumbnail_Allan_Galera_dd3981e728.jpg

Allan Galera is a Senior Software Engineer at Trade Republic, working on the team behind the company's internal n8n platform. His work focuses on building around n8n, turning complex processes into reliable workflows through custom nodes, integrating n8n into Trade Republic's internal systems, and keeping the platform healthy at scale.He has been building applications since 2016, with a background spanning fintech and large-scale consumer products. He's particularly interested in following the latest developments in the JavaScript ecosystem.

### Julia Matina (Speaker)

- **Title:** Software Engineer · Trade Republic
- **LinkedIn:** https://www.linkedin.com/in/julia-matina-4579a29b/
- **Speaker page:** https://n8n.io/intheloop/speakers/julia-matina-16f82082/
- **Photo:** https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/ITL_26_thumbnail_Julia_Matina_dbf2913ebc.jpg

Julia Matina is a Software Engineer at Trade Republic, working on the n8n platform. Her work spans keeping the platform running and up to date, and building the internal developer tooling around it, such as the node SDK, which makes custom nodes faster to build and easier to live with. Her background spans fintech, EV charging infrastructure, and green aviation.
