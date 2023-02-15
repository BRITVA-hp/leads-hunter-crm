import { createApp } from 'vue'
import store from './store'
import router from './routes'

//components
import App from './App.vue'

//styles
import './assets/sass/style.sass'
import 'material-icons/iconfont/material-icons.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
