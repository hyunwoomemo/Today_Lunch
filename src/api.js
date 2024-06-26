import request from "./axios";

export const authApi = {
  login: (data) => request.post("/auth/login", data),
  register: (data) => request.post("/auth/register", data),
  check: () => request.get("/auth/check"),
  refresh: () => request.get("/auth/refresh"),
  info: () => request.get("/auth/info"),
  kakaoLogin: (data) => request.post("/auth/kakaoLogin", data),
};

export const shopApi = {
  addShop: (data) => request.post("/shop/add", data),
  list: ({ user_id }) => request.get(`/shop/list/${user_id}`),
  getData: ({ user_id }) => request.get(`/shop/getData/${user_id}`),
};

export const kakaoApi = {
  search: (keyword) => request.kakaoGet(`https://dapi.kakao.com/v2/local/search/keyword?query=${keyword}`),
};

export const recordApi = {
  addRecord: (data) => request.post("/record/addRecord", data),
  getRecord: () => request.get("/record/getRecord"),
};

export const groupApi = {
  create: (data) => request.post("/group/createGroup", data),
  list: (userId) => request.get(`/group/getGroupList/${userId}`),
};
