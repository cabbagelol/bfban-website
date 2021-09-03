import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { detectLanguage } from './mixins/common'

Vue.use(VueI18n)

function loadLocaleMessages () {
  const locales = require.context('./lang', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

export default new VueI18n({
  locale: detectLanguage(navigator.language) || 'zh',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'zh',
  messages: loadLocaleMessages(),
  silentTranslationWarn: true,
})
