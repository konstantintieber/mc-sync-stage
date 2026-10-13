import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { now } from '../lib/clock'
import { fire, unlock } from '../lib/notify'
import { buildCues, dueCues, fmtTime, type Mc } from '../lib/schedule'
import type { Session } from '../lib/talks'
import { keepAwake } from '../lib/wakeLock'

const ME_KEY = 'mc-me'
const ARMED_KEY = 'mc-armed'

export function useReminders(sessions: Session[]) {
  const me = ref<Mc>(localStorage.getItem(ME_KEY) === 'Aya' ? 'Aya' : 'Konsti')
  watch(me, (v) => localStorage.setItem(ME_KEY, v))

  const armed = ref(localStorage.getItem(ARMED_KEY) === '1')
  const permission = ref<NotificationPermission | 'unsupported'>(
    'Notification' in window ? Notification.permission : 'unsupported',
  )
  const t = ref(now())
  const cues = computed(() => buildCues(sessions, me.value))

  let lastCheck = now()
  function check() {
    const current = now()
    t.value = current
    if (armed.value) dueCues(cues.value, lastCheck, current).forEach(fire)
    lastCheck = current
  }

  async function start() {
    permission.value = await unlock()
    armed.value = true
    localStorage.setItem(ARMED_KEY, '1')
    lastCheck = now()
    keepAwake()
  }

  function stop() {
    armed.value = false
    localStorage.removeItem(ARMED_KEY)
  }

  async function test() {
    // The tap counts as a gesture, so a missing permission can still be asked for here
    permission.value = await unlock()
    const startsAt = now() + 20 * 60_000
    fire({
      id: 'test',
      kind: 'greet',
      at: now(),
      title: `${fmtTime(startsAt)} · Test talk by Jane Doe`,
      body: `Test talk by Jane Doe is starting in 20 minutes. This is how your reminders will look.`,
    })
  }

  function onVisibility() {
    if (document.visibilityState !== 'visible') return
    check()
    if (armed.value) keepAwake()
  }

  let timer: ReturnType<typeof setInterval>
  onMounted(() => {
    timer = setInterval(check, 1000)
    document.addEventListener('visibilitychange', onVisibility)
    if (armed.value) keepAwake()
  })
  onUnmounted(() => {
    clearInterval(timer)
    document.removeEventListener('visibilitychange', onVisibility)
  })

  return { me, armed, permission, t, cues, start, stop, test }
}
