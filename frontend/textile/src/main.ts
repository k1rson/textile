// style lazy imports
import './assets/scss/style.scss'

// plugins
import { registerPlugins } from './plugins'

// components
import App from '../src/App.vue'

// composables
import { createApp } from 'vue'

// create and init main app
const app = createApp(App)

registerPlugins(app)

app.mount('#app')
