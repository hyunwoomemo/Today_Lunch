import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { View, Text, Pressable, Modal, SafeAreaView, FlatList } from "react-native";
import { authAtom } from "../../store/auth";
import { removeStorage } from "../../../utils/asyncStorage";
import AddRecord from "./AddRecord";
import { useQuery } from "@tanstack/react-query";
import { authApi, recordApi } from "../../api";
import Layout from "../../components/common/Layout";

const Home = ({ navigation }) => {
  const [auth, setAuth] = useAtom(authAtom);
  const [isAddRecord, setIsAddRecord] = useState(false);

  return (
    <Layout>
      <Pressable
        onPress={() => {
          removeStorage("token");
          setAuth({ ...auth, isLoggedIn: false });
        }}
      >
        <Text>로그아웃</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          setIsAddRecord(true);
        }}
      >
        <Text>기록 추가</Text>
      </Pressable>
      <Modal animationType="slide" visible={isAddRecord} onDismiss={() => setIsAddRecord(false)}>
        <SafeAreaView style={{ flex: 1 }}>
          <AddRecord setIsAddRecord={setIsAddRecord} />
        </SafeAreaView>
      </Modal>
    </Layout>
  );
};

export default Home;
