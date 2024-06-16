import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { View, Text, Pressable, Modal, SafeAreaView, FlatList } from "react-native";
import { authAtom } from "../../store/auth";
import { removeStorage } from "../../../utils/asyncStorage";
import AddRecord from "./AddRecord";
import { useQuery } from "@tanstack/react-query";
import { authApi, recordApi } from "../../api";
import Layout from "../../components/common/Layout";
import FastImage from "react-native-fast-image";

const Home = ({ navigation }) => {
  const [auth, setAuth] = useAtom(authAtom);

  return (
    <Layout>
      <Pressable
        onPress={() => {
          removeStorage("token");
          removeStorage("refresh_token");
          setAuth({ ...auth, isLoggedIn: false });
        }}
      >
        <Text>로그아웃</Text>
      </Pressable>
      <FastImage source={{ uri: auth.info.profile_image }} style={{ width: 50, height: 50, borderRadius: 50 }} resizeMode="cover" />
    </Layout>
  );
};

export default Home;
