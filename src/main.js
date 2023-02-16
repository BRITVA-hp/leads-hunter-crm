import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './routes'
import 'tw-elements'

//styles
import './assets/sass/style.sass'
import 'material-icons/iconfont/material-icons.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
