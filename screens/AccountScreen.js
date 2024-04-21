import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AccountScreen = () => {
  const navigation = useNavigation();
  const handleLogout = () => {
    navigation.navigate("LoginScreen");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "#F4F4F4", padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
          Account Information
        </Text>
        <View
          style={{ backgroundColor: "white", borderRadius: 10, padding: 20 }}
        >
          <Text style={{ fontSize: 18, marginBottom: 10 }}>Name: John Doe</Text>
          <Text style={{ fontSize: 18, marginBottom: 10 }}>
            Email: johndoe@example.com
          </Text>
          <Text style={{ fontSize: 18, marginBottom: 10 }}>
            Phone: +1 (123) 456-7890
          </Text>
        </View>
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
