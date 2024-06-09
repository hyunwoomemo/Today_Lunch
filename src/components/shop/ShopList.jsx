import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useCallback } from "react";
import { View, FlatList } from "react-native";
import Text from "../common/Text";

const ShopList = ({ data }) => {
  const shopRenderItem = useCallback(
    ({ item }) => {
      return (
        <View>
          <Text>{item.name}</Text>
          <Text>{item.address}</Text>
          <Text>{item.average_rating}</Text>
          <Text>{item.total_visits}</Text>
        </View>
      );
    },
    [data]
  );

  return (
    <View>
      <FlatList data={data} renderItem={shopRenderItem} keyExtractor={(item) => item.shop_id} />
    </View>
  );
};

export default ShopList;
