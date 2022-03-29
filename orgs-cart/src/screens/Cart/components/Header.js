import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";

import { CustomText } from "../../../components/Text";

import topo from "../../../../assets/topo.png";

const width = Dimensions.get("screen").width;

export function Header({ title }) {
  return (
    <>
      <Image source={topo} style={styles.top} />

      <CustomText style={styles.title}>{title}</CustomText>
    </>
  );
}

const styles = StyleSheet.create({
  top: {
    width: "100%",
    height: (578 / 768) * width,
  },
  title: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    lineHeight: 26,
    padding: 20,
    color: "white",
    fontWeight: "bold",
  },
});
