import './assets/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { addIcons, OhVueIcon } from 'oh-vue-icons'

// import all your icons
import {
    CoHamburgerMenu,
    LaShippingFastSolid,
    MdSupportagent,
    GiTakeMyMoney,
} from 'oh-vue-icons/icons'

// add icons to library
addIcons(
    CoHamburgerMenu,
    LaShippingFastSolid,
    MdSupportagent,
    GiTakeMyMoney,
);




const app = createApp(App)
app.component('v-icon', OhVueIcon) // register globally
app.use(router)
app.mount('#app')
