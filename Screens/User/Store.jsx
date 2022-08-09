import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "./Component/Header";
import { StatusBar } from "expo-status-bar";
import Body from "./StoreComp/Body";

const Store = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Header navigation={navigation} tittle="Store" show="none" Shop="flex" />
      <Body navigation={navigation} />
    </View>
  );
};

export default Store;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
