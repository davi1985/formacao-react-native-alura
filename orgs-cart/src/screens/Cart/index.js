import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { Header } from "./components/Header";

import { Details } from "./components/Details";
import { Item } from "./components/Item";
import { CustomText } from "../../components/Text";

export function Cart({ header, details, items }) {
  return (
    <>
      <FlatList
        data={items.list}
        renderItem={Item}
        keyExtractor={({ name }) => name}
        ListHeaderComponent={() => (
          <>
            <Header {...header} />

            <View style={styles.cart}>
              <Details {...details} />

              <CustomText style={styles.title}>{items.title}</CustomText>
            </View>
          </>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  cart: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  title: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 22,
  },
});
