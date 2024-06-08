import { useQuery } from "@tanstack/react-query";
import React from "react";
import { View, Text } from "react-native";
import { recordApi } from "../../api";
import RecordList from "../../components/record/RecordList";
import Layout from "../../components/common/Layout";

const Record = () => {
  const { data: recordData } = useQuery({ queryKey: ["getRecord"], queryFn: () => recordApi.getRecord() });

  console.log("123123", recordData);

  return (
    <Layout>
      <RecordList data={recordData?.DATA} />
    </Layout>
  );
};

export default Record;
