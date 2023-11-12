import axios from "axios";

export const BASE_URL = "https://elearningnew.cybersoft.edu.vn/";
export const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwOCIsIkhldEhhblN0cmluZyI6IjA3LzAzLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwOTc2OTYwMDAwMCIsIm5iZiI6MTY4Njc2MjAwMCwiZXhwIjoxNzA5OTE3MjAwfQ.KMixzquIcyG1HcsZ_iekv3cHfqWMebGVfzp349mNosg";

export const https = axios.create({
  baseURL: BASE_URL,
  headers: {
    TokenCybersoft: TOKEN_CYBERSOFT,
    // Authorization: "Bearer " + userLocalStorage.get()?.accessToken,
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoibmFtbmFtIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiSFYiLCJuYmYiOjE2OTk3NjYwNzksImV4cCI6MTY5OTc2OTY3OX0.7Hf9vRUwIv8EaROptFfLtWfqv2x-Ddv99SHqRdm6Ih0"
  },
});

https.interceptors.request.use(
  function (config) {
    // store.dispatch(setLoadingOn());
    // console.log("api request");
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

https.interceptors.response.use(
  function (response) {
    // store.dispatch(setLoadingOff());

    // console.log("api respone");
    return response;
  },
  function (error) {
    // store.dispatch(setLoadingOff());
    return Promise.reject(error);
  }
);
