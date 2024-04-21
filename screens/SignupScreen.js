// import React, { useState } from 'react';
// import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native';

// const SignupScreen = ({ navigation }) => {
//   const [name, setName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [enteredOTP, setEnteredOTP] = useState('');
//   const [generatedOTP, setGeneratedOTP] = useState(''); // State to store the generated OTP
//   const [showOTP, setShowOTP] = useState(false); // State to manage OTP input and button visibility

//   const handleNameChange = (text) => {
//     setName(text);
//   };

//   const handlePhoneNumberChange = (text) => {
//     setPhoneNumber(text);
//   };

//   const handleSendOTP = () => {
//     if (!name || !phoneNumber) {
//       Alert.alert('Error', 'Please enter your name and phone number.');
//       return;
//     }

//     // Simulated OTP sending logic (replace this with actual OTP sending code)
//     const otp = Math.floor(1000 + Math.random() * 9000).toString(); // Generate a random OTP (example)
//     setGeneratedOTP(otp);
//     Alert.alert('OTP Sent', `An OTP has been sent to ${phoneNumber}: ${otp}`);
    
//     setShowOTP(true); // Show OTP input and button when Send OTP is pressed
//   };

//   const handleVerifyOTP = () => {
//     if (enteredOTP === generatedOTP) {
//       // Redirect to Home screen if OTP is correct
//       navigation.navigate('NavigationScreen');
//     } else {
//       Alert.alert('Wrong OTP', 'Please enter the correct OTP.');
//     }
//   };

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: 'white', paddingTop: 30 }}>
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text style={{ fontSize: 40, fontWeight: 'bold', marginBottom: 20 }}>
//           Let's Get You Set Up
//         </Text>
//       </View>
//       <View style={{ flex: 2, alignItems: 'center' }}>
//         <View
//           style={{
//             backgroundColor: '#91B3FA',
//             borderRadius: 30,
//             padding: 20,
//             width: '80%',
//             alignItems: 'center',
//           }}
//         >
//           <TextInput
//             style={{
//               backgroundColor: '#EAEAEA',
//               borderRadius: 15,
//               height: 50,
//               width: '100%',
//               paddingHorizontal: 15,
//               marginBottom: 15,
//             }}
//             placeholder="Name"
//             value={name}
//             onChangeText={handleNameChange}
//           />
//           <TextInput
//             style={{
//               backgroundColor: '#EAEAEA',
//               borderRadius: 15,
//               height: 50,
//               width: '100%',
//               paddingHorizontal: 15,
//               marginBottom: 15,
//             }}
//             placeholder="Mobile Number"
//             keyboardType="phone-pad"
//             value={phoneNumber}
//             onChangeText={handlePhoneNumberChange}
//           />
//           {!showOTP && ( // Render Send OTP button if showOTP is false
//             <TouchableOpacity
//               style={{
//                 backgroundColor: '#5053FF',
//                 borderRadius: 20,
//                 height: 50,
//                 width: '55%',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 marginBottom: 15,
//                 marginTop: 10,
//               }}
//               onPress={handleSendOTP} // Call handleSendOTP when button is pressed
//             >
//               <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
//                 Send OTP
//               </Text>
//             </TouchableOpacity>
//           )}
//           {showOTP && ( // Render OTP input and Verify button if showOTP is true
//             <>
//               <TextInput
//                 style={{
//                   backgroundColor: '#EAEAEA',
//                   borderRadius: 15,
//                   height: 50,
//                   width: '100%',
//                   paddingHorizontal: 15,
//                   marginBottom: 15,
//                   marginTop: 10,
//                 }}
//                 placeholder="OTP"
//                 keyboardType="numeric"
//                 value={enteredOTP}
//                 onChangeText={setEnteredOTP}
//               />
//               <TouchableOpacity
//                 style={{
//                   backgroundColor: '#5053FF',
//                   borderRadius: 20,
//                   height: 50,
//                   width: '55%',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                 }}
//                 onPress={handleVerifyOTP} // Call handleVerifyOTP when Verify button is pressed
//               >
//                 <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
//                   Verify
//                 </Text>
//               </TouchableOpacity>
//             </>
//           )}
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default SignupScreen;

import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setLoading, setError, clearError } from '../store/reducers/appSlice'; // Import actions from appSlice.js
import { addUser } from '../store/reducers/userSlice';

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [enteredOTP, setEnteredOTP] = useState('');
  const [generatedOTP, setGeneratedOTP] = useState('');
  const [showOTP, setShowOTP] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector(state => state.user.users); // Correctly access the users array from Redux store
  const error = useSelector(state => state.app.error);

  const handleNameChange = (text) => {
    setName(text);
  };

  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
  };

  const handleSendOTP = () => {
    if (!name || !phoneNumber) {
      Alert.alert('Error', 'Please enter your name and phone number.');
      return;
    }

    // Simulated OTP sending logic (replace this with actual OTP sending code)
    const otp = Math.floor(1000 + Math.random() * 9000).toString(); // Generate a random OTP (example)
    setGeneratedOTP(otp);
    Alert.alert('OTP Sent', `An OTP has been sent to ${phoneNumber}: ${otp}`);
    
    setShowOTP(true); // Show OTP input and button when Send OTP is pressed
  };

  const handleVerifyOTP = () => {
    if (enteredOTP === generatedOTP) {
      // Redirect to Home screen if OTP is correct
      dispatch(setUser({ name, phoneNumber }));
      // Dispatch addUser action to add user to Redux store
      dispatch(addUser({ name, phoneNumber }));
      navigation.navigate('NavigationScreen');
    } else {
      Alert.alert('Wrong OTP', 'Please enter the correct OTP.');
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
            value={name}
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
