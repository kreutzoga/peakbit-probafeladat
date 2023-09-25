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
    query: { page: 1, pageSize: 12 },
  }
);

if (!blogPosts?.value?.list) {
  throw createError({ fatal: true });
}

let currentPage = 1;

async function loadMorePosts() {
  const { data: moreBlogPosts } = await useFetch(
    "https://trial.peakbit.tech/api/articles/list",
    {
      method: "get",
      query: { page: currentPage + 1, pageSize: 12 },
    }
  );

  if (moreBlogPosts.value.list) {
    blogPosts.value.list.push(...moreBlogPosts.value.list);
    currentPage++;
  }
}

window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    if (currentPage < blogPosts.value.meta.pageCount) {
      loadMorePosts();
    }
  }
});
</script>
