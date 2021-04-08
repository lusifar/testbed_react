import axios, { AxiosRequestConfig } from "axios";

const requestConfig: AxiosRequestConfig = {
  baseURL: "https://burger-builder-6e813-default-rtdb.firebaseio.com/",
};

const instance = axios.create(requestConfig);

export default instance;
