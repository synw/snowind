import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'highlight.js/styles/solarized-light.css'
import './assets/index.css';

createApp(App).use(router).mount('#app')
