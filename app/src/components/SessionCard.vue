<script setup lang="ts">
import { computed } from 'vue'
import { fmtTime, type Mc } from '../lib/schedule'
import type { Session } from '../lib/talks'

const props = defineProps<{ session: Session; me: Mc; t: number }>()

const start = computed(() => Date.parse(props.session.start))
const end = computed(() => Date.parse(props.session.end))
const state = computed(() => (props.t >= end.value ? 'past' : props.t >= start.value ? 'live' : 'upcoming'))
</script>

<template>
  <article class="session" :class="state">
    <header>
      <span class="time">{{ fmtTime(start) }}–{{ fmtTime(end) }}</span>
      <span class="host" :class="{ mine: session.mc === me }">
        {{ session.mc === me ? 'You host' : `${session.mc} hosts` }}
      </span>
    </header>
    <h3>{{ session.title }}</h3>
    <div class="format">{{ session.format }}<span v-if="state === 'live'"> · on stage now</span></div>
    <ul>
      <li v-for="p in session.speakers" :key="p.name">
        <strong>{{ p.name }}</strong>
        <span v-if="p.role !== 'Speaker'" class="role">{{ p.role }}</span>
        <div class="headline">{{ p.headline }}</div>
      </li>
    </ul>
    <details>
      <summary>Abstract and speaker bios</summary>
      <!-- Rendered from our own talks/*.md; markdown-it escapes raw HTML -->
      <div class="md" v-html="session.detailsHtml" />
    </details>
  </article>
</template>
