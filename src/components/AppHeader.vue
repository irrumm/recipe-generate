<template>
  <header class="app-header">
    <div class="logo">
      <img src="./icons/logo.svg" :alt="$t('Components.AppHeader.logoPlaceholder')" />
      <h1>{{ $t("Components.AppHeader.title") }}</h1>
    </div>
    <div v-if="$i18n.availableLocales.length > 1" class="language-btn">
      <label for="languages"><img :src="getLangImage($i18n.locale)" :alt="$t('Components.AppHeader.languageBtn')"></label>
      <select id="languages" v-model="$i18n.locale">
        <option v-for="locale in $i18n.availableLocales" :key="locale" :value="locale">{{ $t(`Components.AppHeader.language.${locale}`) }}</option>
      </select>
    </div>
  </header>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "app-header",
  methods: {
    getLangImage(lang: string) {
      return new URL(`./icons/${lang}.svg`, import.meta.url).href
    }
  }
})
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #3F9DCF;
  color: white;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 60px;
  margin-right: 0.75rem;
}

.language-btn {
  display: flex;
}

#languages {
  height: 32px;
  margin-left: 0.5rem;
}
</style>
