import React, { useCallback } from "react";
import { View, FlatList } from "react-native";
import Text from "../common/Text";

const RecordList = ({ data }) => {
  const recordRenderItem = useCallback(
    ({ item }) => {
      return (
        <View>
          <Text>{item.name}</Text>
          <Text>{item.address}</Text>
          <Text>{item.star_rating}</Text>
          <Text>{item.review}</Text>
          <Text>{item.visit_date}</Text>
        </View>
      );
    },
    [data]
  );

  return (
    <View>
      <FlatList data={data} renderItem={recordRenderItem} keyExtractor={(item) => `${item.visit_date}`} />
    </View>
  );
};

export default RecordList;
