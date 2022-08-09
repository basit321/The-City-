import React from "react";

import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import AppLoading from "expo-app-loading";

import { useEffect, useState } from "react";
import "react-native-gesture-handler";
import {
  View,
  Text,
  LogBox,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Login from "./Screens/Login";
import Intro from "./Screens/Intro";
import AdminLogin from "./Screens/AdminPannel/AdminLogin";
import Register from "./Screens/Register";
import AdminDashboard from "./Screens/AdminPannel/AdminDashboard";
import Streaming from "./Screens/AdminPannel/Streaming";
import BottomTab from "./Components/BottomTab";
import Payment from "./Screens/User/Paymentgateway";
import CreateCard from "./Screens/User/Payment/CreateCard";
import LiveStreaming from "./Screens/User/LiveComp/LiveStreaming";
import AddtoCart from "./Screens/User/StoreComp/Addtocart";
import Edit from "./Screens/User/ProfileComp/Edit";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
LogBox.ignoreAllLogs();

const fetchFonts = async () => {
  try {
    await SplashScreen.preventAutoHideAsync();
    await SplashScreen.hideAsync();
    await Font.loadAsync({
      robotoRegular: require("./fonts/robotoRegular.ttf"),
      poppinsBold: require("./fonts/poppinsBold.ttf"),
      mulishLight: require("./fonts/mulishLight.ttf"),
    });
    await SplashScreen.hideAsync();
  } catch (e) {
    console.warn(e);
  }
};

const Tabnav = ({ route, navigation }) => {
  return (
    <View style={styles.conatainer}>
      <BottomTab navigation={navigation} />
    </View>
  );
};

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="AdminLogin" component={AdminLogin} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
        <Stack.Screen name="Streaming" component={Streaming} />
        <Stack.Screen name="Dashboard" component={Tabnav} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="CreateCard" component={CreateCard} />
        <Stack.Screen name="LiveStreaming" component={LiveStreaming} />
        <Stack.Screen name="AddtoCart" component={AddtoCart} />
        <Stack.Screen name="Edit" component={Edit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
const styles = StyleSheet.create({
  conatainer: {
    backgroundColor: "#fff",
    flex: 1,
  },
  Text1: {
    fontSize: 18,
    color: "#fff",
  },
});
