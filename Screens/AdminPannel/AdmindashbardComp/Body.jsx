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
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity onPress={() => setprofile(true)}>
            <Entypo name="menu" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ ...styles.text, fontSize: 20 }}>Dashboard</Text>
          <Image
            style={{ width: 30, height: 30, borderRadius: 15 }}
            source={{
              uri: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            }}
          />
        </View>
      </View>
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
          Create A Live Stream
        </Text>
        <Button1
          style={styles.button}
          title="Start Streaming"
          onPress={() => navigation.navigate("Streaming")}
        />
      </ImageBackground>

      <Modal
        isVisible={profile}
        style={styles.slidemodel}
        animationIn={"slideInLeft"}
        animationOut={"slideOutLeft"}
        backdropTransitionOutTiming={1000}
        animationInTiming={500}
        animationOutTiming={500}
        avoidKeyboard={false}
        onBackButtonPress={() => setprofile(false)}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            flex: 1,
            width: "80%",
          }}
          activeOpacity={1}
          onPress={() => setprofile(false)}
        >
          <View style={{ borderBottomWidth: 1, borderColor: "#E7E7E7" }}>
            <View
              style={{
                width: "85%",
                marginLeft: "auto",
                marginRight: "auto",
                flexDirection: "row",
                paddingBottom: "5%",
                marginTop: "20%",
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                }}
                style={{ width: 60, height: 60, borderRadius: 30 }}
              />
              <View style={{ alignItems: "center", marginLeft: "5%" }}>
                <Text
                  style={{ ...styles.text, fontSize: 15, marginBottom: "5%" }}
                >
                  Jack Willam{"\n"}
                  <Text
                    style={{
                      ...styles.text,
                      fontSize: 15,
                      fontFamily: "   mulishLight",
                      color: "#4F4B4B",
                    }}
                  >
                    Jack_321
                  </Text>
                </Text>
              </View>
            </View>
          </View>
          <View style={{ borderBottomWidth: 1, borderColor: "#E7E7E7" }}>
            <View
              style={{
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto",
                flexDirection: "row",
                paddingBottom: "5%",
                marginTop: "5%",
                alignItems: "center",
              }}
            >
              <Entypo name="phone" size={30} color="gray" />
              <Text
                style={{
                  ...styles.text,
                  fontSize: 15,
                  fontFamily: "   mulishLight",
                  marginLeft: "5%",
                  color: "#4F4B4B",
                }}
              >
                0231313113133
              </Text>
            </View>
          </View>
          <View style={{ borderBottomWidth: 1, borderColor: "#E7E7E7" }}>
            <View
              style={{
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto",
                flexDirection: "row",
                paddingBottom: "5%",
                marginTop: "5%",
                alignItems: "center",
              }}
            >
              <Entypo name="location-pin" size={30} color="gray" />
              <Text
                style={{
                  ...styles.text,
                  fontSize: 15,
                  fontFamily: "   mulishLight",
                  marginLeft: "5%",
                  color: "#4F4B4B",
                }}
              >
                Sydeny,Australlia
              </Text>
            </View>
          </View>
          <View style={{ borderBottomWidth: 1, borderColor: "#E7E7E7" }}>
            <View
              style={{
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto",
                flexDirection: "row",
                paddingBottom: "5%",
                marginTop: "5%",
                alignItems: "center",
              }}
            >
              <FontAwesome name="history" size={30} color="gray" />
              <Text
                style={{
                  ...styles.text,
                  fontSize: 15,
                  fontFamily: "   mulishLight",
                  marginLeft: "5%",
                  color: "#4F4B4B",
                }}
              >
                View Streaming Records
              </Text>
            </View>
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              borderColor: "#E7E7E7",
              marginTop: "auto",
            }}
          >
            <View
              style={{
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto",
                flexDirection: "row",
                paddingBottom: "5%",

                alignItems: "center",
              }}
            >
              <FontAwesome name="sign-out" size={30} color="gray" />
              <Text
                style={{
                  ...styles.text,
                  fontSize: 15,
                  fontFamily: "   mulishLight",
                  marginLeft: "5%",
                  color: "#4F4B4B",
                }}
              >
                Sing Out
              </Text>
            </View>
          </View>
        </TouchableOpacity>
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
});
