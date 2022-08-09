import React from "react";
import { useEffect, useState } from "react";
import "react-native-gesture-handler";
import {
  View,
  Text,
  LogBox,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import Home from "../Screens/User/Home";
import Donation from "../Screens/User/Donation";
import Live from "../Screens/User/Live";
import Profile from "../Screens/User/Profile";
import Store from "../Screens/User/Store";
import Stream from "../Screens/User/Stream";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Feather,
} from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

LogBox.ignoreAllLogs();
const BottomTab = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#38BA45",
        tabBarInactiveTintColor: "#8B8A8A",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="home"
              size={24}
              color={focused ? "#38BA45" : "#8B8A8A"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Stream"
        component={Stream}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="tv"
              size={24}
              color={focused ? "#38BA45" : "#8B8A8A"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Live"
        component={Live}
        options={{
          tabBarIcon: ({ focused }) => (
            <Fontisto
              name="world-o"
              size={24}
              color={focused ? "#38BA45" : "#8B8A8A"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Donation"
        component={Donation}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="hand-holding-usd"
              size={24}
              color={focused ? "#38BA45" : "#8B8A8A"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Store"
        component={Store}
        options={{
          tabBarIcon: ({ focused }) => (
            <Fontisto
              name="shopping-store"
              size={24}
              color={focused ? "#38BA45" : "#8B8A8A"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="user"
              size={24}
              color={focused ? "#38BA45" : "#8B8A8A"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
