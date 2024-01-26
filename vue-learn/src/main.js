import './assets/main.css'

import Notifications from '@kyvg/vue3-notification'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(Notifications)
app.use(router)

app.mount('#app')
