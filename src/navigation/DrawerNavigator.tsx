import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomTabNavigators from './BottomStackNavigators'
import HomeScreen from '../screens/client/HomeScreen'



// Define your screen types
type DrawerParamList = {
  Home: undefined;
  Profile: undefined;
  // Add more screens as needed
};


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

  return (
    <Drawer.Navigator initialRouteName="Home" 
    screenOptions={{
      headerShown: false
    }}
    >
    <Drawer.Screen name="Home" component={BottomTabNavigators} />
    {/* Add more screens as needed */}
  </Drawer.Navigator>
  )
}

export default DrawerNavigator