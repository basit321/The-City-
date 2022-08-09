import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { StatusBar } from "expo-status-bar";
import Body from "./AdmindashbardComp/Body";
import Header from "./AdmindashbardComp/Header";
const AdminDashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <Body navigation={navigation} />
    </View>
  );
};

export default AdminDashboard;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
