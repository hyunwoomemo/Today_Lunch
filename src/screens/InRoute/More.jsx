import React from "react";
import { Pressable, View } from "react-native";
import Layout from "../../components/common/Layout";
import Text from "../../components/common/Text";

const More = ({ navigation }) => {
  return (
    <Layout>
      <Text>More</Text>
      <Pressable onPress={() => navigation.navigate("GroupRoute")}>
        <Text>그룹</Text>
      </Pressable>
    </Layout>
  );
};

export default More;
