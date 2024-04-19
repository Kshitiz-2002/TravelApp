import React from "react";
import { SafeAreaView, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for icons

import HomeScreen from "./HomeScreen";
import AccountScreen from "./AccountScreen";
import BookingScreen from "./BookingScreen";
import TrainBooking from "./TrainBooking";
import BusBooking from "./BusBooking";

const Tab = createBottomTabNavigator();

const NavigationScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        borderRadius: 20,
        overflow: "hidden",
      }}
    >
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: "#5053FF",
          inactiveTintColor: "#C2C2C2",
          labelStyle: { fontSize: 14, fontWeight: "bold" },
          style: {
            backgroundColor: "white",
            borderTopWidth: 0,
            borderRadius: 20,
            marginHorizontal: 20,
          },
        }}
      >
        <Tab.Screen
          name="Train"
          component={TrainBooking}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="train" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Bus"
          component={BusBooking}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="bus" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Booking"
          component={BookingScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default NavigationScreen;
