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

import {
  Ionicons,
  Entypo,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";

const Body = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        source={require("../../../Images/Image3.jpg")}
        resizeMode="cover"
      >
        <ScrollView style={{ ...styles.subview }}>
          <View style={{ marginTop: "5%" }}>
            <Text style={{ ...styles.text, color: "white" }}>
              Recent Streams
            </Text>
            <TouchableOpacity
              style={{
                ...styles.card,
                height: 190,
                backgroundColor: "rgba(52, 52, 52, 0.8)",
              }}
              activeOpacity={1}
              onPress={() => navigation.navigate("LiveStreaming")}
            >
              <View
                style={{
                  ...styles.subview,
                  paddingBottom: null,
                  marginTop: "5%",
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: "mulishLight",
                    color: "white",
                    marginLeft: "auto",
                  }}
                >
                  29/07/2021
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: "2%",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text
                      style={{ ...styles.text, fontSize: 15, color: "white" }}
                    >
                      Topic :{" "}
                      <Text
                        style={{
                          fontSize: 15,
                          fontFamily: "mulishLight",
                          color: "white",
                        }}
                      >
                        A City Life
                      </Text>
                    </Text>
                    <Text
                      style={{
                        ...styles.text,
                        fontSize: 15,
                        color: "white",
                        marginTop: "2%",
                      }}
                    >
                      Description :{" "}
                      <Text
                        style={{
                          fontSize: 15,
                          fontFamily: "mulishLight",
                          color: "white",
                        }}
                      >
                        A City Life we talk about city issues etc etc
                      </Text>
                    </Text>
                    <Text
                      style={{
                        ...styles.text,
                        fontSize: 15,
                        color: "white",
                        marginTop: "2%",
                      }}
                    >
                      Moderator :{" "}
                      <Text
                        style={{
                          fontSize: 15,
                          fontFamily: "mulishLight",
                          color: "white",
                        }}
                      >
                        Alex Jay
                      </Text>
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <View></View>
          </View>
          <View style={{ marginTop: "5%" }}>
            <Text style={{ ...styles.text, color: "white" }}>
              Prevoius Week Streams
            </Text>
            <TouchableOpacity
              style={{
                ...styles.card,
                height: 190,
                backgroundColor: "rgba(52, 52, 52, 0.8)",
              }}
              activeOpacity={1}
              onPress={() => navigation.navigate("LiveStreaming")}
            >
              <View
                style={{
                  ...styles.subview,
                  paddingBottom: null,
                  marginTop: "5%",
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: "mulishLight",
                    color: "white",
                    marginLeft: "auto",
                  }}
                >
                  29/07/2021
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: "2%",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text
                      style={{ ...styles.text, fontSize: 15, color: "white" }}
                    >
                      Topic :{" "}
                      <Text
                        style={{
                          fontSize: 15,
                          fontFamily: "mulishLight",
                          color: "white",
                        }}
                      >
                        A City Life
                      </Text>
                    </Text>
                    <Text
                      style={{
                        ...styles.text,
                        fontSize: 15,
                        color: "white",
                        marginTop: "2%",
                      }}
                    >
                      Description :{" "}
                      <Text
                        style={{
                          fontSize: 15,
                          fontFamily: "mulishLight",
                          color: "white",
                        }}
                      >
                        A City Life we talk about city issues etc etc
                      </Text>
                    </Text>
                    <Text
                      style={{
                        ...styles.text,
                        fontSize: 15,
                        color: "white",
                        marginTop: "2%",
                      }}
                    >
                      Moderator :{" "}
                      <Text
                        style={{
                          fontSize: 15,
                          fontFamily: "mulishLight",
                          color: "white",
                        }}
                      >
                        Alex Jay
                      </Text>
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <View></View>
          </View>
          <View style={{ marginTop: "5%" }}>
            <Text style={{ ...styles.text, color: "white" }}>
              Previous Month Streams
            </Text>
            <TouchableOpacity
              style={{
                ...styles.card,
                height: 190,
                backgroundColor: "rgba(52, 52, 52, 0.8)",
              }}
              activeOpacity={1}
              onPress={() => navigation.navigate("LiveStreaming")}
            >
              <View
                style={{
                  ...styles.subview,
                  paddingBottom: null,
                  marginTop: "5%",
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: "mulishLight",
                    color: "white",
                    marginLeft: "auto",
                  }}
                >
                  29/07/2021
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: "2%",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text
                      style={{ ...styles.text, fontSize: 15, color: "white" }}
                    >
                      Topic :{" "}
                      <Text
                        style={{
                          fontSize: 15,
                          fontFamily: "mulishLight",
                          color: "white",
                        }}
                      >
                        A City Life
                      </Text>
                    </Text>
                    <Text
                      style={{
                        ...styles.text,
                        fontSize: 15,
                        color: "white",
                        marginTop: "2%",
                      }}
                    >
                      Description :{" "}
                      <Text
                        style={{
                          fontSize: 15,
                          fontFamily: "mulishLight",
                          color: "white",
                        }}
                      >
                        A City Life we talk about city issues etc etc
                      </Text>
                    </Text>
                    <Text
                      style={{
                        ...styles.text,
                        fontSize: 15,
                        color: "white",
                        marginTop: "2%",
                      }}
                    >
                      Moderator :{" "}
                      <Text
                        style={{
                          fontSize: 15,
                          fontFamily: "mulishLight",
                          color: "white",
                        }}
                      >
                        Alex Jay
                      </Text>
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <View></View>
          </View>
        </ScrollView>
      </ImageBackground>
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
  card: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    height: 90,
    borderRadius: 20,
    backgroundColor: "#EEEEEE",
  },
});
