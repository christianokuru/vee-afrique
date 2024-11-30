import './assets/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { addIcons, OhVueIcon } from 'oh-vue-icons'

// import all your icons
import {
    CoHamburgerMenu,
} from 'oh-vue-icons/icons'

// add icons to library
addIcons(
    CoHamburgerMenu,
);




const app = createApp(App)
app.component('v-icon', OhVueIcon) // register globally
app.use(router)
app.mount('#app')
