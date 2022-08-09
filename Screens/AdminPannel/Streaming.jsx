import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Body from "./Streaming/Body";
import { StatusBar } from "expo-status-bar";
const Streaming = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Body navigation={navigation} />
    </View>
  );
};

export default Streaming;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
