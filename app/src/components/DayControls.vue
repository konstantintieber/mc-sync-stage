<script setup lang="ts">
import type { Mc } from '../lib/schedule'

defineProps<{ armed: boolean; permission: NotificationPermission | 'unsupported'; rehearsal: boolean }>()
const me = defineModel<Mc>('me', { required: true })
defineEmits<{ start: []; stop: []; test: [] }>()
</script>

<template>
  <section class="controls">
    <div class="who" role="radiogroup" aria-label="Who are you?">
      <span>I am</span>
      <button v-for="name in ['Konsti', 'Aya'] as const" :key="name" :aria-pressed="me === name" @click="me = name">
        {{ name }}
      </button>
    </div>

    <button v-if="!armed" class="start" @click="$emit('start')">Start the day</button>
    <div v-else class="armed">
      <span class="dot" /> Reminders on
      <button @click="$emit('test')">Test</button>
      <button class="ghost" @click="$emit('stop')">Turn off</button>
    </div>

    <p v-if="armed && permission === 'denied'" class="warn">
      Notifications are blocked. Allow them in the browser's site settings, then reload. Vibration and the in-app view still work.
    </p>
    <p v-if="armed && permission === 'unsupported'" class="warn">
      This browser can't show notifications here. On iPhone, add the app to the home screen first.
    </p>
    <p v-if="!armed" class="hint">Keep this app open on the day. The screen stays on while it's in front.</p>
    <p v-if="rehearsal" class="warn">Rehearsal clock is on. <a href="?now=off">Back to real time</a></p>
  </section>
</template>
