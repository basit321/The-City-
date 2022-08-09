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
import {
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";

const Body = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          marginLeft: "auto",
          width: "90%",
          alignItems: "center",
          justifyContent: "flex-end",
          marginTop: "5%",

          marginRight: "auto",
        }}
        onPress={() => navigation.navigate("Edit")}
      >
        <Text
          style={{
            ...styles.text,
            fontSize: 15,
            color: "#38E9E9",
            marginRight: "5%",
          }}
        >
          Edit
        </Text>
        <FontAwesome name="edit" size={24} color="#38E9E9" />
      </TouchableOpacity>
      <View style={{ borderBottomWidth: 1, borderColor: "#E7E7E7" }}>
        <View
          style={{
            width: "85%",
            marginLeft: "auto",
            marginRight: "auto",
            flexDirection: "row",
            paddingBottom: "5%",
            marginTop: "10%",
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
            <Text style={{ ...styles.text, fontSize: 15, marginBottom: "5%" }}>
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
          <MaterialIcons name="email" size={30} color="gray" />
          <Text
            style={{
              ...styles.text,
              fontSize: 15,
              fontFamily: "   mulishLight",
              marginLeft: "5%",
              color: "#4F4B4B",
            }}
          >
            Forhad_321@gmail.com
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
          <MaterialCommunityIcons
            name="gender-male-female"
            size={30}
            color="gray"
          />
          <Text
            style={{
              ...styles.text,
              fontSize: 15,
              fontFamily: "   mulishLight",
              marginLeft: "5%",
              color: "#4F4B4B",
            }}
          >
            Male
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
