import { createApp } from 'vue'
import App from './App.vue'
import sdk from '@ahao430/sdk-demo/dist/index.js'

sdk.a.getDetail()

createApp(App).mount('#app')
