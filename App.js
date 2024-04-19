import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartupScreen from './screens/StartupScreen';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';

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
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="StartupScreen" component={StartupScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
