import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "./IntroComponents/Header";
import Body from "./IntroComponents/Body";
import { StatusBar } from "expo-status-bar";
const Intro = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Header navigation={navigation} />
      <Body navigation={navigation} />
    </View>
  );
};

export default Intro;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
