<template>
  <NuxtLink :to="`/blog/${blogPost.id}`" :key="blogPost.id">
    <div>
      <div class="image-container">
        <img
          :src="blogPost.imageUrl || '~/assets/images/placeholder.png'"
          alt="blog post image"
          class="blog-image"
        />
        <ReadingTime
          :time="blogPost.readingTime"
          :readingTimeLabel="false"
          class="reading-time"
        />
      </div>
      <p class="font-bold m-4">{{ blogPost.title }}</p>
    </div>
  </NuxtLink>
</template>

<script setup>
const { blogPost } = defineProps(["blogPost"]);
</script>

<style scoped>
.image-container {
  position: relative;
}
.reading-time {
  position: absolute;
  top: 10px;
  right: 10px;
}
.blog-image {
  width: 400px;
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
}
</style>
