import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "./Component/Header";
import { StatusBar } from "expo-status-bar";
import Body from "./DonateComp/Body";

const Donation = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Header
        navigation={navigation}
        tittle="Donate Us "
        show="none"
        Shop="none"
      />
      <Body navigation={navigation} />
    </View>
  );
};

export default Donation;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
