import React from 'react'
import Root from './components/Root';
import SplashScreen from './screens/SplashScreen'
import Signin from './components/Signin'
import Login from './components/Login'
import Signup from './components/Signup';
import ForgotPassword from './screens/ForgotPassword';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LikedSongs from './screens/LikedSongs';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name="Splash"
          options={{
            headerShown: false,
            tabBarStyle: {
              display: "none"
            },
          }}
          component={SplashScreen} />
        <Stack.Screen name="Login" options={{
          headerShown: false,
          tabBarStyle: {
            display: "none"
          },
        }} component={Login} />
        <Stack.Screen options={{
          headerShown: false,
          tabBarStyle: {
            display: "none"
          },
        }} name="Root" component={Root} />

        <Stack.Screen options={{
          headerShown: false,
          tabBarStyle: {
            display: "none"
          },
        }} name="Signup" component={Signup} />
        <Stack.Screen options={{
          headerShown: false,
          tabBarStyle: {
            display: "none"
          },
        }} name="Forgot Password" component={ForgotPassword} />
        <Stack.Screen options={{
          headerShown: false,
          tabBarStyle: {
            display: "none"
          },
        }} name="LikedSongs" component={LikedSongs} />        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App