import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useCallback, useEffect } from "react";
import { View, Text } from "react-native";
import { recordApi } from "../../api";
import RecordList from "../../components/record/RecordList";
import Layout from "../../components/common/Layout";
import { useFocusEffect } from "@react-navigation/native";

const Record = () => {
  const queryClient = useQueryClient();
  const { data: recordData, isFetching, isRefetching } = useQuery({ queryKey: ["getRecord"], queryFn: () => recordApi.getRecord() });

  useFocusEffect(
    useCallback(() => {
      console.log("123123", recordData, isFetching, isRefetching);
      queryClient.invalidateQueries({ queryKey: ["getRecord"] });
    }, [])
  );

  return (
    <Layout>
      <RecordList data={recordData?.DATA} />
    </Layout>
  );
};

export default Record;
