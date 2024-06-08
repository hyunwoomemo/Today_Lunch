import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import Input from "../../../components/common/Input";
import moment from "moment";

const AddDate = ({ handleChangeValues, values }) => {
  return (
    <View>
      <Pressable
        onPress={() => {
          handleChangeValues("date", new Date());
          handleChangeValues("page", "shop");
        }}
      >
        <Text>지금</Text>
      </Pressable>
      <Input placeholder="날짜" defaultValue={values.date && moment(values.date).format("YYYY-MM-DD HH:mm:ss")} onChangeText={(text) => handleChangeValues("date", text)} />
    </View>
  );
};

export default AddDate;
