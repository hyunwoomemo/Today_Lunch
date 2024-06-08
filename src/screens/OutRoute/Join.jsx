import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { authApi } from "../../api";
import Input from "../../components/common/Input";

const Join = ({ navigation }) => {
  const [values, setValues] = useState({});

  const handleJoin = async () => {
    try {
      const res = await authApi.register({ id: values.id, password: values.password });
      console.log(res);

      if (res.CODE === "AR000") {
        navigation.navigate("Login");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleChangeText = (type, value) => {
    setValues((prev) => ({ ...prev, [type]: value }));
  };

  return (
    <View>
      <Input placeholder="id" onChangeText={(text) => handleChangeText("id", text)} />
      <Input placeholder="password" onChangeText={(text) => handleChangeText("password", text)} secureTextEntry />
      <Button title="가입" onPress={handleJoin} />
    </View>
  );
};

export default Join;
