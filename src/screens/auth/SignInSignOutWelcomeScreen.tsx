import { View, Text, SafeAreaView, StyleSheet, useAnimatedValue } from 'react-native'
import React from 'react'
import { colors, parameter } from '../../global/styles'
import Swiper from "react-native-swiper"
import { Image } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'



const SignInSignOutWelcomeScreen = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView style={{
        flex: 1,
    
    }}>
        <View style={{
            flex: 3,
            justifyContent:`flex-start`,
            alignItems:`center`,
            paddingTop: 20,
            
        }}>
            <Text style={{
                fontSize:26, 
                color:colors.buttons,
                fontWeight:`bold`
            }}>
                DISCOVER RESTAURANT
            </Text>
            <Text style={{
                fontSize:26,
                color:colors.buttons,
                fontWeight: `bold`,
                
            }}>
                IN YOUR AREA
            </Text>
        </View>
     

     <View
     style={{
        flex: 4,
        justifyContent:'center'
     }}
     >
  <Swiper autoplay = {true} loop>
    <View style={styles.slide1}>
        <Image 
        source={require("../../../assets/images/sliderImage1.jpg")}
        style={{
            height:"100%",
            width:"100%"
        }}
        />
    </View>

    <View style={styles.slide2}>
        <Image 
        source={require("../../../assets/images/sliderImage2.jpg")}
        style={{
            height:"100%",
            width:"100%"
        }}
        />
    </View>

    <View style={styles.slide3}>
        <Image 
        source={require("../../../assets/images/sliderImage1.jpg")}
        style={{
            height:"100%",
            width:"100%"
        }}
        />
    </View>

  </Swiper>
     </View>


     <View style={{
        flex: 3,
        justifyContent:"flex-end",
        marginBottom: 20,
        paddingHorizontal: 20
        
     }}>
        <View>
        <Button 
        title={`SIGN IN`}
        buttonStyle={parameter.styledButton}
        titleStyle={parameter.buttonTitle}
        onPress={() => {
          navigation.navigate("SignInScreen")
        }}
    
        />
    </View>
    <View style={{marginTop: 10
    }}>
        <Button 
        title={`Create an account`}
        buttonStyle={styles.createButton}
        titleStyle={styles.createButtonTitle}
        onPress={() => {
            console.log(`pressed`)
        }}
       
        />
    </View>

     </View>
    </SafeAreaView>
  )
}

export default SignInSignOutWelcomeScreen

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent:`center`,
    alignItems:`center`,
    backgroundColor:"#9DD6EB"
  },
  slide2: {
    flex: 1,
    justifyContent:`center`,
    alignItems:`center`,
    backgroundColor:"#9DD6EB"
  },
  slide3: {
    flex: 1,
    justifyContent:`center`,
    alignItems:`center`,
    backgroundColor:"#9DD6EB"
  },
  createButton:{
    backgroundColor:`white`,
    alignItems:`center`,
    justifyContent:`center`,
    borderRadius: 12,
    borderWidth: 0.3,
    borderColor:colors.grey4,
    height: 50,
    marginTop: 10,
   width: `100%`
},
createButtonTitle: {
    fontWeight: `bold`,
    fontSize: 20,
    color:colors.grey1
  
}
})