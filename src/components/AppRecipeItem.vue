<template>
  <div class="box">
      <div><img class="recipe-image" :src="getRecipeImage" alt=""></div>
    <div>
      <div class="recipe-title">{{ item.name }}</div>
      <div class="recipe-info">
        <img class="recipe-icon" src="./icons/price.svg" :alt="$t('Components.AppRecipeItem.price')"/>
        {{ item.price }}€
      </div>
      <div class="recipe-info">
        <img class="recipe-icon" src="./icons/time.svg" :alt="$t('Components.AppRecipeItem.time')"/>
        {{ item.time }} {{ $t("Components.AppRecipeItem.minutes")}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Recipe} from "@/common/recipe.ts";
import {defineComponent, PropType} from "vue";

export default defineComponent({
  name: 'app-recipe-item',
  props: {
    item: {
      type: Object as PropType<Recipe>,
      required: true
    }
  },
  computed: {
    getRecipeImage() {
      return new URL(`../assets/${this.item?.image ?? 'recipe_placeholder.svg'}`, import.meta.url).href
    }
  }
})
</script>

<style scoped>
.box {
  border: 2px solid #3F9DCF;
  border-radius: 4px;
  padding: 2rem 1rem;
  display: flex;
}

.recipe-image {
  height: 100px;
  width: 100px;
  margin-right: 0.75rem;
}

.recipe-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.recipe-icon {
  height: 20px;
  margin-right: 0.5rem;
}

.recipe-info {
  display: flex;
  align-items: center;
}
</style>
