import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Body from "./Registercomponent/Body";
import { StatusBar } from "expo-status-bar";
const Register = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Body navigation={navigation} />
    </View>
  );
};

export default Register;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
