import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import babelConfig from '../../babel.config'
import { colors } from '../global/styles'
import { Icon, withBadge } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const HomeHeader = () => {
const BadgeIcon = withBadge(0)(Icon)

const navigation = useNavigation()
  return (
    <View
    style={
        styles.header
    }
    >
        <View>
         <Icon 
         name='menu'
         type='material-community'
         size={32}
         color={"white"}
         onPress={() => {
            navigation.toggleDrawer();
         }}
         />
        </View>
        <View>
            <Text style={{
                color:colors.cardBackground,
                fontSize:25,
                fontWeight:"bold"
            }}>
                XpressFood
            </Text>

        </View>
        <View>
              <BadgeIcon 
              type="material-community"
              name="cart"
              size={35}
              color={colors.cardBackground}


              />
        </View>
    
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
   header: {
    backgroundColor: colors.buttons,
    flexDirection:"row",
    justifyContent:"space-between",
    paddingTop: 10,
    width: `100%`,
    paddingHorizontal:15
    
    
   }
})