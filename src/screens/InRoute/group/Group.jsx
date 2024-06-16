import React, { useState } from "react";
import { View, Text, Pressable, Button } from "react-native";
import Input from "../../../components/common/Input";
import { groupApi } from "../../../api";
import { useAtomValue } from "jotai";
import { authAtom } from "../../../store/auth";

const Group = () => {
  const [values, setValues] = useState({});
  const user = useAtomValue(authAtom);

  const handleCreateGroup = async () => {
    const groupName = values.groupName;
    const userId = user.info.user_id;

    const res = await groupApi.create({ groupName, userId });

    if (res.CODE === "GC000") {
      console.log("res", res);
      console.log("success !!");
    }
  };

  return (
    <View>
      <Text>Group</Text>
      <Pressable>
        <Text>그룹 만들기</Text>
      </Pressable>
      <Input placeholder="그룹명" onChangeText={(text) => setValues((prev) => ({ ...prev, ["groupName"]: text }))} />
      <Pressable onPress={handleCreateGroup}>
        <Text>만들기</Text>
      </Pressable>
    </View>
  );
};

export default Group;
