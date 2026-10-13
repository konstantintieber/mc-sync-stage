// Device clock with an optional offset, so the day can be rehearsed with ?now=2026-10-14T11:09
const KEY = 'mc-clock-offset'

export function initClock() {
  const param = new URLSearchParams(location.search).get('now')
  if (param === null) return
  if (param === '' || param === 'off') {
    localStorage.removeItem(KEY)
    return
  }
  // Times without an explicit offset are Berlin summer time
  const target = Date.parse(/(Z|[+-]\d\d:\d\d)$/i.test(param) ? param : `${param}+02:00`)
  if (!Number.isNaN(target)) localStorage.setItem(KEY, String(target - Date.now()))
}

export const clockOffset = () => Number(localStorage.getItem(KEY) ?? 0)
export const now = () => Date.now() + clockOffset()
