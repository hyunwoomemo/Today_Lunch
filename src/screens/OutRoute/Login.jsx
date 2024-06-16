import axios from "axios";
import React, { useRef, useState } from "react";
import { View, TextInput, Button } from "react-native";
import { authApi } from "../../api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAtom } from "jotai";
import { authAtom } from "../../store/auth";
import { setStorage } from "../../../utils/asyncStorage";
import Text from "../../components/common/Text";
import Input from "../../components/common/Input";

import { login, logout, getProfile as getKakaoProfile, shippingAddresses as getKakaoShippingAddresses, unlink } from "@react-native-seoul/kakao-login";

const Login = ({ navigation }) => {
  const [values, setValues] = useState({});
  const [auth, setAuth] = useAtom(authAtom);

  const a = useRef();

  const handleChangeText = (type, value) => {
    setValues((prev) => ({ ...prev, [type]: value }));
  };

  const handleLogin = async () => {
    console.log("click");
    const res = await authApi.login({ id: values.id, password: values.password });
    console.log("reawaitsresresres", res);

    if (res.CODE === "AL000") {
      setStorage("token", res.TOKEN.accessToken);
      setStorage("refresh_token", res.TOKEN.refreshToken);
      setStorage("userId", String(res.DATA.id));
      setAuth({
        ...auth,
        isLoggedIn: true,
        info: res.DATA.info,
      });
    }
  };

  console.log("auth,", auth);

  const signInWithKakao = async () => {
    try {
      const token = await login();
      console.log(token);

      const res = await authApi.kakaoLogin({ accessToken: token.accessToken, refreshToken: token.refreshToken });

      console.log("resresresresresresres", res);

      if (res) {
        a.current = res.message;
      }

      if (res.CODE === "KRL000" || res.CODE === "KL000") {
        setStorage("token", res.TOKEN.accessToken);
        setStorage("refresh_token", res.TOKEN.refreshToken);
        setStorage("userId", String(res.DATA.info.user_id));
        setAuth({
          ...auth,
          isLoggedIn: true,
          info: res.DATA.info,
        });
      }
    } catch (err) {
      console.error("login err", err);
    }
  };

  const getProfile = async () => {
    try {
      const profile = await getKakaoProfile();

      console.log(profile);
    } catch (err) {
      console.error("signOut error", err);
    }
  };

  const unlinkKakao = async () => {
    try {
      const message = await unlink();

      console.log(message);
    } catch (err) {
      console.error("signOut error", err);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Input placeholder="id" onChangeText={(text) => handleChangeText("id", text)} />
      <Input placeholder="password" secureTextEntry onChangeText={(text) => handleChangeText("password", text)} />
      <Text>{a.current}</Text>
      <Button title="로그인" onPress={handleLogin} />
      <Button title="회원가입" onPress={() => navigation.navigate("Join")} />
      <Button title="카카오로그인" onPress={signInWithKakao} />
      <Button title="카카오프로필" onPress={getProfile} />
      <Button title="카카오로그아웃" onPress={unlinkKakao} />
    </View>
  );
};

export default Login;
