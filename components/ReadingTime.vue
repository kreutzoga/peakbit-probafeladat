<template>
  <div
    class="w-{{ readingTimeLabel ? 40 : 20 }} h-8 bg-red-500 rounded-md flex items-center px-2 "
  >
    <img src="~/assets/icons/timer.svg" alt="reload icon" class="mr-1" />
    <p v-if="readingTimeLabel" class="text-white text-xs mr-1">
      {{ readingTimeLabel ? "Olvasási idő: " : "" }}
    </p>
    <p class="text-white text-xs">{{ time }} perc</p>
  </div>
</template>

<script setup>
const { time, readingTimeLabel } = defineProps(["time", "readingTimeLabel"]);
</script>

<style scoped></style>
