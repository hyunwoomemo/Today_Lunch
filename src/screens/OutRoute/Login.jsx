import axios from "axios";
import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { authApi } from "../../api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAtom } from "jotai";
import { authAtom } from "../../store/auth";
import { setStorage } from "../../../utils/asyncStorage";
import Text from "../../components/common/Text";
import Input from "../../components/common/Input";

const Login = ({ navigation }) => {
  const [values, setValues] = useState({});
  const [auth, setAuth] = useAtom(authAtom);

  const handleChangeText = (type, value) => {
    setValues((prev) => ({ ...prev, [type]: value }));
  };

  const handleLogin = async () => {
    console.log("click");
    const res = await authApi.login({ id: values.id, password: values.password });
    console.log("resresresres", res, typeof res.DATA.id);

    if (res.CODE === "AL000") {
      setStorage("token", res.TOKEN.accessToken);
      setStorage("refresh_token", res.TOKEN.refreshToken);
      setStorage("userId", String(res.DATA.id));
      setAuth({
        ...auth,
        isLoggedIn: true,
        id: res.DATA.id,
      });
    }
  };

  console.log("auth,", auth);

  return (
    <View style={{ flex: 1 }}>
      <Text>Login</Text>
      <Input placeholder="id" onChangeText={(text) => handleChangeText("id", text)} />
      <Input placeholder="password" secureTextEntry onChangeText={(text) => handleChangeText("password", text)} />
      <Button title="로그인" onPress={handleLogin} />
      <Button title="회원가입" onPress={() => navigation.navigate("Join")} />
    </View>
  );
};

export default Login;
