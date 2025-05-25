<template>
  <div v-for="recipe in recipes" :key="recipe.id" class="recipe-item">
    <app-recipe-item :item="recipe"></app-recipe-item>
  </div>
</template>

<script lang="ts">
import AppRecipeItem from "@/components/AppRecipeItem.vue";
import {defineComponent, type PropType} from "vue";
import type {Recipe} from "@/common/recipe.ts";

export default defineComponent({
  components: {
    AppRecipeItem
  },
  props: {
    recipes: Array as PropType<Recipe[]>
  }
})
</script>

<style scoped>
.recipe-item {
  margin-bottom: 1rem;
}
</style>
