<template>
  <div>
    <header class="bg-white shadow-md px-8">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/">
          <img src="~/assets/images/p_logo.png" alt="PeakBit logo" />
        </NuxtLink>
        <ul class="flex items-center gap-20">
          <li>
            <NuxtLink to="/menu1">Menüpont</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/blog">Blog</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/menu2">Menüpont</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/menu3">Menüpont</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<script setup>
const tokenCookie = useCookie("token");

if (!tokenCookie?.value?.length) {
  const { data: uuidToken } = await useFetch(
    "https://trial.peakbit.tech/api/token/generate/WEB",
    { method: "post" }
  );

  tokenCookie.value = uuidToken._rawValue.token;
}
</script>

<style scoped>
.router-link-active {
  color: red;
  font-weight: bold;
}
li:hover {
  color: rgb(0, 0, 0);
  font-weight: bold;
}
</style>
