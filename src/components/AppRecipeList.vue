<template>
  <div v-for="recipe in recipes" :key="recipe.id" class="recipe-item">
    <app-recipe-item :item="recipe"></app-recipe-item>
  </div>
</template>

<script lang="ts">
import {recipes} from "@/data/recipeData.ts";
import AppRecipeItem from "@/components/AppRecipeItem.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {
    AppRecipeItem
  },
  data() {
    return {
      recipes: recipes
    }
  }
})
</script>

<style scoped>
.recipe-item {
  margin-bottom: 1rem;
}
</style>
