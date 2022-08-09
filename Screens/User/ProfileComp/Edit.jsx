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
import { Button1 } from "../../../Components/Button";
import { Ionicons, FontAwesome5, FontAwesome } from "@expo/vector-icons";

const Edit = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.subview}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.goBack()}
          >
            <Ionicons
              name="arrow-back"
              size={24}
              color="black"
              style={{ position: "absolute" }}
            />
          </TouchableOpacity>
          <Text
            style={{
              ...styles.text,
              textAlign: "center",
              fontSize: 20,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Edit
          </Text>
        </View>
        <Text
          style={{
            ...styles.text,
            textAlign: "center",
            color: "#EA4335",
            marginTop: "5%",
          }}
        >
          Personal Information
        </Text>
        <View style={{ marginTop: "5%" }}>
          <View
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              width: 142,
              height: 142,
              backgroundColor: "#EFEFEF",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome name="plus" size={24} color="black" />
            <Text
              style={{
                fontSize: 15,
                marginTop: "5%",
                fontFamily: "mulishLight",
                color: "black",
                marginTop: "10%",
              }}
            >
              Upload Photo
            </Text>
          </View>

          <TextInput
            style={{
              width: "100%",
              height: 52,
              backgroundColor: "#EFEFEF",
              borderRadius: 10,
              fontSize: 15,
              marginTop: "5%",
              fontFamily: "mulishLight",
              color: "black",
            }}
            placeholder="  Enter Username"
            placeholderTextColor="black"
          />
          <TextInput
            style={{
              width: "100%",
              height: 52,
              backgroundColor: "#EFEFEF",
              borderRadius: 10,
              fontSize: 15,
              marginTop: "5%",
              fontFamily: "mulishLight",
              color: "black",
            }}
            placeholder="  Enter Email"
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
          <TextInput
            style={{
              width: "100%",
              height: 52,
              backgroundColor: "#EFEFEF",
              borderRadius: 10,
              fontSize: 15,
              marginTop: "5%",
              fontFamily: "mulishLight",
              color: "black",
            }}
            placeholder="  Enter Phone Number"
            placeholderTextColor="black"
          />
          <TextInput
            style={{
              width: "100%",
              height: 52,
              backgroundColor: "#EFEFEF",
              borderRadius: 10,
              fontSize: 15,
              marginTop: "5%",
              fontFamily: "mulishLight",
              color: "black",
            }}
            placeholder="  Enter Location"
            placeholderTextColor="black"
          />
        </View>
        <Button1 style={styles.button} title="Sign Up " />
      </View>
    </ScrollView>
  );
};

export default Edit;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f5fa",
  },
  subview: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "85%",
    flex: 1,
    paddingBottom: "10%",
    marginTop: "10%",
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
