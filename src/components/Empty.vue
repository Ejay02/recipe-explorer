<template>
  <div class="flex justify-center items-center h-full">
    <div
      class="flex flex-col items-center p-24 border border-gray-300 rounded-lg text-gray-600 bg-white shadow-2xl relative box-with-line"
    >
      <img src="/src/assets/786.gif" class="" />
      <span class="text-xl">Nothing here yet</span>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.box-with-line::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: rgb(192, 97, 192);
  border-radius: 2px;
}
</style>
