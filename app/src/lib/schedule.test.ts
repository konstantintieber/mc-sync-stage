import { describe, expect, it } from 'vitest'
import { buildCues, dueCues, fmtTime } from './schedule'
import { sessions } from './talks'
const at = (hhmm: string) => Date.parse(`2026-10-14T${hhmm}:00+02:00`)

describe('buildCues', () => {
  const cues = buildCues(sessions, 'Konsti')

  it('has the morning shift plus five cues per session, in time order', () => {
    expect(cues).toHaveLength(1 + sessions.length * 5)
    expect(cues[0].id).toBe('shift')
    expect(cues.map((c) => c.at)).toEqual([...cues.map((c) => c.at)].sort((a, b) => a - b))
  })

  it('places the cues around the 12:00 session', () => {
    const times = Object.fromEntries(cues.filter((c) => c.sessionId === '1200').map((c) => [c.kind, fmtTime(c.at)]))
    expect(times).toEqual({ greet: '11:50', call: '11:58', open: '12:00', wrap: '12:28', end: '12:30' })
  })

  it('closes the current session before greeting the next speaker at the same minute', () => {
    const sameMinute = cues.filter((c) => c.at === at('11:50')).map((c) => c.id)
    expect(sameMinute).toEqual(['1120-end', '1200-greet'])
  })

  it('tells the MC who hosts', () => {
    expect(cues.find((c) => c.id === '1200-open')?.body).toMatch(/^Starting now\. You host\./)
    expect(cues.find((c) => c.id === '1120-open')?.body).toMatch(/^Starting now\. Aya hosts, you're side-stage\./)
    expect(buildCues(sessions, 'Aya').find((c) => c.id === '1120-open')?.body).toMatch(/^Starting now\. You host\./)
  })

  it('leads with the session and its time, then names the speakers and the next session', () => {
    const greet = cues.find((c) => c.id === '1440-greet')!
    expect(greet.title).toBe('14:40 · How to Build Guardrails That Unlock Automation Freedom at Scale')
    expect(greet.body).toMatch(/^Starts in 10 min\. You host\. Greet Ravi Karnam, Susan Moore and Adil Dittmer backstage/)
    expect(cues.find((c) => c.id === '1200-wrap')?.title).toBe("Ends 12:30 · Building n8n's AI SDR")
    expect(cues.find((c) => c.id === '1120-end')?.body).toContain("Next here: 12:00 · Building n8n's AI SDR.")
    expect(cues.at(-1)?.id).toBe('1650-end')
    expect(cues.at(-1)?.body).not.toContain('Next here')
  })
})

describe('dueCues', () => {
  const cues = buildCues(sessions, 'Konsti')

  it('fires nothing when no cue is in the window', () => {
    expect(dueCues(cues, at('09:00'), at('10:00'))).toEqual([])
  })

  it('fires a cue exactly once at its time', () => {
    expect(dueCues(cues, at('11:57') + 59_000, at('11:58')).map((c) => c.id)).toEqual(['1200-call'])
    expect(dueCues(cues, at('11:58'), at('11:58') + 1000)).toEqual([])
  })

  it('after a gap only fires the latest cues, including all at that same minute', () => {
    expect(dueCues(cues, at('11:00'), at('11:55')).map((c) => c.id)).toEqual(['1120-end', '1200-greet'])
  })
})
