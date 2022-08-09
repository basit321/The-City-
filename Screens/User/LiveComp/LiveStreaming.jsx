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
import { Admin_live } from "../../Data";
import { Button1 } from "../../../Components/Button";
import Modal from "react-native-modal";
import {
  Ionicons,
  Entypo,
  FontAwesome5,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useState } from "react";
import Header from "../Component/Header";

const LiveStreaming = ({ navigation }) => {
  const [Gift, setgift] = useState(false);
  const [Save, setsave] = useState(false);

  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        tittle="Live Streaming"
        show="flex"
        Shop="none"
      />

      <View style={{ flex: 1, backgroundColor: "#4F4B4B" }}>
        <View
          style={{
            width: "90%",
            marginTop: "5%",
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: "auto",
            marginRight: "auto",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 72,
              height: 30,
              borderRadius: 4,
              backgroundColor: "#FF576F",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Ionicons name="eye" size={17} color="white" />
            <Text
              style={{
                fontSize: 14,
                color: "white",
                fontFamily: "mulishLight",
                marginLeft: "5%",
              }}
            >
              300
            </Text>
          </View>
          <TouchableOpacity activeOpacity={1} onPress={() => setsave(!Save)}>
            <Entypo name="dots-three-vertical" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <FlatList
          data={Admin_live}
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

                flex: 1,
              }}
            >
              <View
                style={{
                  width: 180,
                  height: 258,
                  borderRadius: 10,
                  marginTop: "5%",
                  marginLeft: "5%",

                  backgroundColor: "blue",
                }}
              >
                <ImageBackground
                  style={{ flex: 1, overflow: "hidden", borderRadius: 10 }}
                  source={{ uri: item.Pic }}
                >
                  <View
                    style={{
                      width: "90%",
                      marginLeft: "auto",
                      marginRight: "auto",
                      flex: 1,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: "5%",
                        alignItems: "center",
                        marginTop: "auto",
                      }}
                    >
                      <View
                        style={{
                          marginTop: "auto",
                          marginBottom: "5%",
                          width: 90,
                          height: 70,
                          borderRadius: 10,
                          backgroundColor: "rgba(52, 52, 52, 0.5)",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          source={{ uri: item.Pic }}
                          style={{ width: 40, height: 40, borderRadius: 20 }}
                        />
                        <Text
                          style={{
                            ...styles.text,
                            fontSize: 10,
                            fontFamily: "   mulishLight",
                            color: "white",
                            marginTop: "5%",
                          }}
                        >
                          {item.name}
                        </Text>
                      </View>
                      <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity
                          style={{
                            width: 30,
                            height: 30,
                            borderRadius: 15,
                            backgroundColor: "rgba(94,94,195,0.5)",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Entypo name="video-camera" size={15} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={{
                            width: 30,
                            height: 30,
                            borderRadius: 15,
                            backgroundColor: "rgba(190,20,62,0.5)",
                            justifyContent: "center",
                            alignItems: "center",
                            marginLeft: "5%",
                          }}
                        >
                          <FontAwesome
                            name="microphone"
                            size={15}
                            color="white"
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            </View>
          )}
          numColumns={2}
          keyExtractor={(item) => item.id}
        />
        {Save ? (
          <View
            style={{
              width: 120,
              height: 60,
              backgroundColor: "rgba(52, 52, 52, 0.8)",
              position: "absolute",
              justifyContent: "center",
              alignItems: "center",
              right: 0,
              marginRight: "10%",
              marginTop: "10%",
              borderRadius: 20,
            }}
          >
            <TouchableOpacity>
              <Text
                style={{
                  ...styles.text,
                  fontSize: 15,

                  color: "white",
                }}
              >
                ➊ Save Stream
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  ...styles.text,
                  fontSize: 15,
                  marginTop: "5%",
                  color: "white",
                }}
              >
                ➋ Store Stream
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}

        <View
          style={{
            position: "absolute",
            bottom: 0,
            width: "90%",
            left: "5%",
          }}
        >
          <View style={{ ...styles.chat }}>
            <Image
              style={{ width: 40, height: 40, borderRadius: 20 }}
              source={{
                uri: "https://images.unsplash.com/photo-1628890920690-9e29d0019b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFuJTIwc21pbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
              }}
            />
            <View style={{ marginLeft: "2%" }}>
              <Text
                style={{
                  ...styles.text,
                  fontSize: 15,
                  marginBottom: "5%",
                  color: "white",
                }}
              >
                Jack Willam{"\n"}
                <Text
                  style={{
                    ...styles.text,
                    fontSize: 15,
                    fontFamily: "   mulishLight",
                    color: "white",
                  }}
                >
                  hello
                </Text>
              </Text>
            </View>
          </View>
          <View style={{ ...styles.chat }}>
            <Image
              style={{ width: 40, height: 40, borderRadius: 20 }}
              source={{
                uri: "https://images.unsplash.com/photo-1628890920690-9e29d0019b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFuJTIwc21pbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
              }}
            />
            <View style={{ marginLeft: "2%" }}>
              <Text
                style={{
                  ...styles.text,
                  fontSize: 15,
                  marginBottom: "5%",
                  color: "white",
                }}
              >
                Forhad
              </Text>
              <Text
                style={{
                  ...styles.text,
                  fontSize: 15,
                  fontFamily: "mulishLight",
                  color: "white",
                }}
              >
                hey Texla
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "5%",
            }}
          >
            <TextInput
              style={{
                width: "70%",

                height: 52,
                backgroundColor: "rgba(214,210,211,0.5)",
                borderRadius: 20,
                fontSize: 20,
                fontFamily: "mulishLight",
                color: "white",
              }}
              placeholder="  Type Something ....."
              placeholderTextColor="white"
            />
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "rgba(94,94,195,0.7)",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome name="send" size={20} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "rgba(190,20,62,0.7)",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "7%",
                }}
                onPress={() => setgift(true)}
              >
                <MaterialCommunityIcons name="gift" size={20} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <Modal
        isVisible={Gift}
        style={styles.slidemodel}
        backdropTransitionOutTiming={1000}
        animationInTiming={500}
        animationOutTiming={500}
        avoidKeyboard={false}
        onBackButtonPress={() => setgift(false)}
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
              onPress={() => setgift(false)}
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
            title="Send"
            onPress={() => setgift(false)}
          />
        </View>
      </Modal>
    </View>
  );
};

export default LiveStreaming;
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
