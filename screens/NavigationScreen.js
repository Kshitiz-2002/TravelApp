import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./HomeScreen";
import AccountScreen from "./AccountScreen";
import BookingScreen from "./BookingScreen";
import TrainBooking from "./TrainBooking";
import BusBooking from "./BusBooking";

const Tab = createBottomTabNavigator();

const NavigationScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "#91B3FA",
          borderTopRightRadius: 35,
          borderTopLeftRadius: 35,
          paddingBottom: 0,
          height: Platform.OS === "ios" ? "12%" : "11%",
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          let iconSize = 30;

          if (route.name === "Train") {
            iconName = "train";
          } else if (route.name === "Bus") {
            iconName = "bus";
          } else if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Booking") {
            iconName = "calendar";
          } else if (route.name === "Account") {
            iconName = "person";
          }

          if (focused) {
            iconSize = 45; 
          }

          return <Ionicons name={iconName} size={iconSize} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Train"
        component={TrainBooking}
        options={{ tabBarLabel: "", headerShown: false }} 
      />
      <Tab.Screen
        name="Bus"
        component={BusBooking}
        options={{ tabBarLabel: "", headerShown: false }} 
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: "", headerShown: false }}
      />
      <Tab.Screen
        name="Booking"
        component={BookingScreen}
        options={{ tabBarLabel: "", headerShown: false }} 
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{ tabBarLabel: "", headerShown: false }} 
      />
    </Tab.Navigator>
  );
};

export default NavigationScreen;
