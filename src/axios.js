import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { config } from "./config";

axios.defaults.baseURL = config.API_BASE_URL;

async function getToken() {
  return await AsyncStorage.getItem("token");
}

async function getRefreshToken() {
  return await AsyncStorage.getItem("refresh_token");
}

// 요청 인터셉터: 모든 요청에 대해 처리
axios.interceptors.request.use(async (config) => {
  const token = await getToken();
  const refreshToken = await getRefreshToken();
  const parseToken = token
    ?.split("")
    ?.filter((v) => v !== '"')
    ?.join("");

  if (token) {
    config.headers.Authorization = `Bearer ${parseToken}`;
    config.headers.refresh = `${refreshToken}`;
  } else {
  }

  return config;
});

// 응답 인터셉터: 모든 응답에 대해 처리
axios.interceptors.response.use(onFulfil);
// axios.interceptors.response.use(onFulfil, async (error) => {
//   if (error.response?.status === 401) {
//     console.log("로그인 만료!!!");

//     // removeStorage("user");
//     // removeStorage("token");
//     // // setUser({});
//     // OneSignal.logout();
//     // NavigationContainerRef.reset({
//     //   routes: [
//     //     {
//     //       name: "login",
//     //     },
//     //   ],
//     // });
//   }
// });

const onFulfil = async (response) => {
  return response;
};

const onReject = async (error) => {
  console.log("error!!!!!", error.response?.status);
  console.log("error!!!!!", error.response?.data?.result);
  Alert.alert("error");
};

// axios.interceptors.response.use(async (error) => {
//   console.log(error);
// });

const responseBody = (response) => response?.data;

const request = {
  get: (url) => axios.get(url).then(responseBody),
  kakaoGet: (url) => axios.get(url, { headers: { Authorization: "KakaoAK d4473510fc9ab9a5b4dac1b67a1fde33" } }).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),

  postXf: (url, body) =>
    axios
      .post(url, body, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
      })
      .then(responseBody),
  registPost: (url, body) =>
    axios
      .post(url, body, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(responseBody),
  joinPost: (url, body) =>
    axios
      .post(url, body, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(responseBody),
  editPost: (url, body) =>
    axios
      .post(url, body, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(responseBody),
};

export default request;
