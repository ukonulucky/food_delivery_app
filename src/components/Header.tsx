import {View, StyleSheet, Text, SafeAreaView, StatusBar} from 'react-native'
import { colors, parameter } from '../global/styles'
import { Icon } from '@rneui/base'


import { headerScreenPropType } from '../types'
import { useNavigation } from '@react-navigation/native'


const Header = function({title, iconName, iconType} : headerScreenPropType) {
    const navigation = useNavigation()
    
    return(
        <View style={styles.header}>
          <View style={styles.iconStyle}>
          <Icon
                type={iconType}
                name={iconName}
                color={colors.headerText }
                  size={28}
                  onPress={() => {
                    navigation.goBack()
                  }}
                  activeOpacity={0.2}
                  underlayColor='transparent'
                
                   
            />
          

          </View>
               <View>
               <Text style={styles.headerText}>
                {title}
            </Text>    
                </View>     
            
          
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        flexDirection: `row`,
        backgroundColor: colors.buttons,
        height:parameter.headerHeight,
        alignItems:`center`
    },
    headerText:{
        color: colors.headerText,
        fontSize:22,
        fontWeight:`bold`,
        marginLeft: 30,
    },
    iconStyle:{
        marginLeft: 20
    }
})

export default Header