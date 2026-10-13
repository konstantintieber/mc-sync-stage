<script setup lang="ts">
import DayControls from './components/DayControls.vue'
import NextCue from './components/NextCue.vue'
import SessionCard from './components/SessionCard.vue'
import { useReminders } from './composables/useReminders'
import { clockOffset } from './lib/clock'
import { sessions } from './lib/talks'

const { me, armed, permission, t, cues, start, stop, test } = useReminders(sessions)
const rehearsal = clockOffset() !== 0

const trivia = [
  ['n8n is short for "nodemation". So what does the 8 stand for?', 'The eight letters between the two n’s.'],
  ['Before n8n, Jan made visual effects for films. Name the Disney film with Angelina Jolie.', 'Maleficent (Happy Feet Two also counts).'],
  ['Which has more GitHub stars: n8n, VS Code or TensorFlow?', 'n8n, just ahead of TensorFlow.'],
  ['n8n launched on Product Hunt in the second week of October. How many years ago?', '7, in 2019. Happy birthday, n8n!'],
]
</script>

<template>
  <main>
    <h1>Sync Stage <small>· Studio 3 · 14 Oct</small></h1>
    <DayControls v-model:me="me" :armed :permission :rehearsal @start="start" @stop="stop" @test="test" />
    <NextCue :cues :t />

    <h2 class="section">Today on the Sync Stage</h2>
    <SessionCard v-for="s in sessions" :key="s.id" :session="s" :me :t />

    <section class="card">
      <h2>Overtime</h2>
      <p>At 0 you walk on. "That's our time, and I want to make sure the next speaker gets theirs. [Name] will be in the Community Lounge for questions." Smile, mean it, don't negotiate.</p>
    </section>

    <section class="card">
      <h2>Filler trivia</h2>
      <details v-for="[q, a] in trivia" :key="q">
        <summary>{{ q }}</summary>
        <p>{{ a }}</p>
      </details>
    </section>
  </main>
</template>
