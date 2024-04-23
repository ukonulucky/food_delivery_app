import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/client/HomeScreen'
import { Icon } from 'react-native-elements'
import ProfileScreen from '../screens/client/ProfileScreen'
import MyOrders from '../screens/client/MyOrders'
import Search from '../screens/client/Search'
import { colors } from '../global/styles'

const BottomTabNavigators = () => {

    const BottomStack = createBottomTabNavigator()
  return (
  <BottomStack.Navigator
  screenOptions={{
    headerShown: false
  }}
  >
     <BottomStack.Screen
     name='HomeScreen'
     component={HomeScreen}
     options={{
      tabBarLabel: `Home`,
      tabBarActiveTintColor:colors.buttons,
     tabBarIcon: ({color, focused, size}) => (
        <Icon 
        name='home'
        type='material'
        color={ focused ? colors.buttons : colors.grey3}
        size={size}
        />
     )
     }}

     />

<BottomStack.Screen
     name='Search'
     component={Search}
     options={{
      tabBarLabel: `Search`,
      tabBarActiveTintColor:colors.buttons,
     tabBarIcon: ({color, focused, size}) => (
        <Icon 
        name='search'
        type='material'
        color={ focused ? colors.buttons : colors.grey3}
        size={size}
        />
     )
     }}

     />
      <BottomStack.Screen
     name='MyOrders'
     component={MyOrders}
     options={{
      tabBarLabel: `My Orders`,
      tabBarActiveTintColor:colors.buttons,
     tabBarIcon: ({color, focused, size}) => (
        <Icon 
        name='view-list'
        type='material'
        color={ focused ? colors.buttons : colors.grey3}
        size={size}
        />
     )
     }}

     />
      <BottomStack.Screen
     name='Profile'
     component={ProfileScreen}
     options={{
      tabBarLabel: `My Account`,
       tabBarActiveTintColor:colors.buttons,
     tabBarIcon: ({color, focused, size}) => (
        <Icon 
        name='person'
        type='material'
        color={ focused ? colors.buttons : colors.grey3}
        size={size}
        />
     )
     }}

     />
  </BottomStack.Navigator>
  )
}

export default BottomTabNavigators 