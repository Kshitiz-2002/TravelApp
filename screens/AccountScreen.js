// AccountScreen.js

import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../store/reducers/appSlice";

const AccountScreen = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null); // State to store user data
  const user = useSelector((state) => state.app.user); // Access user data from Redux store
  const dispatch = useDispatch(); // Dispatch function to dispatch actions

  // Update user data state when user data changes
  useEffect(() => {
    setUserData(user);
  }, [user]);

  const handleLogout = () => {
    navigation.navigate("LoginScreen");
  };

  return (
    <SafeAreaView style={{ flex: 1, marginTop: Platform.OS ==="ios" ? 0:20 }}>
      <View style={{ flex: 1, backgroundColor: "#F4F4F4", padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 900, marginBottom: 20 }}>
          Account Information
        </Text>
        {user && ( // Check if user exists before accessing its properties
          <View style={{ backgroundColor: "white", borderRadius: 10, padding: 20 }}>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>Name: {user.name}</Text>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>Phone: {user.phoneNumber}</Text>
          </View>
        )}
        <TouchableOpacity
          style={{
            backgroundColor: "#5053FF",
            borderRadius: 10,
            padding: 15,
            marginTop: 20,
            alignItems: "center",
          }}
          onPress={handleLogout}
        >
          <Text style={{ fontSize: 18, color: "white" }}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AccountScreen;
