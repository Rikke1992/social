import axios from "axios";

const Instanse = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "2a020f04-e4c5-4e0e-aaa6-426dfac15e2d",
  },
});

export const onPageChangedAxios = (pageNumber = 1, pageSize = 10) => {
  console.log(pageNumber, pageSize);
  return Instanse.get(`users?page=${pageNumber}&count=${pageSize}`).then(
    (response) => {
      console.log(response);
      return response.data;
    }
  );
};

export const componentDidMountAxios = (currentPage = 1, pageSize = 10) => {
  return Instanse.get(`users?page=${currentPage}&count=${pageSize}`).then(
    (response) => {
      return response.data;
    }
  );
};
