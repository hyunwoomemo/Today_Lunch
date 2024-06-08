import request from "./axios";

export const authApi = {
  login: (data) => request.post("/auth/login", data),
  register: (data) => request.post("/auth/register", data),
  check: () => request.get("/auth/check"),
  refresh: () => request.get("/auth/refresh"),
  info: () => request.get("/auth/info"),
};

export const shopApi = {
  addShop: (data) => request.post("/shop/add", data),
  list: () => request.get("/shop/list"),
};

export const kakaoApi = {
  search: (keyword) => request.kakaoGet(`https://dapi.kakao.com/v2/local/search/keyword?query=${keyword}`),
};

export const recordApi = {
  addRecord: (data) => request.post("/record/addRecord", data),
  getRecord: () => request.get("/record/getRecord"),
};
