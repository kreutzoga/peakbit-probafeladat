<template>
  <div>
    <h1 class="px-8 pt-8 text-4xl font-bold">Legfrissebb cikkjeink</h1>
    <div class="grid grid-cols-4 gap-5 px-8 py-6">
      <div v-for="p in blogPosts?.list">
        <BlogPostCard :blogPost="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: blogPosts } = await useFetch(
  "https://trial.peakbit.tech/api/articles/list",
  {
    method: "get",
    query: { page: 1, pageSize: 100 },
  }
);

if (!blogPosts?.value?.list) {
  throw createError({ fatal: true });
}
</script>
