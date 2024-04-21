import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [enteredOTP, setEnteredOTP] = useState("");
  const [generatedOTP, setGeneratedOTP] = useState("");
  const [showOTP, setShowOTP] = useState(false);

  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
  };

  const handleSendOTP = () => {
    if (!phoneNumber) {
      Alert.alert("Error", "Please enter your phone number.");
      return;
    }

    // Simulated OTP sending logic (replace this with actual OTP sending code)
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOTP(otp);
    Alert.alert("OTP Sent", `An OTP has been sent to ${phoneNumber}: ${otp}`);

    setShowOTP(true);
  };

  const handleVerifyOTP = async () => {
    try {
      const response = await fetch("https://37973617-312d-4204-87c1-820311894e52-00-jlkxz5wqwbyh.sisko.replit.dev/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: phoneNumber,
          otp: enteredOTP,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        navigation.navigate("NavigationScreen", { user: data.user });
      } else {
        Alert.alert("Login Failed", data.error);
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to login. Please try again later.");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", paddingTop: 30 }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 40, fontWeight: "bold", marginBottom: 20 }}>
          Welcome Back!
        </Text>
      </View>
      <View style={{ flex: 2, alignItems: "center" }}>
        <View
          style={{
            backgroundColor: "#91B3FA",
            borderRadius: 30,
            padding: 20,
            width: "80%",
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              backgroundColor: "#EAEAEA",
              borderRadius: 15,
              height: 50,
              width: "100%",
              paddingHorizontal: 15,
              marginBottom: 15,
            }}
            placeholder="Mobile Number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={handlePhoneNumberChange}
          />
          {!showOTP && (
            <TouchableOpacity
              style={{
                backgroundColor: "#5053FF",
                borderRadius: 20,
                height: 50,
                width: "55%",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 15,
                marginTop: 10,
              }}
              onPress={handleSendOTP}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
                Send OTP
              </Text>
            </TouchableOpacity>
          )}
          {showOTP && (
            <>
              <TextInput
                style={{
                  backgroundColor: "#EAEAEA",
                  borderRadius: 15,
                  height: 50,
                  width: "100%",
                  paddingHorizontal: 15,
                  marginBottom: 15,
                  marginTop: 10,
                }}
                placeholder="OTP"
                keyboardType="numeric"
                value={enteredOTP}
                onChangeText={setEnteredOTP}
              />
              <TouchableOpacity
                style={{
                  backgroundColor: "#5053FF",
                  borderRadius: 20,
                  height: 50,
                  width: "55%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={handleVerifyOTP}
              >
                <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
                  Verify
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
