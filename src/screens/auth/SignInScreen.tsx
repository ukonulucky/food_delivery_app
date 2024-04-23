import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { Icon, Button, SocialIcon } from 'react-native-elements'

import Header from '../../components/Header'
import { colors, parameter, title } from '../../global/styles'



export default function SignInScreen({navigation}){


    const [inputFocused, setInputFocused] = useState(false)
    
  return (
   <SafeAreaView>
    <Header  
     title='My Account' 
     iconType='material-community'
     iconName='arrow-left'/>
<View  style={styles.container}>
    <View>
        <Text style={title}>
            Sign-In
        </Text>
    </View>
    <View style={styles.text1Container}>
        <Text style={styles.text1}>Please enter the email and password</Text>
        <Text style={styles.text1}>registered   with your account</Text>
    </View>
    <View style={{
        marginTop: 20
    }}>
        <View>
        <TextInput
        style={styles.TextInput1}
        placeholder='Email'
        keyboardType='email-address'
         />
        </View>
        <View style={styles.TextInput2}>
            <Animatable.View animation={inputFocused ? `fadeInLeft` : ``} duration={200}>
              <Icon 
              name='lock'
              type='material'
              iconStyle={{
                color: colors.grey3
              }}
              />
            </Animatable.View >
            <TextInput
            placeholder='Password'
            onFocus={() => {
                setInputFocused(true)
            }}
            onBlur={() => {
                setInputFocused(false)
            }}
            style={{
                flex: 1,
                paddingLeft: 10
            }}
            /> 

            <Animatable.View animation={inputFocused ? `fadeInLeft` : ``} duration={400}>
            <Icon 
              name='visibility-off'
              type='material'
              iconStyle={{
                color: colors.grey3
              }}
              />
                
            </Animatable.View>

        </View>
    </View>
    <View>
        <Button 
        title={`SIGN IN`}
        buttonStyle={parameter.styledButton}
        titleStyle={parameter.buttonTitle}
        onPress={() => {
          navigation.navigate("BottomTabNavigators")
          console.log(`item pressed`)  
        }}
        

        />
    </View>
    
    <View style={{
        alignItems:`center`,
        marginTop: 20
    }}>
        <Text style={{
           ...styles.text1, textDecorationLine:`underline` 
        }}> Forgot Password?</Text>
    </View>

    <View style={{
        alignItems:`center`,
        marginTop: 20
    }}>
        <Text style={{
           fontSize: 20,
           fontWeight:`bold`
        }}>OR</Text>
    </View>
    <View style={{
        marginTop: 20
    }}>
        <SocialIcon 
        button
        title='Sign in With Facebook'
        type='facebook'
        onPress={() => {

        }}
        style={styles.SocialIcon}
        />
    </View>
    <View style={{
        marginTop: 10
    }}>
        <SocialIcon 
        button
        title='Sign in With google'
        type='google'
        onPress={() => {

        }}
        style={styles.SocialIcon}
        />
    </View>
    <View style={{
        marginTop: 20
    }}>
        <Text style={{
           ...styles.text1
        }}> New on XpressFood ?</Text>
    </View>
    <View style={{
        alignItems:`flex-end`
    }}>
        <Button 
        title={`create account`}
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

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 20,
        marginTop: 10
    },
    text1:{
        color: colors.grey1,
        fontSize: 16
    },
    text1Container: {
        alignItems:`center`,
        marginTop: 2,
        
    },
    TextInput1:{
        borderWidth:1,
    borderColor: `#86939e`,
    width: `100%`,
    marginBottom:20,
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 40,
    color: colors.grey1

    },
    TextInput2:{
        borderWidth:1,
    borderColor: `#86939e`,
    width: `100%`,
    marginBottom:20,
    borderRadius: 12,
    paddingHorizontal: 15,
    flexDirection:`row`,
    justifyContent:`space-between`,
    alignContent:`center`,
    alignItems:`center`,
    height: 40,
    overflow:`hidden`

    },
    SocialIcon:{
        borderRadius: 12, 
        height: 50
    },
    createButton:{
        backgroundColor:`white`,
        alignItems:`center`,
        justifyContent:`center`,
        borderRadius: 12,
        borderWidth: 1,
        borderColor:`#ff8c52`,
        height: 50,
        marginTop: 10,
        width:200,
        overflow:`hidden`
        
    },
    createButtonTitle: {
        fontWeight: `bold`,
        fontSize: 18,
        color:colors.buttons
      
    }

})