let lock: WakeLockSentinel | null = null

/** Keeps the screen on while the app is visible. The browser drops the lock when the app is hidden. */
export async function keepAwake() {
  if (lock || !('wakeLock' in navigator) || document.visibilityState !== 'visible') return
  try {
    lock = await navigator.wakeLock.request('screen')
    lock.addEventListener('release', () => (lock = null))
  } catch {
    // Low battery mode or unsupported: the reminders still work, the screen just may turn off
  }
}
