import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import 'element-plus/dist/index.css'
import './styles/styles.css'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(ElementPlus)
app.use(VueGoogleMaps, {
    load: {
       key: 'YOUR_API_KEY_COMES_HERE',
    },
 })

app.mount('#app')
