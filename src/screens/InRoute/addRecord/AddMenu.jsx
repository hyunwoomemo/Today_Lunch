import React from "react";
import { View, Text, Pressable } from "react-native";
import Input from "../../../components/common/Input";

const AddMenu = ({ handleChangeValues }) => {
  return (
    <View>
      <Input placeholder="메뉴 이름" onChangeText={(text) => handleChangeValues("menu", text)} />
      <Input placeholder="메뉴 가격" onChangeText={(text) => handleChangeValues("price", text)} />
      <Pressable onPress={() => handleChangeValues("page", "review")}>
        <Text>다음</Text>
      </Pressable>
    </View>
  );
};

export default AddMenu;
