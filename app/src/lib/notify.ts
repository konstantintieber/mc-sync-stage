import type { Cue } from './schedule'

/** Must run inside a tap: browsers only show the permission prompt after a user gesture. */
export async function unlock(): Promise<NotificationPermission | 'unsupported'> {
  if (!('Notification' in window)) return 'unsupported'
  return Notification.permission === 'default' ? Notification.requestPermission() : Notification.permission
}

export async function fire(cue: Cue) {
  // No sound on stage: the notification is silent, the phone only vibrates while the app is open
  navigator.vibrate?.([300, 100, 300, 100, 300])
  if (!('Notification' in window) || Notification.permission !== 'granted') return

  // No tag on purpose: a notification with a reused tag silently replaces the old one and doesn't pop up
  const options = { body: cue.body, silent: true, icon: `${import.meta.env.BASE_URL}pwa-192x192.png` }
  // Android Chrome only shows notifications through the service worker
  const registration = await navigator.serviceWorker?.getRegistration()
  if (registration?.active) return registration.showNotification(cue.title, options)
  try {
    new Notification(cue.title, options)
  } catch {
    // No active service worker yet on Android: the in-app view and vibration still show the cue
  }
}
