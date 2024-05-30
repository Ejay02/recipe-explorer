<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-purple-500">
      Search Meals by Letter
    </h1>
  </div>
  <div class="flex flex-wrap gap-3 mt-2 justify-center">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters.split('')"
      :key="letter"
      :class="{
        ' text-2xl flex items-center justify-center font-bold text-gray-700 transition-transform transform hover:scale-125 hover:text-purple-500': true,
        'text-purple-500 animate-pulse': letter === currentLetter,
      }"
      >{{ letter }}</router-link
    >
  </div>

  <div>
    <div v-if="meals.length === 0 && !loading" class="p-8">
      <Empty />
    </div>

    <Meals :meals="meals" v-else />
  </div>
</template>

<script setup>
import store from "../store";
import { useRoute } from "vue-router";
import Empty from "../components/Empty.vue";
import Meals from "../components/Meals.vue";
import { computed, onMounted, watch } from "vue";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const meals = computed(() => store.state.mealsByLetter);
const currentLetter = computed(() => route.params.letter);

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>
<style scoped>
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.animate-pulse {
  animation: pulse 1s infinite;
}
</style>
