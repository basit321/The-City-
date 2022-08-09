import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import Imageslider from "./ImageSlider";
import { Button1 } from "../../../Components/Button";
import { useState } from "react";

import { Ionicons, Entypo, AntDesign } from "@expo/vector-icons";
import Modal from "react-native-modal";

const Body = ({ navigation }) => {
  const [Donate, setDonate] = useState(false);
  const [Success, setsucees] = useState(false);

  const Next = () => {
    setTimeout(() => {
      setsucees(true);
    }, 3000);
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.7 }}>
        <Imageslider />
      </View>

      <View style={{ flex: 1, justifyContent: "center", width: "90%" }}>
        <Text
          style={{
            fontFamily: " mulishLight",
            color: "#8B8A8A",
            fontSize: 15,
            textAlign: "center",

            fontStyle: "italic",
          }}
        >
          Making a donation is the ultimate sign of solidarity. Actions speak
          louder than words.
        </Text>
        <Button1
          style={styles.button}
          title="Donate"
          onPress={() => setDonate(true)}
        />
      </View>
      <Modal
        isVisible={Donate}
        style={styles.slidemodel}
        backdropTransitionOutTiming={1000}
        animationInTiming={500}
        animationOutTiming={500}
        avoidKeyboard={false}
        onBackButtonPress={() => setDonate(false)}
      >
        <View
          style={{
            backgroundColor: "white",

            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
            height: 400,

            margin: 0,
            borderRadius: 20,
          }}
        >
          <View
            style={{
              ...styles.subview,
              paddingBottom: null,
              marginTop: "5%",
              flex: 0,
            }}
          >
            <TouchableOpacity
              style={{ marginLeft: "auto" }}
              onPress={() => setDonate(false)}
            >
              <Entypo name="cross" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={{ ...styles.text, fontSize: 20, textAlign: "center" }}>
            Credits Avalaible{"\n"}
            <Text
              style={{
                ...styles.text,
                fontSize: 18,
                textAlign: "center",

                color: "#38BA45",
              }}
            >
              20.00
            </Text>
          </Text>

          <TextInput
            style={{
              width: "90%",
              marginTop: "5%",

              height: 52,
              backgroundColor: "#EFEFEF",
              borderRadius: 10,
              fontSize: 15,
              fontFamily: "mulishLight",
              color: "black",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            placeholder="  Enter Amount"
            placeholderTextColor="black"
          />
          <TextInput
            style={{
              width: "90%",
              marginTop: "5%",

              height: 52,
              backgroundColor: "#EFEFEF",
              borderRadius: 10,
              fontSize: 15,
              fontFamily: "mulishLight",
              color: "black",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            placeholder="  Enter Message"
            placeholderTextColor="black"
          />

          <Button1
            style={styles.button}
            title="Pay"
            onPress={() => {
              setDonate(false), Next();
            }}
          />
        </View>
      </Modal>
      <Modal
        isVisible={Success}
        style={styles.slidemodel}
        backdropTransitionOutTiming={1000}
        animationInTiming={500}
        animationOutTiming={500}
        avoidKeyboard={false}
        onBackButtonPress={() => setsucees(false)}
      >
        <View
          style={{
            backgroundColor: "white",

            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
            height: 200,

            margin: 0,
            borderRadius: 20,
          }}
        >
          <View
            style={{
              ...styles.subview,
              paddingBottom: null,
              marginTop: "5%",
              flex: 0,
            }}
          >
            <TouchableOpacity
              style={{ marginLeft: "auto" }}
              onPress={() => setsucees(false)}
            >
              <Entypo name="cross" size={30} color="black" />
            </TouchableOpacity>
          </View>

          <View style={{ marginLeft: "auto", marginRight: "auto" }}>
            <AntDesign name="checkcircle" size={30} color="rgba(0,128,0,0.7)" />
          </View>
          <Text
            style={{
              ...styles.text,
              fontSize: 20,
              textAlign: "center",
              marginTop: "5%",
            }}
          >
            Donation Successful !
          </Text>

          <Button1
            style={{ ...styles.button, marginTop: "5%", height: 30 }}
            title="Ok"
            onPress={() => setsucees(false)}
          />
        </View>
      </Modal>
    </View>
  );
};

export default Body;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  subview: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
    flex: 1,
    paddingBottom: "10%",
  },

  button: {
    backgroundColor: "rgba(0,128,0,0.7)",
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto",
    height: 52,
    marginTop: "15%",
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
  card: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    height: 90,
    borderRadius: 20,
    backgroundColor: "#EEEEEE",
  },
});
