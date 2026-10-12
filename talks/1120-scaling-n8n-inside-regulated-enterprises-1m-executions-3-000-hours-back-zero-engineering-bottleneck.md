# Scaling n8n Inside Regulated Enterprises: 1M Executions, 3,000 Hours Back, Zero Engineering Bottleneck

- **When:** Wed 14 Oct 2026, 11:20–11:50 (30 min)
- **Where:** Sync Stage (Studio 3), Ecosystem Day
- **Format:** Talk
- **MC:** Aya
- **Detail page:** https://n8n.io/intheloop/agenda/scaling-n8n-inside-regulated-enterprises-1m-executions-3-000-hours-back-zero-7d2eceef/

## Abstract

In a regulated company, internal automation loses twice. Compliance and audit slow every change to a crawl. And engineering, correctly, puts the product first, so the automation backlog never moves. This talk is about two Brazilian companies that got past both, with n8n in production today. Anti-fraud technology, Certta. A verification hub serving 250+ clients, handling 200 production change requests a month, where a broken workflow means a fraud gets through. Instead of queueing automation behind the product roadmap, Certta built an automation Center of Excellence on n8n and pushed building out to the business itself: Engineering, HR, Finance, CyberSec, Support, Marketing and Legal now build their own workflows under shared governance. Over 1M executions, processes 75% faster on average, 3,000 hours returned to the teams. Insurance, Icatu Seguros. A.V.I, an n8n-orchestrated WhatsApp assistant that lets 1,000+ insurance brokers run their whole portfolio, not just quote. From idea to production in seven weeks, quotation time down from about five minutes to under 40 seconds, and second place at Gartner's Eye on Innovation Awards for Insurance 2025. From idea to production in seven weeks, quotation time down from about five minutes to under 40 seconds, and second place at Gartner's Eye on Innovation Awards for Insurance 2025. We built it before n8n's Agent framework existed, what took ten nodes then would be three today, and we'll show both. We will show the real architectures, the governance model that got past auditors and security teams, and the CoE patterns that let non-engineers build without every team improvising its own. We will also tell you the mistake we made first, why it stalled, and what unlocked it. Presented by the team at ed, n8n's Expert Partner Premium in Brazil, who built both.

## Takeaway

A downloadable workflow. We will publish a sanitized version of the CoE guardrail sub-workflow that every business team at Certta calls: structured logging, error capture, retry policy and an audit trail entry per execution. It carries no customer data and works in any n8n instance. It is the single artifact that made governed self-service possible, attendees can drop it into their own environment the same week. A CoE operating model. How to decide what the center of excellence owns and what each business area owns, the guardrails that make self-service safe, and how to curate reusable patterns so seven teams don't invent seven versions of the same thing. A governance setup auditors accept. Self-hosting, RBAC, environment separation and execution history as an audit trail, and which of these actually came up in security review, versus which we over-prepared. A production agent architecture. WhatsApp plus Azure plus n8n AI agents, with RAG over official documentation and the guardrails that keep a customer-facing assistant from inventing product terms. One honest lesson. What we tried first, why it stalled, and the change that unlocked it.

## Speakers

### Ricardo Neves Braga (Speaker)

- **Title:** CAIO - Chief AI and Innovation Officer · ed
- **LinkedIn:** https://www.linkedin.com/in/ricnvs/
- **Speaker page:** https://n8n.io/intheloop/speakers/ricardo-neves-braga-096051e7/
- **Photo:** https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/ITL_26_thumbnail_Ricardo_Neves_Braga_3ae594f2c3.jpg

Ricardo Neves Braga is Executive Director of AI & Innovation at ED, n8n Expert Partner Premium in Brazil and LATAM. With 20+ years in technology, he leads AI and automation programs inside regulated enterprises in Brazil, taking n8n from proof of concept to governed, audited production at scale. He is also Co-Founder of Flowgrammers, the largest AI and automation education ecosystem in LATAM, and of N8N Day Brazil. His current focus is Centers of Excellence, governance, and measurable ROI for enterprise automation.

### M. França (Speaker)

- **Title:** Growth Engineering Manager · ed
- **LinkedIn:** https://www.linkedin.com/in/mafranca/
- **GitHub:** https://github.com/mfranca
- **Speaker page:** https://n8n.io/intheloop/speakers/m-franca-17eba590/
- **Photo:** https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/ITL_26_thumbnail_M_Franca_f1df89e0b4.jpg

M. França leads Partnerships and Growth Engineering at ED, n8n's Expert Partner Premium in Brazil, where he owns the technical pre-sales and partner strategy behind the company's enterprise automation practice. Over 30 years, he has shipped software at scale and advised C-level leaders at NTT DATA, IBM, AWS, and Meta, including six years in Silicon Valley, and holds a D.Sc. in Software Engineering from UFRJ. He now works with regulated enterprises on becoming AI-native, helping them see that automation is rarely blocked by technology, and more often blocked by who has time to build it.
