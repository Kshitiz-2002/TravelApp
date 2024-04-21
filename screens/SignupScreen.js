import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native';

const SignupScreen = ({ navigation }) => {
  const [username, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [enteredOTP, setEnteredOTP] = useState('');
  const [generatedOTP, setGeneratedOTP] = useState('');
  const [showOTP, setShowOTP] = useState(false);
  const [users, setUsers] = useState([]); // State to manage users locally
  const [error, setError] = useState(null); // State to manage error locally

  const handleNameChange = (text) => {
    setUserName(text);
  };

  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
  };

  const handleSendOTP = () => {
    if (!username || !phoneNumber) {
      Alert.alert('Error', 'Please enter your name and phone number.');
      return;
    }

    // Simulated OTP sending logic (replace this with actual OTP sending code)
    const otp = Math.floor(1000 + Math.random() * 9000).toString(); // Generate a random OTP (example)
    setGeneratedOTP(otp);
    Alert.alert('OTP Sent', `An OTP has been sent to ${phoneNumber}: ${otp}`);
    
    setShowOTP(true); // Show OTP input and button when Send OTP is pressed
  };

  const handleVerifyOTP = async () => {
    try {
      const response = await fetch('https://37973617-312d-4204-87c1-820311894e52-00-jlkxz5wqwbyh.sisko.replit.dev/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          phone: phoneNumber,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Redirect to Home screen if signup is successful
        navigation.navigate('NavigationScreen', {
          user: { username, phoneNumber },
        });
      } else {
        Alert.alert('Signup Failed', data.error);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to signup. Please try again later.');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', paddingTop: 30 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 40, fontWeight: 'bold', marginBottom: 20 }}>
          Let's Get You Set Up
        </Text>
      </View>
      <View style={{ flex: 2, alignItems: 'center' }}>
        <View
          style={{
            backgroundColor: '#91B3FA',
            borderRadius: 30,
            padding: 20,
            width: '80%',
            alignItems: 'center',
          }}
        >
          <TextInput
            style={{
              backgroundColor: '#EAEAEA',
              borderRadius: 15,
              height: 50,
              width: '100%',
              paddingHorizontal: 15,
              marginBottom: 15,
            }}
            placeholder="Name"
            value={username}
            onChangeText={handleNameChange}
          />
          <TextInput
            style={{
              backgroundColor: '#EAEAEA',
              borderRadius: 15,
              height: 50,
              width: '100%',
              paddingHorizontal: 15,
              marginBottom: 15,
            }}
            placeholder="Mobile Number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={handlePhoneNumberChange}
          />
          {!showOTP && ( // Render Send OTP button if showOTP is false
            <TouchableOpacity
              style={{
                backgroundColor: '#5053FF',
                borderRadius: 20,
                height: 50,
                width: '55%',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 15,
                marginTop: 10,
              }}
              onPress={handleSendOTP} // Call handleSendOTP when button is pressed
            >
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                Send OTP
              </Text>
            </TouchableOpacity>
          )}
          {showOTP && ( // Render OTP input and Verify button if showOTP is true
            <>
              <TextInput
                style={{
                  backgroundColor: '#EAEAEA',
                  borderRadius: 15,
                  height: 50,
                  width: '100%',
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
                  backgroundColor: '#5053FF',
                  borderRadius: 20,
                  height: 50,
                  width: '55%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={handleVerifyOTP} // Call handleVerifyOTP when Verify button is pressed
              >
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
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

export default SignupScreen;
