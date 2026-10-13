import { createApp } from 'vue'
import App from './App.vue'
import { initClock } from './lib/clock'
import './style.css'

initClock()
createApp(App).mount('#app')
