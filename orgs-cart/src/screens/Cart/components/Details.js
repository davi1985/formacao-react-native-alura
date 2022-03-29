import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

import { CustomText } from "../../../components/Text";

export function Details({ name, farmName, logo, description, price, button }) {
  return (
    <>
      <CustomText style={styles.name}>{name}</CustomText>

      <View style={styles.farmInfo}>
        <Image source={logo} style={styles.logo} />
        <CustomText style={styles.farm}>{farmName}</CustomText>
      </View>

      <CustomText style={styles.description}>{description}</CustomText>

      <CustomText style={styles.price}>{price}</CustomText>

      <TouchableOpacity style={styles.button}>
        <CustomText style={styles.textButton}>{button}</CustomText>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontWeight: "bold",
  },
  farmInfo: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  logo: {
    width: 32,
    height: 32,
  },
  farm: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    fontWeight: "bold",
  },
  description: {
    color: "#a3a3a3",
    fontSize: 16,
    lineHeight: 26,
  },
  price: {
    color: "#2a9f85",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 42,
    marginTop: 8,
  },
  button: {
    marginTop: 16,
    backgroundColor: "#2a9f85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  textButton: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
});
