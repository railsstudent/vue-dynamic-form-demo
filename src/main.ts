import { createDynamicForms } from '@asigloo/vue-dynamic-forms';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './assets/main.css';

const VueDynamicForms = createDynamicForms({
    // Global Options go here
});
  
const app = createApp(App)

app.use(router)
app.use(VueDynamicForms)

app.mount('#app')
