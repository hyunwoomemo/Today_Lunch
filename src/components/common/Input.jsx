import React from "react";
import { View, Text, TextInput } from "react-native";

const Input = ({ ...res }) => {
  return <TextInput spellCheck={false} autoCorrect={false} autoCapitalize={"none"} {...res}></TextInput>;
};

export default Input;
