import axios from "axios";
import { userLocalStorage } from "./localService";
import { store } from "..";
import { setSpinnerState } from "../redux/spinnerSlice";

export const BASE_URL = "https://elearningnew.cybersoft.edu.vn/";
export const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwOCIsIkhldEhhblN0cmluZyI6IjA3LzAzLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwOTc2OTYwMDAwMCIsIm5iZiI6MTY4Njc2MjAwMCwiZXhwIjoxNzA5OTE3MjAwfQ.KMixzquIcyG1HcsZ_iekv3cHfqWMebGVfzp349mNosg";

export const https = axios.create({
  baseURL: BASE_URL,
  headers: {
    TokenCybersoft: TOKEN_CYBERSOFT,
    Authorization: userLocalStorage.get()?.accessToken,
  },
});

https.interceptors.request.use(
  function (config) {
    store.dispatch(setSpinnerState(true));
    // console.log("api request");
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

https.interceptors.response.use(
  function (response) {
    store.dispatch(setSpinnerState(false));

    // console.log("api respone");
    return response;
  },
  function (error) {
    store.dispatch(setSpinnerState(false));
    return Promise.reject(error);
  }
);
