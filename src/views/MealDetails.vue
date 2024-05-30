<template>
  <div class="w-full max-w-[800px] mx-auto p-8">
    <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <img
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
      class="rounded w-full h-56 object-cover"
    />
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold">Category:</strong>
        {{ meal.strCategory || "N/A" }}
      </div>
      <div>
        <strong class="font-bold">Area:</strong> {{ meal.strArea || "N/A" }}
      </div>
      <div class="flex flex-wrap gap-2">
        <strong class="font-bold mr-2">Tags:</strong>
        <span
          v-for="tag in meal.strTags ? meal.strTags.split(',') : []"
          :key="tag"
          class="bg-purple-200 rounded px-1 py-1 text-xs"
        >
          {{ tag.trim() }}
        </span>
      </div>
    </div>

    <div class="my-3">{{ meal.strInstructions }}</div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul>
          <li v-for="(i, index) in 20" :key="index">
            {{ getIngredient(index + 1) }}
          </li>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2">Measurements</h2>
        <ul>
          <li v-for="(i, index) in 20" :key="index">
            {{ getMeasurement(index + 1) }}
          </li>
        </ul>
      </div>
    </div>

    <div class="mt-4 flex flex-wrap justify-end gap-3">
      <a
        :href="meal.strYoutube"
        target="_blank"
        class="px-3 py-2 rounded border-2 bg-red-600 hover:bg-red-400 transition-colors border-none text-white"
      >
        YouTube
      </a>
      <a
        :href="meal.strSource"
        target="_blank"
        class="px-3 py-2 rounded border-2 bg-purple-600 hover:bg-purple-300 hover:text-white transition-colors border-none text-white"
      >
        View Original Source
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";

const meal = ref({});
const route = useRoute();

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});

function getIngredient(index) {
  return meal.value[`strIngredient${index}`] || "";
}

function getMeasurement(index) {
  return meal.value[`strMeasure${index}`] || "";
}
</script>

<style lang="scss" scoped></style>
