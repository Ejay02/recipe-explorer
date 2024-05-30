<template>
  <a
    :href="href"
    target="_blank"
    class="px-3 py-2 rounded border-2 bg-red-600 hover:bg-red-400 transition-colors border-none text-white flex items-center"
  >
    <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zM9 15V8l8 3.5L9 15z"
      />
    </svg>
    <slot>YouTube</slot>
    </a
  >
</template>
<script setup>
const props = defineProps({
  href: String,
});
</script>
