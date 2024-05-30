<template>
  <div class="p-8 pb-0 text-purple-500 flex items-center">
    <h1 class="text-4xl font-bold mb-4">Random Meals 🌠</h1>
    <button class="ml-auto cursor-pointer" @click="refresh">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-8"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
        />
      </svg>
    </button>
  </div>

  <Meals :meals="meals" />
  <SkeletonLoader v-if="isLoading" />
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient";
import Meals from "../components/Meals.vue";
import SkeletonLoader from "../components/SkeletonLoader.vue";

const meals = ref([]);
const isLoading = ref(false);

const refresh = async () => {
  meals.value = [];
  isLoading.value = true;
  for (let i = 0; i < 4; i++) {
    await axiosClient
      .get(`random.php`)
      .then(({ data }) => meals.value.push(data.meals[0]));
  }
  isLoading.value = false;
};

onMounted(async () => {
  refresh();
});
</script>
