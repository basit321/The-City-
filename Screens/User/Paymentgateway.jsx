import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "./Component/Header";
import { StatusBar } from "expo-status-bar";
import Body from "./Payment/Body";
const Payment = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Header
        navigation={navigation}
        tittle="Payment"
        show="flex"
        Shop="none"
      />
      <Body navigation={navigation} />
    </View>
  );
};

export default Payment;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
