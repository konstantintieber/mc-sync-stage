// The talk files in /talks are the single source: parsed for the schedule, rendered for the cards
import MarkdownIt from 'markdown-it'

export interface Speaker {
  name: string
  role: string
  headline: string
}

export interface Session {
  id: string
  title: string
  format: string
  mc: string
  start: string
  end: string
  speakers: Speaker[]
  /** Abstract, takeaways and speaker bios, rendered from the talk file */
  detailsHtml: string
}

const md = new MarkdownIt({ linkify: true })
const renderLink = md.renderer.rules.link_open ?? ((tokens, idx, options, _env, self) => self.renderToken(tokens, idx, options))
md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
  // Keep the app (and its timers) open when a LinkedIn or photo link is tapped
  tokens[idx].attrSet('target', '_blank')
  tokens[idx].attrSet('rel', 'noopener')
  return renderLink(tokens, idx, options, env, self)
}

// 14 Oct 2026 is still summer time in Berlin
const iso = (hhmm: string) => `2026-10-14T${hhmm}:00+02:00`
const field = (text: string, name: string) => text.match(new RegExp(`^- \\*\\*${name}:\\*\\* (.+)$`, 'm'))?.[1].trim() ?? ''

export function parseTalk(fileName: string, text: string): Session {
  const [, start = '00:00', end = '00:00'] = field(text, 'When').match(/(\d\d:\d\d)–(\d\d:\d\d)/) ?? []
  const speakers = [...text.matchAll(/^### (.+?) \((\w+)\)\n\n- \*\*Title:\*\* (.+)$/gm)].map(([, name, role, headline]) => ({
    name,
    role,
    headline,
  }))
  const abstractAt = text.indexOf('## Abstract')
  return {
    id: fileName.slice(0, 4),
    title: text.match(/^# (.+)$/m)?.[1].trim() ?? fileName,
    format: field(text, 'Format'),
    mc: field(text, 'MC'),
    start: iso(start),
    end: iso(end),
    speakers,
    detailsHtml: abstractAt >= 0 ? md.render(text.slice(abstractAt)) : '',
  }
}

const files = import.meta.glob<string>('../../../talks/*.md', { query: '?raw', import: 'default', eager: true })

export const sessions: Session[] = Object.entries(files)
  .map(([path, text]) => parseTalk(path.split('/').at(-1)!, text))
  .sort((a, b) => a.start.localeCompare(b.start))
