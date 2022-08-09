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
import {
  Ionicons,
  Entypo,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";
import { useState } from "react";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
import Modal from "react-native-modal";

const Body = ({ navigation }) => {
  const [Moderator, setModerator] = useState(false);
  const [Option, setOption] = useState(false);
  const [Approvels, SetApprovels] = useState(false);
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
          <TouchableOpacity onPress={() => navigation.goBack()} style={{}}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text
            style={{
              ...styles.text,
              fontSize: 20,
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Streaming
          </Text>
          <Entypo name="cross" size={24} color="black" />
        </View>
      </View>
      <View
        style={{ flex: 1, backgroundColor: "#4F4B4B", paddingBottom: "5%" }}
      >
        <View
          style={{
            width: "90%",
            marginTop: "5%",
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: "auto",
            marginRight: "auto",
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
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => SetApprovels(true)}
          >
            <Text
              style={{
                fontSize: 15,
                color: "white",
                fontWeight: "bold",
                marginLeft: "5%",
                fontStyle: "italic",
              }}
            >
              Pending Approvels
            </Text>
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
                      }}
                    >
                      {Moderator ? (
                        <View
                          style={{ flexDirection: "row", alignItems: "center" }}
                        >
                          <FontAwesome name="circle" size={10} color="red" />
                          <Text
                            style={{
                              ...styles.text,
                              fontSize: 15,
                              color: "red",
                              fontFamily: "mulishLight",
                              marginLeft: "5%",
                            }}
                          >
                            Moderator
                          </Text>
                        </View>
                      ) : null}
                      <TouchableOpacity
                        activeOpacity={1}
                        style={{ marginLeft: "auto" }}
                        onPress={() => setOption(!Option)}
                      >
                        <Entypo
                          name="dots-three-vertical"
                          size={24}
                          color="white"
                        />
                      </TouchableOpacity>
                    </View>
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
                  </View>
                  {Option ? (
                    <View
                      style={{
                        width: 100,
                        height: 40,
                        marginLeft: "20%",
                        marginTop: "12%",
                        backgroundColor: "rgba(52, 52, 52, 0.8)",
                        position: "absolute",
                        borderRadius: 10,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => {
                          setModerator(true), setOption(false);
                        }}
                      >
                        <Text
                          style={{
                            ...styles.text,
                            fontSize: 12,
                            fontFamily: "   mulishLight",
                            color: "white",
                          }}
                        >
                          Appoint Moderator
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          ...styles.text,
                          fontSize: 12,
                          fontFamily: "   mulishLight",
                          color: "white",
                          marginTop: "5%",
                        }}
                      >
                        Remove The User
                      </Text>
                    </View>
                  ) : null}
                </ImageBackground>
              </View>
            </View>
          )}
          numColumns={2}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Modal
        isVisible={Approvels}
        style={styles.slidemodel}
        backdropTransitionOutTiming={1000}
        animationInTiming={500}
        animationOutTiming={500}
        avoidKeyboard={false}
        onBackButtonPress={() => SetApprovels(false)}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "white",

            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
            height: height * 0.7,
            justifyContent: "flex-end",
            margin: 0,
          }}
          activeOpacity={1}
          onPress={() => setprofile(false)}
        >
          <ScrollView
            style={{
              flex: 1,
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "5%",
              paddingBottom: "5%",
            }}
          >
            <TouchableOpacity
              style={{ marginLeft: "auto" }}
              onPress={() => SetApprovels(false)}
            >
              <Entypo name="cross" size={30} color="black" />
            </TouchableOpacity>
            <Text style={{ ...styles.text, marginTop: "5%", fontSize: 20 }}>
              Waitng For Approvel
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: "10%",
                paddingBottom: "5%",
                borderBottomWidth: 1,
                borderColor: "#E7E7E7",
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{ width: 40, height: 40, borderRadius: 20 }}
                  source={{
                    uri: "https://images.unsplash.com/photo-1628890920690-9e29d0019b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFuJTIwc21pbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                  }}
                />
                <View style={{ marginLeft: "2%" }}>
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
                      Request to Join the Stream
                    </Text>
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <FontAwesome
                  name="check"
                  size={30}
                  color="green"
                  style={{ marginRight: "2%" }}
                />
                <Entypo name="cross" size={30} color="red" />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: "10%",
                paddingBottom: "5%",
                borderBottomWidth: 1,
                borderColor: "#E7E7E7",
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{ width: 40, height: 40, borderRadius: 20 }}
                  source={{
                    uri: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWFuJTIwc21pbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                  }}
                />
                <View style={{ marginLeft: "2%" }}>
                  <Text
                    style={{ ...styles.text, fontSize: 15, marginBottom: "5%" }}
                  >
                    Alex Jee {"\n"}
                    <Text
                      style={{
                        ...styles.text,
                        fontSize: 15,
                        fontFamily: "   mulishLight",
                        color: "#4F4B4B",
                      }}
                    >
                      Request to Join the Stream
                    </Text>
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <FontAwesome
                  name="check"
                  size={30}
                  color="green"
                  style={{ marginRight: "2%" }}
                />
                <Entypo name="cross" size={30} color="red" />
              </View>
            </View>
          </ScrollView>
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
    width: "90%",
    flex: 1,
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
