import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "./Component/Header";
import Body from "./LiveComp/Body";
import { StatusBar } from "expo-status-bar";

const Live = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Header navigation={navigation} tittle="Live" show="none" Shop="none" />
      <Body navigation={navigation} />
    </View>
  );
};

export default Live;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
