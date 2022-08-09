import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Body from "./LoginComp/Body";

import { StatusBar } from "expo-status-bar";
const AdminLogin = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Body navigation={navigation} />
    </View>
  );
};

export default AdminLogin;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
