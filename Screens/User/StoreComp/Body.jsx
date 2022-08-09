import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Dimensions,
} from "react-native";
import React from "react";
import { Items } from "../../Data";
import { Button1 } from "../../../Components/Button";

import {
  Ionicons,
  Entypo,
  FontAwesome5,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useState } from "react";

const Body = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <FlatList
          data={Items}
          style={{
            flex: 1,
            paddingBottom: "5%",
          }}
          renderItem={({ item }) => (
            <View
              style={{
                justifyContent: "space-between",

                marginLeft: "auto",
                marginRight: "auto",
                paddingBottom: "5%",

                flex: 1,
              }}
            >
              <View
                style={{
                  width: 180,
                  height: 300,
                  borderRadius: 10,
                  marginTop: "5%",
                  marginLeft: "5%",
                  alignItems: "center",

                  backgroundColor: "white",
                  shadowColor: "black",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.9,
                  elevation: 4,
                }}
              >
                <ImageBackground
                  style={{ width: "100%", overflow: "hidden", height: 160 }}
                  resizeMode="stretch"
                  source={{ uri: item.pic }}
                ></ImageBackground>
                <Text style={{ ...styles.text, fontSize: 15, marginTop: "5%" }}>
                  {item.name}
                </Text>
                <View style={{ width: "90%", height: 40 }}>
                  <Image
                    source={item.ratting}
                    style={{ width: "100%", height: 40 }}
                  />
                </View>
                <Text
                  style={{
                    ...styles.text,
                    fontSize: 15,
                    marginTop: "2%",
                    color: "#8B8A8A",
                  }}
                >
                  {item.flat}
                </Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      ...styles.text,
                      fontSize: 15,
                      marginTop: "2%",
                      color: "red",
                      textDecorationLine: "underline",
                    }}
                  >
                    Add to Cart
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          numColumns={2}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Body;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4F4B4B",
  },

  Header: {
    flex: 0.1,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "flex-end",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  subview: {
    width: "90%",
    flex: 1,
  },

  button: {
    backgroundColor: "green",
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    height: 52,
    marginTop: "15%",
  },
  button1: {
    backgroundColor: "#D9D9D9",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    height: 40,
    marginTop: "10%",
  },
  text: {
    color: "black",
    fontSize: 30,
    fontFamily: "poppinsBold",
  },

  text1: {
    position: "absolute",
    marginLeft: "85%",
    marginTop: "9%",
  },
  slidemodel: {
    margin: 0,
    flex: 1,
  },
  chat: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "5%",
  },
});
