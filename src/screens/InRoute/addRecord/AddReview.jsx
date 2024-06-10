import React, { useEffect, useRef } from "react";
import { View, Text, Pressable } from "react-native";
import Input from "../../../components/common/Input";
import { useAtom, useAtomValue } from "jotai";
import { authAtom } from "../../../store/auth";
import { getStorage } from "../../../../utils/asyncStorage";
import { recordApi } from "../../../api";
import StarRating from "react-native-star-rating-widget";
import { useQueryClient } from "@tanstack/react-query";

const AddReview = ({ handleChangeValues, values, setIsAddRecord }) => {
  const auth = useAtomValue(authAtom);
  const queryClient = useQueryClient();

  const handleAddRecord = async () => {
    recordApi.addRecord({ ...values, userId: auth.info.user_id }).then((res) => {
      if (res.CODE === "RA000") {
        setIsAddRecord(false);
      }
    });

    queryClient.invalidateQueries({ queryKey: ["getRecord"] });
  };

  return (
    <View>
      <StarRating onChange={(rating) => handleChangeValues("rating", rating)} rating={values.rating} enableHalfStar />

      <Input placeholder="메뉴 리뷰" onChangeText={(text) => handleChangeValues("review", text)} />
      <Pressable onPress={handleAddRecord}>
        <Text>저장</Text>
      </Pressable>
    </View>
  );
};

export default AddReview;
