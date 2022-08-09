import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React from "react";
import { Button1 } from "../../Components/Button";

const Body = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../../Images/Logo.jpg")}
        style={{
          width: 250,
          height: 250,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "5%",
        }}
        resizeMode="contain"
      />
      <View style={styles.subview}>
        <View style={styles.card}>
          <View style={{ alignItems: "center", marginTop: "5%" }}>
            <Text
              style={{
                textAlign: "center",
                textDecorationLine: "none",
                fontFamily: "robotoRegular",
                fontSize: 30,
              }}
            >
              Welcome
            </Text>

            <Text
              style={{
                textAlign: "center",
                textDecorationLine: "none",
                fontFamily: "robotoRegular",
                fontSize: 15,
                marginTop: "5%",
                color: "#505B4E",
                width: "80%",
              }}
            >
              Please Register First In Order to Use The App
            </Text>

            <Button1
              style={styles.button}
              title="Login"
              onPress={() => navigation.navigate("Login")}
            />
            <Button1
              style={styles.button1}
              title="Register"
              textstyle={styles.text}
              onPress={() => navigation.navigate("Register")}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Body;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subview: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "85%",
    flex: 1,
    paddingBottom: "10%",
  },
  card: {
    width: "100%",
    height: 300,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "5%",
    backgroundColor: "#EFEDED",
    borderRadius: 20,
  },
  button: {
    backgroundColor: "green",
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto",
    height: 40,
    marginTop: "10%",
  },
  button1: {
    backgroundColor: "#D9D9D9",
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto",
    height: 40,
    marginTop: "10%",
  },
  text: {
    color: "black",
  },
});
