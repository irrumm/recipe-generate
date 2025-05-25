<template>
  <div id="app" class="app-layout">
    <AppHeader />
    <div class="main-section">
      <AppSidebar />
      <main class="content">
        <AppRecipeList />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import AppRecipeList from "@/components/AppRecipeList.vue";
import AppSidebar from "@/components/AppSidebar.vue";
</script>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-section {
  display: flex;
  flex: 1;
}

.content {
  flex: 1;
  padding: 2rem;
  background-color: #f4f4f4;
  overflow-y: auto;
}
</style>
