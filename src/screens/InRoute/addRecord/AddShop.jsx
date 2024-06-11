import React, { useCallback, useEffect } from "react";
import { View, Pressable, FlatList } from "react-native";
import Input from "../../../components/common/Input";
import { useQuery } from "@tanstack/react-query";
import { kakaoApi } from "../../../api";
import axios from "axios";
import Text from "../../../components/common/Text";

const AddShop = ({ handleChangeValues, values, handleAddShop, shopData }) => {
  console.log("shopData", shopData);

  const shopRenderItem = useCallback(({ item, index }) => {
    return (
      <Pressable onPress={() => handlePressShopItem(item)} style={{ gap: 5 }}>
        <Text>{item.place_name}</Text>
        <Text color={"gray"}>{item.address_name}</Text>
      </Pressable>
    );
  }, []);

  const getSearchWord = async () => {
    const key = "KakaoAK d4473510fc9ab9a5b4dac1b67a1fde33";
    const query = encodeURIComponent(values.shop);
    const response = await fetch(`https://dapi.kakao.com/v2/local/search/keyword?query=${query}&category_group_code=FD6,CE7`, {
      method: "GET",
      headers: {
        Authorization: `${key}`,
      },
    });
    const json = await response.json();
    handleChangeValues("searchList", json?.documents);
  };

  useEffect(() => {
    getSearchWord();
  }, [values.shop]);

  const ListHeaderComponent = useCallback(() => {
    return (
      <>
        {shopData?.map((v) => (
          <Pressable
            onPress={() => {
              console.log("v", v);
              handlePressShopItem(v);
            }}
            key={v.shop_id}
            style={{ gap: 5 }}
          >
            <Text>{v.name}</Text>
            <Text color={"gray"}>{v.address}</Text>
          </Pressable>
        ))}
      </>
    );
  }, [shopData]);

  const handlePressShopItem = useCallback((item) => {
    handleChangeValues("shop", item.place_name || item.name);
    handleChangeValues("address", item.address_name || item.address);
    handleChangeValues("page", "menu");
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Input defaultValue={values.shop} placeholder="식당 이름" onChangeText={(text) => handleChangeValues("shop", text)} />
      {/* <Input defaultValue={values.address} placeholder="식당 주소" onChangeText={(text) => handleChangeValues("address", text)} /> */}
      <FlatList
        data={values.searchList}
        renderItem={shopRenderItem}
        keyExtractor={(item, index) => `${item.name}${index}`}
        ListHeaderComponent={ListHeaderComponent}
        ListHeaderComponentStyle={{ gap: 10 }}
        contentContainerStyle={{ gap: 10 }}
      />
      {/* <Pressable onPress={handleAddShop}>
        <Text>식당 추가</Text>
      </Pressable> */}
    </View>
  );
};

export default AddShop;
