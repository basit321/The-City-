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
import Header from "../Component/Header";
const CreateCard = ({ navigation }) => {
  const [checked, setChecked] = React.useState("first");
  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        tittle="Add A Card"
        show="flex"
        Shop="none"
      />

      <ScrollView style={{ ...styles.subview }}>
        <Text style={{ ...styles.text, fontSize: 20 }}>
          Personal Infromation
        </Text>

        <TextInput
          style={{
            width: "100%",
            height: 52,
            backgroundColor: "#EFEFEF",
            borderRadius: 10,
            fontSize: 15,
            marginTop: "5%",
            fontFamily: "mulishLight",
            color: "black",
          }}
          placeholder="  Enter Card Holder Name "
          placeholderTextColor="black"
        />
        <TextInput
          style={{
            width: "100%",
            height: 52,
            backgroundColor: "#EFEFEF",
            borderRadius: 10,
            fontSize: 15,
            marginTop: "5%",
            fontFamily: "mulishLight",
            color: "black",
          }}
          placeholder="  Enter Card Number"
          placeholderTextColor="black"
        />
        <TextInput
          style={{
            width: "100%",
            height: 52,
            backgroundColor: "#EFEFEF",
            borderRadius: 10,
            fontSize: 15,
            marginTop: "5%",
            fontFamily: "mulishLight",
            color: "black",
          }}
          placeholder="  Enter CVV Code"
          placeholderTextColor="black"
        />
        <TextInput
          style={{
            width: "100%",
            height: 52,
            backgroundColor: "#EFEFEF",
            borderRadius: 10,
            fontSize: 15,
            marginTop: "5%",
            fontFamily: "mulishLight",
            color: "black",
          }}
          placeholder="  Enter Expiray Date"
          placeholderTextColor="black"
        />
        <Button1 style={styles.button} title="ADD A Card" />
      </ScrollView>
    </View>
  );
};

export default CreateCard;
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
