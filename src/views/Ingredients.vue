<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-10 text-purple-500">🪄Ingredients</h1>

    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-purple-200 w-full focus:border-purple-300 focus:ring-purple-300 pr-10 bg-white mb-5"
      placeholder="Search for Ingredients"
    />

    <div class="grid grid-cols-1 md:grid-cols-4 gap-3 text-center">
      <a
        href="#"
        @click.prevent="openIngredient(ingredient)"
        v-for="ingredient of computedIngredients"
        :key="ingredient.idIngredient"
        class="block bg-white rounded p-3 mb-3 shadow transition-transform transform hover:scale-105 hover:border-purple-500 hover:shadow-lg"
      >
        <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
      </a>
    </div>
  </div>
</template>
<script setup>
import store from "../store";
import { useRouter } from "vue-router";
import axiosClient from "../axiosClient";
import { computed, onMounted, ref } from "vue";

const router = useRouter();

const keyword = ref("");

const ingredients = ref([]);

const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;
  return ingredients.value?.filter((i) =>
    i.strIngredient?.toLowerCase().includes(keyword.value?.toLowerCase())
  );
});

function openIngredient(ingredient) {
  store.commit("setIngredient", ingredient);
  router.push({
    name: "byIngredient",
    params: { ingredient: ingredient.strIngredient },
  });
}

onMounted(() => {
  axiosClient.get(`list.php?i=list`).then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>

<style scoped>
a {
  border: 2px solid transparent;
}

a:hover {
  border-color: rgb(214, 171, 214);
}
</style>
