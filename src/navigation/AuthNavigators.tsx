import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import SignInScreen from '../screens/auth/SignInScreen'
import SignInSignOutWelcomeScreen from '../screens/auth/SignInSignOutWelcomeScreen'
import BottomTabNavigators from './BottomStackNavigators'
import DrawerNavigation from './DrawerNavigator'
import HomeScreen from '../screens/client/HomeScreen'



const AuthNavigators = () => {
 const AuthStack = createNativeStackNavigator()

    return (
     <AuthStack.Navigator 
       screenOptions={{
        headerShown: false
      }}
     >
        <AuthStack.Screen name='SignInSignOutWelcomeScreen' component={SignInSignOutWelcomeScreen} />
        <AuthStack.Screen name='SignInScreen' component={SignInScreen} />
        <AuthStack.Screen name='BottomTabNavigators' component={DrawerNavigation} />
     </AuthStack.Navigator>
  )
}

export default AuthNavigators