import React, { useEffect, useRef } from "react";
import { View, Text, Pressable } from "react-native";
import Input from "../../../components/common/Input";
import { useAtom, useAtomValue } from "jotai";
import { authAtom } from "../../../store/auth";
import { getStorage } from "../../../../utils/asyncStorage";
import { recordApi } from "../../../api";

const AddReview = ({ handleChangeValues, values, setIsAddRecord }) => {
  const auth = useAtomValue(authAtom);

  const handleAddRecord = async () => {
    recordApi.addRecord({ ...values, userId: auth.info.user_id }).then((res) => {
      if (res.CODE === "RA000") {
        setIsAddRecord(false);
      }
    });
  };

  return (
    <View>
      <Input placeholder="메뉴 별점" onChangeText={(text) => handleChangeValues("rating", text)} />
      <Input placeholder="메뉴 리뷰" onChangeText={(text) => handleChangeValues("review", text)} />
      <Pressable onPress={handleAddRecord}>
        <Text>저장</Text>
      </Pressable>
    </View>
  );
};

export default AddReview;
