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
import { AntDesign } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import { Button1 } from "../../../Components/Button";
const Body = ({ navigation }) => {
  const [checked, setChecked] = React.useState("first");
  return (
    <ScrollView style={styles.container}>
      <View style={{ ...styles.subview }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ ...styles.text, fontSize: 20 }}>Select Card</Text>
          <TouchableOpacity
            style={{
              width: 70,
              height: 70,
              backgroundColor: "white",
              shadowColor: "#000",
              justifyContent: "center",
              alignItems: "center",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.8,
              shadowRadius: 7,
              elevation: 7,
              borderRadius: 35,
            }}
            activeOpacity={1}
            onPress={() => navigation.navigate("CreateCard")}
          >
            <AntDesign name="plus" size={24} color="#38BA45" />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: "5%" }}>
          <RadioButton
            value="first"
            color="#EA4335"
            uncheckedColor="#8B8A8A"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
          />
          <View style={{ ...styles.card }}>
            <View
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                width: "90%",
                flex: 1,
              }}
            >
              <View style={{ marginLeft: "auto", marginTop: "5%" }}>
                <Image
                  source={require("../../../Images/Master.png")}
                  style={{ width: 60, height: 60 }}
                />
              </View>
              <Text
                style={{
                  ...styles.text,
                  fontSize: 25,

                  color: "white",
                }}
              >
                0000 ****1 ***2
              </Text>
              <View
                style={{
                  marginTop: "auto",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: "5%",
                }}
              >
                <Text style={{ ...styles.text, fontSize: 10, color: "white" }}>
                  Card Holder Name{"\n"}
                  <Text
                    style={{
                      ...styles.text,
                      fontSize: 10,
                      color: "white",
                      fontFamily: "mulishLight",
                    }}
                  >
                    David Backmen
                  </Text>
                </Text>
                <Text style={{ ...styles.text, fontSize: 10, color: "white" }}>
                  Expiry Date{"\n"}
                  <Text
                    style={{
                      ...styles.text,
                      fontSize: 10,
                      color: "white",
                      fontFamily: "mulishLight",
                    }}
                  >
                    03/07/2027
                  </Text>
                </Text>
                <Text style={{ ...styles.text, fontSize: 10, color: "white" }}>
                  CVC Code{"\n"}
                  <Text
                    style={{
                      ...styles.text,
                      fontSize: 10,
                      color: "white",
                      fontFamily: "mulishLight",
                    }}
                  >
                    002
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginTop: "5%" }}>
          <RadioButton
            value="Second"
            color="#EA4335"
            uncheckedColor="#8B8A8A"
            status={checked === "Second" ? "checked" : "unchecked"}
            onPress={() => setChecked("Second")}
          />
          <View style={{ ...styles.card }}>
            <View
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                width: "90%",
                flex: 1,
              }}
            >
              <View style={{ marginLeft: "auto", marginTop: "5%" }}>
                <Image
                  source={require("../../../Images/Master.png")}
                  style={{ width: 60, height: 60 }}
                />
              </View>
              <Text
                style={{
                  ...styles.text,
                  fontSize: 25,

                  color: "white",
                }}
              >
                0000 ****1 ***2
              </Text>
              <View
                style={{
                  marginTop: "auto",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: "5%",
                }}
              >
                <Text style={{ ...styles.text, fontSize: 10, color: "white" }}>
                  Card Holder Name{"\n"}
                  <Text
                    style={{
                      ...styles.text,
                      fontSize: 10,
                      color: "white",
                      fontFamily: "mulishLight",
                    }}
                  >
                    David Backmen
                  </Text>
                </Text>
                <Text style={{ ...styles.text, fontSize: 10, color: "white" }}>
                  Expiry Date{"\n"}
                  <Text
                    style={{
                      ...styles.text,
                      fontSize: 10,
                      color: "white",
                      fontFamily: "mulishLight",
                    }}
                  >
                    03/07/2027
                  </Text>
                </Text>
                <Text style={{ ...styles.text, fontSize: 10, color: "white" }}>
                  CVC Code{"\n"}
                  <Text
                    style={{
                      ...styles.text,
                      fontSize: 10,
                      color: "white",
                      fontFamily: "mulishLight",
                    }}
                  >
                    002
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>

        <Button1 style={styles.button} title="Pay Now" />
      </View>
    </ScrollView>
  );
};

export default Body;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  subview: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
    flex: 1,
    paddingBottom: "10%",
    marginTop: "10%",
  },
  card: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
    height: 190,
    borderRadius: 5,
    backgroundColor: "#34A853",
  },

  button: {
    backgroundColor: "green",
    width: "90%",
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
