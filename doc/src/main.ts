import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/styles/tailwind.css';
import 'highlight.js/styles/solarized-light.css'

createApp(App).use(router).mount('#app')
