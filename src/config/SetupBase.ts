import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL!;

const headers = {
  "Content-Type": "application/json",
};

export const http = axios.create({
  baseURL: BASE_URL,
  headers,
});

const axiosInstances = [http];

axiosInstances.forEach((instance) => {
  instance.interceptors.response.use(
    async (response) => {
      return response;
    },
    (error) => {
      console.error("Error", error);

      return Promise.reject(error?.response ?? error);
    },
  );
});
