import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "./Component/Header";

import { StatusBar } from "expo-status-bar";
import Body from "./StreamComp/Body";

const Stream = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Header navigation={navigation} tittle="Stream" show="none" Shop="none" />
      <Body navigation={navigation} />
    </View>
  );
};

export default Stream;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
