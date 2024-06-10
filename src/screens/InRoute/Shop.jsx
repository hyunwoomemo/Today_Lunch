import React, { useCallback } from "react";
import { View, Text } from "react-native";
import ShopList from "../../components/shop/ShopList";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useFocusEffect } from "@react-navigation/native";
import Layout from "../../components/common/Layout";
import { shopApi } from "../../api";
import { useAtomValue } from "jotai";
import { authAtom } from "../../store/auth";

const Shop = () => {
  const auth = useAtomValue(authAtom);

  const queryClient = useQueryClient();
  const { data: shopData } = useQuery({ queryKey: ["myShopData", auth.info.user_id], queryFn: () => shopApi.getData({ user_id: auth.info.user_id }) });

  useFocusEffect(
    useCallback(() => {
      console.log("123123", shopData);
      queryClient.invalidateQueries({ queryKey: ["myShopData", auth.info.user_id] });
    }, []) 
  );

  return (
    <Layout>
      <ShopList data={shopData?.DATA} />
    </Layout>
  );
};

export default Shop;
