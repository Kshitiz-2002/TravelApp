import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import AccountScreen from './screens/AccountScreen';
import BookingScreen from './screens/BookingScreen';
import BusBooking from './screens/BusBooking';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import NavigationScreen from './screens/NavigationScreen';
import SignupScreen from './screens/SignupScreen';
import StartupScreen from './screens/StartupScreen';
import TrainBooking from './screens/TrainBooking';

const Stack = createNativeStackNavigator();

const App = () => {
  const customTransition = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: customTransition,
        }}
      >
        <Stack.Screen
          name="Home"
          component={StartupScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="StartupScreen" component={StartupScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Train" component={TrainBooking} />
        <Stack.Screen name="Booking" component={BookingScreen} />
        <Stack.Screen name="Bus" component={BusBooking} />
        <Stack.Screen
          name="NavigationScreen"
          component={NavigationScreen}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
