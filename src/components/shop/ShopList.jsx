import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useCallback } from "react";
import { View, FlatList } from "react-native";
import Text from "../common/Text";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import moment from "moment";

const ShopList = ({ data }) => {
  const { styles } = useStyles(stylesheet);

  const shopRenderItem = useCallback(
    ({ item }) => {
      return (
        <View style={styles.container}>
          <View style={styles.title}>
            <Text size={18}>{item.name}</Text>
          </View>
          <View style={styles.address}>
            <Text size={14} color={"gray"}>
              {moment(item.visit_date).format("YYYY-MM-DD")} 방문
            </Text>
            <Text size={14} color={"gray"}>
              {item.address}
            </Text>
          </View>
          <View style={styles.review}>
            <StarRatingDisplay starSize={20} emptyColor="white" rating={item.average_rating} />
          </View>
          <Text color={"gray"} size={14}>
            리뷰 {item.total_visits}개
          </Text>
          {/* <Text>{item.star_rating}</Text> */}
        </View>
      );
    },
    [data]
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={shopRenderItem}
        keyExtractor={(item) => item.shop_id}
        ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: "lightgray", marginVertical: 15 }}></View>}
      />
    </View>
  );
};

export default ShopList;

const stylesheet = createStyleSheet((theme) => ({
  container: {
    gap: 5,
  },
  title: {
    flexDirection: "row",
    gap: 10,
  },
  review: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "space-between",
  },
  address: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
}));
