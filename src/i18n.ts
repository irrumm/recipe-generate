import {createI18n} from "vue-i18n";
import en from "./locales/en.json"

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: import.meta.env.I18N_LANGUAGE ?? "en",
  fallbackLocale: "en",
  messages: {
    en
  }
})
