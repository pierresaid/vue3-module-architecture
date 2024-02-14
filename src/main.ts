import { createApp } from 'vue'
import { createPinia } from 'pinia'

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-dark-blue/theme.css'
import '/node_modules/primeflex/primeflex.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);

app.mount('#app')
