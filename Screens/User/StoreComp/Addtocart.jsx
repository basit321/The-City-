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

const AddtoCart = ({ navigation }) => {
  const [Gift, setgift] = useState(false);
  const [Save, setsave] = useState(false);

  const Next = () => {
    setTimeout(() => {
      setgift(true);
    }, 3000);
  };
  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        tittle="Add to Cart"
        show="flex"
        Shop="none"
      />

      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView style={styles.subview}>
          <View style={styles.item}>
            <Text style={{ ...styles.text, fontSize: 15, color: "#8B8A8A" }}>
              Product
            </Text>
            <Text style={{ ...styles.text, fontSize: 15, color: "#8B8A8A" }}>
              Price
            </Text>
            <Text style={{ ...styles.text, fontSize: 15, color: "#8B8A8A" }}>
              Qty
            </Text>
            <Text style={{ ...styles.text, fontSize: 15, color: "#8B8A8A" }}>
              Total
            </Text>
          </View>
          <View
            style={{
              ...styles.item,
              marginTop: "5%",
              paddingBottom: "4%",
              borderBottomWidth: 1,
              borderColor: "#E7E7E7",
              alignItems: "center",
            }}
          >
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={{
                  uri: "https://uniworthdress.com/uploads/product/3e1dc2abc7be2c4c4ca1286bbd7ae2b1.jpg",
                }}
                style={{ width: 40, height: 40 }}
              />
              <Text
                style={{
                  ...styles.text,
                  fontSize: 15,
                  marginTop: "5%",
                }}
              >
                Shirt
              </Text>
            </View>

            <Text style={{ ...styles.text, fontSize: 15 }}>1024</Text>

            <Text style={{ ...styles.text, fontSize: 15 }}>3</Text>

            <Text style={{ ...styles.text, fontSize: 15 }}>5000</Text>
          </View>
          <View
            style={{
              ...styles.item,
              marginTop: "5%",
              paddingBottom: "4%",
              borderBottomWidth: 1,
              borderColor: "#E7E7E7",
              alignItems: "center",
            }}
          >
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={{
                  uri: "https://uniworthdress.com/uploads/product/3e1dc2abc7be2c4c4ca1286bbd7ae2b1.jpg",
                }}
                style={{ width: 40, height: 40 }}
              />
              <Text
                style={{
                  ...styles.text,
                  fontSize: 15,
                  marginTop: "5%",
                }}
              >
                Shirt
              </Text>
            </View>

            <Text style={{ ...styles.text, fontSize: 15 }}>1024</Text>

            <Text style={{ ...styles.text, fontSize: 15 }}>3</Text>

            <Text style={{ ...styles.text, fontSize: 15 }}>5000</Text>
          </View>
          <View
            style={{
              ...styles.item,
              marginTop: "5%",
              paddingBottom: "4%",
              borderBottomWidth: 1,
              borderColor: "#E7E7E7",
              alignItems: "center",
            }}
          >
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={{
                  uri: "https://uniworthdress.com/uploads/product/3e1dc2abc7be2c4c4ca1286bbd7ae2b1.jpg",
                }}
                style={{ width: 40, height: 40 }}
              />
              <Text
                style={{
                  ...styles.text,
                  fontSize: 15,
                  marginTop: "5%",
                }}
              >
                Shirt
              </Text>
            </View>

            <Text style={{ ...styles.text, fontSize: 15 }}>1024</Text>

            <Text style={{ ...styles.text, fontSize: 15 }}>3</Text>

            <Text style={{ ...styles.text, fontSize: 15 }}>5000</Text>
          </View>

          <View
            style={{
              marginTop: "5%",
              flexDirection: "row",
              marginRight: "auto",
              marginLeft: "auto",
            }}
          >
            <Text style={{ ...styles.text, fontSize: 15, textAlign: "center" }}>
              Total : {"  "}
            </Text>
            <Text
              style={{ fontSize: 15, textAlign: "center", color: "#8B8A8A" }}
            >
              30000
            </Text>
          </View>
          <Button1
            style={styles.button}
            title="Pay Now "
            onPress={() => setsave(true)}
          />
        </ScrollView>

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
        <Modal
          isVisible={Save}
          style={styles.slidemodel}
          backdropTransitionOutTiming={1000}
          animationInTiming={500}
          animationOutTiming={500}
          avoidKeyboard={false}
          onBackButtonPress={() => setsave(false)}
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
                onPress={() => setsave(false)}
              >
                <Entypo name="cross" size={30} color="black" />
              </TouchableOpacity>
            </View>
            <Text style={{ ...styles.text, fontSize: 20, textAlign: "center" }}>
              Personal Infromation
            </Text>
            <View
              style={{
                width: "90%",

                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <View
                style={{
                  marginTop: "5%",
                  flexDirection: "row",
                }}
              >
                <Text style={{ ...styles.text, fontSize: 20 }}>Name: </Text>
                <Text style={{ color: "#8B8A8A", fontSize: 20 }}>Forhad</Text>
              </View>
              <View
                style={{
                  marginTop: "5%",
                  flexDirection: "row",
                }}
              >
                <Text style={{ ...styles.text, fontSize: 20 }}>
                  Phone Number:{" "}
                </Text>
                <Text style={{ color: "#8B8A8A", fontSize: 20 }}>
                  031314141
                </Text>
              </View>
              <View
                style={{
                  marginTop: "5%",
                  flexDirection: "row",

                  width: "80%",
                }}
              >
                <Text style={{ ...styles.text, fontSize: 20 }}>Location: </Text>
                <Text style={{ color: "#8B8A8A", fontSize: 20, width: "90%" }}>
                  House#15,Street#4,Sydney
                </Text>
              </View>
            </View>

            <Button1
              style={styles.button}
              title="Confrim"
              onPress={() => {
                setsave(false), Next();
              }}
            />
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default AddtoCart;
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
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "5%",
  },

  button: {
    backgroundColor: "green",
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    height: 42,
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
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
