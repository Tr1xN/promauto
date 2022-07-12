import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createPinia } from 'pinia'
import App from './App.vue'
import './index.css'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App)

app.use(VueAxios, axios)
app.use(createPinia())
app.use(VueSweetalert2);

app.mount('#app')
