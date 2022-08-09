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
import { Entypo } from "@expo/vector-icons";

const Body = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={{ ...styles.subview }}>
        <View
          style={{
            ...styles.card,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
        </View>
        <TouchableOpacity
          style={{ position: "absolute", marginLeft: "70%", marginTop: "13%" }}
          activeOpacity={1}
          onPress={() => navigation.navigate("Payment")}
        >
          <Text
            style={{
              ...styles.text,
              fontSize: 15,
              textAlign: "center",

              color: "#38BA45",
            }}
          >
            Purchase
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "10%",
            alignItems: "center",
          }}
        >
          <Text style={{ ...styles.text, fontSize: 15 }}>
            Uncomming Streams
          </Text>
          <Text
            style={{ ...styles.text, fontSize: 12, fontFamily: "mulishLight" }}
          >
            GTM+5 12:00pm 7/28/2022{"\n"}GTM+5 12:00pm 7/28/2022{"\n"}GTM+5
            12:00pm 7/28/2022
          </Text>
        </View>
        <View style={{ ...styles.card, height: 190, marginTop: "10%" }}>
          <Text
            style={{
              ...styles.text,
              fontSize: 20,
              textAlign: "center",
              marginTop: "2%",
            }}
          >
            About The Streamer
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
              flex: 1,
            }}
          >
            <View
              style={{
                flex: 0.4,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 80, height: 80, borderRadius: 40 }}
                source={{
                  uri: "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwc21pbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                }}
              />
            </View>
            <ScrollView style={{ flex: 1, margin: "4%" }}>
              <Text
                style={{
                  ...styles.text,
                  fontFamily: "mulishLight",
                  fontSize: 15,
                }}
              >
                By day I'm a regular guy and by night a superhero … How tiring
                is that?! Just joking! I'm a regular guy all the time, good job,
                close to my family, just bought my own flat with a cat.
                Actually, my cat thinks I'm a hero because I saved her from the
                street. I'm a talkative person and I believe communication is
                the most important thing in a relationship.
              </Text>
            </ScrollView>
          </View>
        </View>
        <Text
          style={{
            ...styles.text,
            fontSize: 20,
            textAlign: "center",
            marginTop: "5%",
          }}
        >
          Social Account Of Streamer
        </Text>
        <View
          style={{
            marginTop: "5%",
            flexDirection: "row",
            alignItems: "center",
            width: "90%",
          }}
        >
          <View
            style={{
              width: 30,
              height: 30,
              backgroundColor: "#38BA45",
              borderRadius: 15,
              justifyContent: "center",

              alignItems: "center",
            }}
          >
            <Entypo name="linkedin" size={15} color="white" />
          </View>
          <Text
            style={{
              ...styles.text,
              fontSize: 15,
              fontFamily: "mulishLight",
              marginLeft: "3%",
            }}
          >
            @Adam_Sir
          </Text>
        </View>
        <View
          style={{
            marginTop: "5%",
            flexDirection: "row",
            alignItems: "center",
            width: "90%",
          }}
        >
          <View
            style={{
              width: 30,
              height: 30,
              backgroundColor: "#38BA45",
              borderRadius: 15,
              justifyContent: "center",

              alignItems: "center",
            }}
          >
            <Entypo name="twitter" size={15} color="white" />
          </View>
          <Text
            style={{
              ...styles.text,
              fontSize: 15,
              fontFamily: "mulishLight",
              marginLeft: "3%",
            }}
          >
            @Adam_Sir
          </Text>
        </View>
        <View
          style={{
            marginTop: "5%",
            flexDirection: "row",
            alignItems: "center",
            width: "90%",
          }}
        >
          <View
            style={{
              width: 30,
              height: 30,
              backgroundColor: "#38BA45",
              borderRadius: 15,
              justifyContent: "center",

              alignItems: "center",
            }}
          >
            <Entypo name="instagram" size={15} color="white" />
          </View>
          <Text
            style={{
              ...styles.text,
              fontSize: 15,
              fontFamily: "mulishLight",
              marginLeft: "3%",
            }}
          >
            @Adam_Sir
          </Text>
        </View>
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
    width: "100%",
    height: 90,
    borderRadius: 20,
    backgroundColor: "#EEEEEE",
  },

  button: {
    backgroundColor: "green",
    width: "100%",
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
