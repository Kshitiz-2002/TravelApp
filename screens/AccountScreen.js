import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AccountScreen = ({route}) => {
  const { user } = route.params;
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate("LoginScreen");
  };

  return (
    <SafeAreaView style={{ flex: 1, marginTop: Platform.OS ==="ios" ? 0:20 }}>
      <View style={{ flex: 1, backgroundColor: "#F4F4F4", padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 900, marginBottom: 20 }}>
          Account Information
        </Text>
        {user && (
          <View style={{ backgroundColor: "white", borderRadius: 10, padding: 20 }}>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>Name: {user.username}</Text>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>Phone: {user.phone}</Text>
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
