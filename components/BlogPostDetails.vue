<template>
  <div>
    <div class="relative w-full px-8">
      <img
        :src="blogPost.imageUrl || '~/assets/images/placeholder.png'"
        alt="blog post image"
        class="rounded-[28px] w-full"
      />
      <ReadingTime
        :time="blogPost.readingTime"
        :readingTimeLabel="true"
        class="absolute bottom-3 right-96"
      />
    </div>
    <h2 class="font-bold text-4xl w-6/12 mx-auto my-10">
      {{ blogPost.title }}
    </h2>
    <div v-html="blogPost.description" class="w-6/12 mx-auto my-5"></div>
  </div>
</template>

<script setup>
const { id } = useRoute().params;

const fetchDataWithDelay = async () => {
  const token = useCookie("token");

  const headers = {
    "X-TOKEN": token,
  };

  return new Promise(async (resolve, reject) => {
    setTimeout(async () => {
      try {
        const { data: blogPost, error } = await useFetch(
          `https://trial.peakbit.tech/api/articles/get/${id}`,
          { headers },
          { key: id }
        );

        if (error?.value?.statusCode === 401) {
          await useRefreshToken();
          await clearError();
          await fetchDataWithDelay();
        } else if (!blogPost.value) {
          throw createError({ fatal: true });
        }

        resolve(blogPost);
      } catch (error) {
        reject(error);
      }
    }, 1000); // Betettem 1 másodperc timeoutout, csak hogy látszódjon a loading
  });
};

const blogPost = await fetchDataWithDelay();
</script>

<style scoped></style>
