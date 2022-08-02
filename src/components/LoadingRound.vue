<template>
  <span v-if="store.isLoading" class="loading absolute left-2/4 top-5 -mx-12 block w-24 h-24 rounded-full border-8 border-indigo-800"></span>
</template>

<script setup lang="ts">
  import {useShortStore} from "@/stores/shortLinkStore";
  const store = useShortStore();
</script>

<style scoped>
.loading {
  border-top-color: transparent;
  animation: 1s linear rotate-round infinite;
}

@keyframes rotate-round {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>