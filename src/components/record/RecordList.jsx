import React, { useCallback } from "react";
import { View, FlatList } from "react-native";
import Text from "../common/Text";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import moment from "moment";

const RecordList = ({ data }) => {
  const { styles } = useStyles(stylesheet);

  const recordRenderItem = useCallback(
    ({ item }) => {
      return (
        <View style={styles.container}>
          <View style={styles.title}>
            <Text size={18}>{item.name}</Text>
          </View>
          <Text size={14} color={"gray"}>
            {item.address}
          </Text>
          <View>
            <StarRatingDisplay starSize={20} emptyColor="white" rating={item.star_rating} />
            <View style={styles.review}>
              <Text>{item.review}</Text>
              <Text size={14} color={"gray"}>
                {moment(item.visit_date).format("YYYY-MM-DD HH:mm")}
              </Text>
            </View>
          </View>
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
        renderItem={recordRenderItem}
        keyExtractor={(item) => `${item.visit_date}`}
        contentContainerStyle={{ gap: 0 }}
        ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: "lightgray", marginVertical: 15 }}></View>}
      />
    </View>
  );
};

export default RecordList;

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
  },
}));
