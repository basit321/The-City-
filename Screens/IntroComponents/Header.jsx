import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        style={{ marginLeft: "auto" }}
        onPress={() => navigation.navigate("AdminLogin")}
      >
        <Text style={styles.text}>Admin Portal</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    flex: 0.15,
    backgroundColor: "white",
    flexDirection: "row",

    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
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
