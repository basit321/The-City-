import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Header = ({ navigation }) => {
  return (
    <View>
      <View style={styles.container}></View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    flex: 0.13,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "flex-end",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "red",
  },
  text: {
    fontSize: 15,
    fontFamily: "poppinsBold",
    color: "black",
    textDecorationLine: "underline",
    marginLeft: "auto",
    marginTop: "auto",
    marginBottom: "5%",
  },
});
