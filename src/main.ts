import { defaultConfig, plugin } from '@formkit/vue';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './assets/main.css';
  
const app = createApp(App)

app.use(router)
app.use(plugin, defaultConfig({ theme: 'genesis' }))

app.mount('#app')
