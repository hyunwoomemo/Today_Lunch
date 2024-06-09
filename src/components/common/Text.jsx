import React from "react";
import { View, Text as BasicText } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

const Text = ({ children, color, size, bold }) => {
  const { styles } = useStyles(stylesheet);

  return <BasicText style={styles.text(color, size, bold)}>{children}</BasicText>;
};

export default Text;

const stylesheet = createStyleSheet((theme) => ({
  text: (color, size, bold) => {
    return {
      color: color,
      fontSize: size,
      fontWeight: bold ? "bold" : "normal",
    };
  },
}));
