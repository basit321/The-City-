import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  ImageBackground,
} from "react-native";

// npm i react-native-swiper
import Swiper from "react-native-swiper";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
export default function Imageslider() {
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        dotColor="#8B8A8A"
        activeDotColor="#D97150"
        activeDotStyle={{
          width: 10,
          height: 10,
          borderRadius: 10,
        }}
        dotStyle={{ width: 10, height: 10, borderRadius: 10 }}
      >
        <ImageBackground
          source={require("../../../Images/Image7.jpg")}
          style={{ ...styles.slide1 }}
        ></ImageBackground>

        <ImageBackground
          source={require("../../../Images/Image6.jpg")}
          style={{ ...styles.slide1 }}
        ></ImageBackground>
        <ImageBackground
          source={require("../../../Images/Image8.jpg")}
          style={{ ...styles.slide1 }}
        ></ImageBackground>
        <ImageBackground
          source={require("../../../Images/Image3.jpg")}
          style={{ ...styles.slide1 }}
        ></ImageBackground>
        <ImageBackground
          source={require("../../../Images/Image4.jpg")}
          style={{ ...styles.slide1 }}
        ></ImageBackground>
      </Swiper>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  slide1: {
    flex: 1,

    backgroundColor: "#9DD6EB",
  },
});
