import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "fork-awesome/css/fork-awesome.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "@popperjs/core/dist/esm/popper.js"
import "./assets/blockquote.css"
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.mount('#app')
