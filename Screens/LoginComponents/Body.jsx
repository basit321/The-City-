import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Button1 } from "../../Components/Button";
import { Ionicons } from "@expo/vector-icons";

const Body = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.goBack()}
        style={{ marginTop: "10%", marginLeft: "5%" }}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Image
        source={require("../../Images/Logo.jpg")}
        style={{
          width: 250,
          height: 250,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "2%",
        }}
        resizeMode="contain"
      />
      <View style={styles.subview}>
        <Text style={styles.text}>Login Into</Text>
        <Text style={{ ...styles.text, marginTop: "-4%" }}>Your Account</Text>
        <View style={{ marginTop: "5%" }}>
          <TextInput
            style={{
              width: "100%",
              height: 52,
              backgroundColor: "#EFEFEF",
              borderRadius: 10,
              fontSize: 15,
              fontFamily: "mulishLight",
              color: "black",
            }}
            placeholder="  Enter Username"
            placeholderTextColor="black"
          />
          <View style={styles.TextInput}>
            <TextInput
              style={{
                width: "100%",
                marginTop: "5%",
                height: 52,
                backgroundColor: "#EFEFEF",
                borderRadius: 10,
                fontSize: 15,
                fontFamily: "mulishLight",
                color: "black",
              }}
              placeholder="  Enter Password"
              placeholderTextColor="black"
            />
            <View style={styles.text1}>
              <Ionicons name="eye" size={24} color="black" />
            </View>
          </View>
          <View style={{ marginLeft: "auto", marginTop: "5%" }}>
            <Text
              style={{
                fontSize: 15,
                fontFamily: "mulishLight",
                color: "black",
              }}
            >
              Forgot Password ?
            </Text>
          </View>
        </View>
        <Button1
          style={styles.button}
          title="Sign In "
          onPress={() => navigation.navigate("Dashboard")}
        />
        <Text
          style={{
            ...styles.text,
            fontSize: 15,
            textAlign: "center",
            marginTop: "5%",
          }}
        >
          OR
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "5%",
            width: "100%",
          }}
        >
          <View
            style={{
              width: 160,
              height: 52,
              backgroundColor: "#1976D2",
              borderRadius: 40,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Image
              style={{ width: 25, height: 25 }}
              source={require("../../Images/Face.png")}
              resizeMode="contain"
            />
            <Text
              style={{
                fontSize: 14,
                fontFamily: "poppinsBold",
                color: "white",
                marginLeft: "5%",
              }}
            >
              Facebook
            </Text>
          </View>
          <View
            style={{
              width: 160,
              height: 52,
              backgroundColor: "#EA4335",
              borderRadius: 40,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Image
              style={{ width: 25, height: 25 }}
              source={require("../../Images/Gm.png")}
              resizeMode="contain"
            />
            <Text
              style={{
                fontSize: 14,
                fontFamily: "poppinsBold",
                color: "white",
                marginLeft: "5%",
              }}
            >
              Gmail
            </Text>
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

  button: {
    backgroundColor: "green",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    height: 52,
    marginTop: "10%",
  },
  button1: {
    backgroundColor: "#D9D9D9",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    height: 40,
    marginTop: "5%",
  },
  text: {
    color: "black",
    fontSize: 30,
    fontFamily: "poppinsBold",
  },
  TextInput: {
    flexDirection: "row",
  },
  text1: {
    position: "absolute",
    marginLeft: "85%",
    marginTop: "9%",
  },
});
