import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Body from "./LoginComponents/Body";

import { StatusBar } from "expo-status-bar";
const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Body navigation={navigation} />
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
