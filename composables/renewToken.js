const tokenCookie = useCookie("token");

const headers = {
  "X-TOKEN": tokenCookie.value,
};

export const useRefreshToken = async () => {
  await useFetch("https://trial.peakbit.tech/api/token/renew", {
    method: "PUT",
    headers,
  });
};
