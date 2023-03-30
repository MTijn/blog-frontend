import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "@popperjs/core/dist/esm/popper.js"

createApp(App).use(router).mount('#app')
