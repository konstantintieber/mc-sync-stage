import { describe, expect, it } from 'vitest'
import { sessions } from './talks'

describe('talks/*.md', () => {
  it('parses all 8 Sync Stage sessions in time order', () => {
    expect(sessions.map((s) => s.id)).toEqual(['1120', '1200', '1310', '1350', '1440', '1520', '1600', '1650'])
    expect(sessions.reduce((n, s) => n + s.speakers.length, 0)).toBe(14)
  })

  it('reads times, MC and roles', () => {
    const fireside = sessions.find((s) => s.id === '1440')!
    expect(fireside).toMatchObject({ format: 'Fireside Chat', mc: 'Konsti', start: '2026-10-14T14:40:00+02:00', end: '2026-10-14T15:10:00+02:00' })
    expect(fireside.speakers.at(-1)).toEqual({ name: 'Adil Dittmer', role: 'Moderator', headline: 'Manager, Customer Success - Americas · n8n' })
  })

  it('renders abstract and bios, not the header block', () => {
    const html = sessions.find((s) => s.id === '1200')!.detailsHtml
    expect(html).toContain('<h2>Abstract</h2>')
    expect(html).toContain("It's called Freddie")
    expect(html).toContain('<h3>Josef Hlava (Speaker)</h3>')
    expect(html).toContain('target="_blank"')
    expect(html).not.toContain('Detail page')
  })
})
