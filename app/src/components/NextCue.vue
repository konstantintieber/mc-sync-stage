<script setup lang="ts">
import { computed } from 'vue'
import { fmtTime, type Cue } from '../lib/schedule'

const props = defineProps<{ cues: Cue[]; t: number }>()

// Cues stay on screen as "now" for 3 minutes after they fired. Several can share a minute (close + next greet)
const recent = computed(() => {
  const last = props.cues.filter((c) => c.at <= props.t && props.t - c.at < 3 * 60_000).at(-1)
  return last ? props.cues.filter((c) => c.at === last.at) : []
})
const next = computed(() => props.cues.find((c) => c.at > props.t))

const countdown = computed(() => {
  if (!next.value) return ''
  const s = Math.ceil((next.value.at - props.t) / 1000)
  const h = Math.floor(s / 3600)
  const mm = String(Math.floor((s % 3600) / 60)).padStart(h ? 2 : 1, '0')
  const ss = String(s % 60).padStart(2, '0')
  return h ? `${h}:${mm}:${ss}` : `${mm}:${ss}`
})
</script>

<template>
  <section class="cue">
    <div v-for="c in recent" :key="c.id" class="now">
      <div class="label">Now · {{ fmtTime(c.at) }}</div>
      <h2>{{ c.title }}</h2>
      <p>{{ c.body }}</p>
    </div>
    <div v-if="next" class="next">
      <div class="label">Next at {{ fmtTime(next.at) }} · in <span class="countdown">{{ countdown }}</span></div>
      <h2>{{ next.title }}</h2>
      <p>{{ next.body }}</p>
    </div>
    <div v-else class="next"><h2>That's a wrap. Thank you!</h2></div>
  </section>
</template>
