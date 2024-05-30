<template>
  <div>
    <div v-if="loading" class="grid grid-cols-1 md:grid-cols-4 gap-5 p-8">
      <SkeletonLoader />
    </div>

    <div
      v-else-if="meals.length > 0 && !loading"
      class="grid grid-cols-1 md:grid-cols-4 gap-5 p-8"
    >
      <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import MealItem from "../components/MealItem.vue";
import SkeletonLoader from "../components/SkeletonLoader.vue";

const { meals } = defineProps({
  meals: {
    required: true,
    type: Array,
  },
});

const loading = ref(false);
</script>

<style lang="scss" scoped></style>
