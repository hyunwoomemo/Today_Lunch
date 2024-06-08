import React, { useCallback, useEffect, useState } from "react";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import Input from "../../components/common/Input";
import moment from "moment";
import { shopApi } from "../../api";
import AddDate from "./addRecord/AddDate";
import AddShop from "./addRecord/AddShop";
import AddMenu from "./addRecord/AddMenu";
import AddReview from "./addRecord/AddReview";
import { useQuery } from "@tanstack/react-query";

const AddRecord = ({ setIsAddRecord }) => {
  const [values, setValues] = useState({ page: "date" });

  const handleChangeValues = (type, value) => {
    setValues((prev) => ({ ...prev, [type]: value }));
  };

  const handleAddShop = async () => {
    const res = await shopApi.addShop({ name: values.shop, address: values.address });

    console.log("addShop res", res);
  };

  const { data: shopData, isFetching } = useQuery({ queryKey: ["shopList"], queryFn: () => shopApi.list() });

  console.log("🔥", shopData, isFetching);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Pressable onPress={() => setIsAddRecord(false)}>
        <Text>닫기</Text>
      </Pressable>
      {values.page === "date" && <AddDate values={values} handleChangeValues={handleChangeValues} />}
      {values.page === "shop" && <AddShop shopData={shopData?.DATA} values={values} handleAddShop={handleAddShop} handleChangeValues={handleChangeValues} />}
      {values.page === "menu" && <AddMenu handleChangeValues={handleChangeValues} />}
      {values.page === "review" && <AddReview handleChangeValues={handleChangeValues} values={values} setIsAddRecord={setIsAddRecord} />}
    </View>
  );
};

export default AddRecord;
