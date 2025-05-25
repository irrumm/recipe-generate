<template>
  <aside class="sidebar">
    <button class="accordion" @click="toggleCategory('meats')">{{ $t("Components.AppSidebar.meats") }} ({{ $t("Components.AppSidebar.itemsChosen", {count: chosenMeats.length})}})</button>
    <div class="panel" id="meats">
      <div v-for="meat in Object.values(meats)" :key="meat" class="category-items">
        <label>
          <input type="checkbox" :value="meat" v-model="chosenMeats">
          {{ $t(`Ingredients.meats.${meat}`) }}
        </label>
      </div>
    </div>
    <button class="accordion" @click="toggleCategory('mains')">{{ $t("Components.AppSidebar.mains") }} ({{ $t("Components.AppSidebar.itemsChosen", {count: chosenMains.length})}})</button>
    <div class="panel" id="mains">
      <div v-for="main in Object.values(mains)" :key="main" class="category-items">
        <label>
          <input type="checkbox" :value="main" v-model="chosenMains">
          {{ $t(`Ingredients.mains.${main}`) }}
        </label>
      </div>
    </div>
    <button class="accordion" @click="toggleCategory('type')">{{ $t("Components.AppSidebar.type") }} ({{ $t("Components.AppSidebar.itemsChosen", {count: chosenTypes.length})}})</button>
    <div class="panel" id="type">
      <div v-for="type in Object.values(types)" :key="type" class="category-items">
        <label>
          <input type="checkbox" :value="type" v-model="chosenTypes">
          {{ $t(`Ingredients.type.${type}`) }}
        </label>
      </div>
    </div>
  </aside>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import {Mains, Meats, Type} from "@/common/ingredients.ts";

type IngredientCategory = "meats" | "mains" | "type"

export default defineComponent({
  name: "app-sidebar",
  data() {
    return {
      chosenMeats: Object.values(Meats),
      chosenMains: Object.values(Mains),
      chosenTypes: Object.values(Type),
      meats: Meats,
      mains: Mains,
      types: Type
    }
  },
  watch: {
    chosenMeats() {
      this.$emit("meats-updated", this.chosenMeats)
    },
    chosenMains() {
      this.$emit("mains-updated", this.chosenMains)
    },
    chosenTypes() {
      this.$emit("types-updated", this.chosenTypes)
    }
  },
  methods: {
    toggleCategory(category: IngredientCategory): void {
      const panel = document.getElementById(category);
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    }
  }
})
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #3F9DCF;
  padding: 1rem;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.sidebar a:hover {
  color: #18bc9c;
}

.accordion {
  background-color: #f4f4f4;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
  margin-top: 1rem;
}

.accordion:hover {
  background-color: #ccc;
}

.panel {
  padding: 10px 18px;
  background-color: white;
  display: block;
  overflow: hidden;
}

.category-items {
  margin-bottom: 0.5rem;
}
</style>
