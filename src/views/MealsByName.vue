<template>
  <div class="p-8 pb-0 relative">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-purple-200 w-full focus:border-purple-300 focus:ring-purple-300 pr-10 bg-white"
      placeholder="Search for Meals"
      @change="searchMeals"
    />
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
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { computed } from "@vue/reactivity";
import Meals from "../components/Meals.vue";
import Empty from "../components/Empty.vue";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
