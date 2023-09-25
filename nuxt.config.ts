// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  plugins: [{ src: "~/plugins/lottie", mode: "client" }],
  app: {
    head: {
      title: "PeakBit próbafeladat",
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Poppins",
        },
      ],
    },
  },
  ssr: true,
});
