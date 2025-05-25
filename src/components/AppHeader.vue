<template>
  <header class="app-header">
    <div class="logo">
      <img src="./icons/logo.svg" :alt="$t('Components.AppHeader.logoPlaceholder')" />
      <h1>{{ $t("Components.AppHeader.title") }}</h1>
    </div>
  </header>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "app-header"
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
</style>
