import React from "react";
import { CustomText } from "../../../components/Text";

import { Image, StyleSheet, View } from "react-native";

export function Item({ item: { name, image } }) {
  return (
    <View style={styles.item}>
      <Image source={image} style={styles.image} />

      <CustomText style={styles.text}>{name}</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ececec",
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: "center",
  },
  image: {
    width: 46,
    height: 46,
  },
  text: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    color: "#464646",
  },
});
