<template>
  <NuxtLayout :name="default" />
  <div class="mt-7 mx-auto text-center">
    <img
      src="~/assets/icons/magnifier.svg"
      alt="magnifier icon"
      class="mx-auto"
    />
    <p class="mt-7 font-bold text-xl mt-8">Valami hiba történt!</p>
    <p class="mt-2 text-lg">
      Kérjük, győződj meg róla, hogy az internetkapcsolattal minden rendben
      van-e.
    </p>
    <button class="btn flex items-center mx-auto mt-10" @click="refreshPage">
      <img src="~/assets/icons/reload.svg" alt="reload icon" class="mr-2" />
      <span class="text-lg">Újratöltés</span>
    </button>
  </div>
</template>

<script setup>
const refreshPage = async () => {
  await refreshNuxtData();
  await clearError();
};
</script>
