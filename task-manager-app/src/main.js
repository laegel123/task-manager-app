import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import takeStore from './store/taskStore'
import themeStore from './store/themeStore'


createApp(App).use(createPinia()).use(takeStore).use(themeStore).use(router).mount('#app')
