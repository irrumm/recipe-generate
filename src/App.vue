<template>
  <div id="app" class="app-layout">
    <app-header />
    <div class="main-section">
      <app-sidebar @meats-updated="val => filterRecipes(val, 'meats')" @mains-updated="val => filterRecipes(val, 'mains')" @types-updated="val => filterRecipes(val, 'type')" />
      <main class="content">
        <app-recipe-list :recipes="recipeList" />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import AppRecipeList from "@/components/AppRecipeList.vue";
import AppSidebar from "@/components/AppSidebar.vue";
import {defineComponent} from "vue";
import {recipes} from "@/data/recipeData.ts";
import {Mains, Meats, Type} from "@/common/ingredients.ts";

export default defineComponent({
  components: {
    AppHeader,
    AppRecipeList,
    AppSidebar
  },
  data() {
    return {
      recipeList: recipes,
      currentMeats: Object.values(Meats),
      currentMains: Object.values(Mains),
      currentTypes: Object.values(Type),
    }
  },
  methods: {
    filterRecipes(items: string[], category: string) {
      switch (category) {
        case "meats":
          this.currentMeats = items;
          break;
        case "mains":
          this.currentMains = items;
          break;
        case "type":
          this.currentTypes = items;
          break;
        default:
          return;
      }
      // TODO: likely a nicer way to do this
      this.recipeList = recipes
        .filter((recipe) => recipe.ingredients.meats.some(item => this.currentMeats.includes(item)))
        .filter((recipe) => recipe.ingredients.mains.some(item => this.currentMains.includes(item)))
        .filter((recipe) => recipe.ingredients.type.some(item => this.currentTypes.includes(item)))
    }
  }
})
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
