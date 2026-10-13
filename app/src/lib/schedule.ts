import type { Session } from './talks'

export type Mc = 'Aya' | 'Konsti'

export type CueKind = 'shift' | 'greet' | 'call' | 'open' | 'wrap' | 'end'

export interface Cue {
  id: string
  kind: CueKind
  at: number
  title: string
  body: string
  sessionId?: string
}

const MIN = 60_000
const MORNING_SHIFT = Date.parse('2026-10-14T08:15:00+02:00')
// When one session ends as the next one's T-10 starts, close the current one first
const ORDER: Record<CueKind, number> = { shift: 0, end: 1, greet: 2, call: 3, open: 4, wrap: 5 }

const timeFormat = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Berlin', hour: '2-digit', minute: '2-digit' })
export const fmtTime = (ms: number) => timeFormat.format(ms)

export const partnerOf = (me: Mc): Mc => (me === 'Aya' ? 'Konsti' : 'Aya')

export const hostLine = (s: Session, me: Mc) => (s.mc === me ? 'You host.' : `${s.mc} hosts, you're side-stage.`)

export function joinNames(s: Session) {
  const names = s.speakers.map((p) => p.name)
  return names.length > 1 ? `${names.slice(0, -1).join(', ')} and ${names.at(-1)}` : (names[0] ?? '')
}

export function buildCues(sessions: Session[], me: Mc): Cue[] {
  const cues: Cue[] = []
  const first = sessions[0]
  if (first) {
    cues.push({
      id: 'shift',
      kind: 'shift',
      at: MORNING_SHIFT,
      title: `${fmtTime(MORNING_SHIFT)} · Morning shift at the Sync Stage`,
      body: `First session at ${fmtTime(Date.parse(first.start))}: ${first.title}. Test your mic and the clicker, check the speaker screen.`,
    })
  }

  // Every notification leads with the session and its time, then says what to do
  sessions.forEach((s, i) => {
    const start = Date.parse(s.start)
    const end = Date.parse(s.end)
    const next = sessions[i + 1]
    const host = hostLine(s, me)
    const names = joinNames(s)
    const starts = `${fmtTime(start)} · ${s.title}`
    const ends = `Ends ${fmtTime(end)} · ${s.title}`
    const add = (kind: CueKind, at: number, title: string, body: string) =>
      cues.push({ id: `${s.id}-${kind}`, kind, at, title, body, sessionId: s.id })

    add('greet', start - 10 * MIN, starts, `Starts in 10 min. ${host} Greet ${names} backstage: how to say their name, their title, Community Lounge after?`)
    add('call', start - 2 * MIN, starts, `Starts in 2 min. ${host} Call the room: "Phones to silent, come closer."`)
    add('open', start, starts, `Starting now. ${host} Intro ${names}: name, company, title, one reason to listen.`)
    add('wrap', end - 2 * MIN, ends, `2 min left. ${host} Get to the side of the stage.`)
    add(
      'end',
      end,
      ends,
      `Time's up, walk on. ${host} Thank ${names}. ` +
        (next ? `Next here: ${fmtTime(Date.parse(next.start))} · ${next.title}.` : 'Last session on this stage today.'),
    )
  })

  return cues.sort((a, b) => a.at - b.at || ORDER[a.kind] - ORDER[b.kind])
}

/** Cues that came due in (from, to]. After a gap (phone locked) only the latest ones fire, not a backlog. */
export function dueCues(cues: Cue[], from: number, to: number): Cue[] {
  const due = cues.filter((c) => c.at > from && c.at <= to)
  const last = due.at(-1)?.at
  return due.filter((c) => c.at === last)
}
