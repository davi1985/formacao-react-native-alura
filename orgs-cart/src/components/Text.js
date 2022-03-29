import React from "react";
import { Text, StyleSheet } from "react-native";

export function CustomText({ children, style }) {
  let styleDefault = styles.text;

  if (style?.fontWeight === "bold") {
    styleDefault = styles.textBold;
  }

  return <Text style={[style, styleDefault]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "MontserratRegular",
    fontWeight: "normal",
  },
  textBold: {
    fontFamily: "MontserratBold",
    fontWeight: "normal",
  },
});
