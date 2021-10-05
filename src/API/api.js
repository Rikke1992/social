import axios from "axios";

const Instanse = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "2a020f04-e4c5-4e0e-aaa6-426dfac15e2d",
  },
});

export const usersAPI = {
  onPageChangedAxios(pageNumber = 1, pageSize = 10) {
    return Instanse.get(`users?page=${pageNumber}&count=${pageSize}`).then(
      (response) => {
        return response.data;
      }
    );
  },
  componentDidMountAxios(currentPage = 1, pageSize = 10) {
    return Instanse.get(`users?page=${currentPage}&count=${pageSize}`).then(
      (response) => {
        return response.data;
      }
    );
  },
};
export const authAPI = {
  authMe() {
    return Instanse.get("auth/me").then((response) => {
      return response;
    });
  },
};
export const profileAPI = {
  profileGetUsers(userId) {
    return Instanse.get(`profile/  ${userId}`).then((respons) => {
      return respons;
    });
  },
  profilePutStatus(status) {
    return Instanse.put(`profile/status`, { status: status });
  },
  profileGetStatus(userId) {
    return Instanse.get(`profile/status/${userId}`).then((respons) => {
      return respons;
    });
  },
};
