import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons, Entypo } from "@expo/vector-icons";

const Header = ({ navigation, tittle, show, Shop }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          display: show,
          position: "absolute",
          marginLeft: "5%",
          marginBottom: "5%",
        }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{ ...styles.text }}>{tittle}</Text>
      <TouchableOpacity
        style={{
          display: Shop,
          position: "absolute",
          right: 0,
          marginBottom: "3%",
          marginRight: "5%",
        }}
        onPress={() => navigation.navigate("AddtoCart")}
      >
        <Ionicons name="cart" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    flex: 0.13,
    backgroundColor: "#EEEEEE",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  text: {
    fontSize: 20,
    fontFamily: "poppinsBold",
    color: "black",

    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "3%",
  },
});
