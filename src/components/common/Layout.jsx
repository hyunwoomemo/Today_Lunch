import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

const Layout = ({ children }) => {
  const { styles } = useStyles(stylesheet);

  return <View style={styles.container}>{children}</View>;
};

export default Layout;

const stylesheet = createStyleSheet((theme) => ({
  container: {
    padding: 10,
  },
}));
