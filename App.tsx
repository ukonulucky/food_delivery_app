
import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native';


import Header from './src/components/Header';
import { colors } from './src/global/styles';
import SignInScreen from './src/screens/auth/SignInScreen';
import SignInSignOutWelcomeScreen from './src/screens/auth/SignInSignOutWelcomeScreen';
import RootNavigators from './src/navigation/RootNavigators';
import HomeHeader from './src/components/HomeHeader';
import HomeScreen from './src/screens/client/HomeScreen';
import AuthNavigators from './src/navigation/AuthNavigators';

export default function App() {
  return (
    <View style={styles.container}>
    
  
    <StatusBar 
      backgroundColor={colors.statusBar}   
      
      />
<RootNavigators />
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
