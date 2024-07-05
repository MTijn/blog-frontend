import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "fork-awesome/css/fork-awesome.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "@popperjs/core/dist/esm/popper.js"
import "./assets/blockquote.css"

createApp(App).use(router).mount('#app')
