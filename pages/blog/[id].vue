<template>
  <Suspense>
    <template #default>
      <BlogPostDetails />
    </template>
    <template #fallback>
      <div class="flex justify-center">
        <div ref="animationElement" class="w-28 h-28 mt-60" />
      </div>
    </template>
  </Suspense>
</template>

<script setup>
import Lottie from "lottie-web";

const animationElement = ref(null);

onMounted(() => {
  Lottie.loadAnimation({
    container: animationElement.value,
    loop: true,
    autoplay: true,
    path: "/animations/loading.json",
  });
});
</script>

<style scoped></style>
