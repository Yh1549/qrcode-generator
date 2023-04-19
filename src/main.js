import { createApp } from 'vue'
import { createPinia } from 'pinia';
import './style.css'
import App from './App.vue'
import VueQrcode from '@chenfengyuan/vue-qrcode';

const app = createApp(App);
app.use(createPinia());
app.component(VueQrcode.name, VueQrcode);
app.mount('#app')
