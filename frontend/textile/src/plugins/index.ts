/* eslint-disable prettier/prettier */

// types
import type { App } from 'vue'

// plugins
import { router } from '../router'
import { pinia } from '../stores'

import { vuetify } from './vuetify'

export function registerPlugins(app: App) {
  app
    .use(router)
    .use(pinia)
    .use(vuetify)
}
