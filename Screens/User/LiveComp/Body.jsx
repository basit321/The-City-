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
import { Button1 } from "../../../Components/Button";
import {
  Ionicons,
  Entypo,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";
import { useState } from "react";
import Modal from "react-native-modal";

const Body = ({ navigation }) => {
  const [profile, setprofile] = useState(false);
  const Next = () => {
    setTimeout(() => {
      navigation.navigate("LiveStreaming");
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        source={require("../../../Images/Image1.jpg")}
        resizeMode="cover"
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 35,
            fontStyle: "italic",
            color: "white",
          }}
        >
          Join A Live Stream
        </Text>
        <Button1
          style={styles.button}
          title="Request To Join"
          onPress={() => setprofile(true)}
        />
      </ImageBackground>
      <Modal
        isVisible={profile}
        style={styles.slidemodel}
        backdropTransitionOutTiming={1000}
        animationInTiming={500}
        animationOutTiming={500}
        avoidKeyboard={false}
        onBackButtonPress={() => setprofile(false)}
      >
        <View
          style={{
            backgroundColor: "white",

            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
            height: 190,
            justifyContent: "flex-end",
            margin: 0,
            borderRadius: 20,
          }}
        >
          <View
            style={{ ...styles.subview, paddingBottom: null, marginTop: "5%" }}
          >
            <TouchableOpacity
              style={{ marginLeft: "auto" }}
              onPress={() => setprofile(false)}
            >
              <Entypo name="cross" size={30} color="black" />
            </TouchableOpacity>
            <Text style={{ ...styles.text, textAlign: "center", fontSize: 20 }}>
              Request Pending
            </Text>
            <Text
              style={{
                ...styles.text,
                textAlign: "center",
                fontSize: 15,
                fontFamily: "mulishLight",
                color: "#505B4E",
              }}
            >
              Please Wait While Admin Accept Your Request
            </Text>

            <Button1
              style={styles.button1}
              title="Ok"
              onPress={() => {
                setprofile(false), Next();
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Body;
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
    flex: 1,
    paddingBottom: "10%",
  },

  button: {
    backgroundColor: "rgba(0,128,0,0.5)",
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    height: 52,
    marginTop: "15%",
  },
  button1: {
    backgroundColor: "green",
    width: "60%",
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

  text1: {
    position: "absolute",
    marginLeft: "85%",
    marginTop: "9%",
  },
  slidemodel: {
    margin: 0,
    flex: 1,
  },
});
