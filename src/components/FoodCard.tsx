import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { foodCardScreenPropType } from '../types'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import { StyleSheet } from 'react-native'
import { colors } from '../global/styles'
import { Icon } from 'react-native-elements'

const FoodCardScreen = ({
    onPressFoodCard,
    restaurantName,
    deliveryAvailable,
    discountAvailable,
    discountPercent,
    numberOfReview,
    businessAddress,
    faraway,
    averageReview,
    image,
    screenWidth
} : foodCardScreenPropType) => {



  return (
   <TouchableOpacity 
   activeOpacity={0.7}
   style={styles.cardView}>
          <View style={{
            ...styles.image, 
            width: screenWidth
          }}>
            <Image
            source={image}
           style={{
            width:`100%`,
            height:`100%`
           }}

            />
            <View>
              <Text style={styles.restaurantName}>{restaurantName}</Text>
            </View>
            <View style={{
              flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between"
            }}>
              <View  style={styles.distance}>
                <Icon
                name='place'
                type='material'
                color={colors.grey2}
                size={18}
                
                
                />
                 <Text style={{
                  color: colors.grey2
                 }}>
                 {faraway}{` `}Min
                 </Text>
              </View>
              <View style={styles.bussinessAddress}>
                <Text>
                  {businessAddress}
                </Text>
              </View>
            </View>
            <View style={styles.ratingView}>
              <Text style={{
                color: colors.cardBackground,
                fontWeight: "800",
                fontSize: 18
                
              }}> {averageReview}</Text>
             <View>
             <Text style={{
             color:colors.cardBackground,
             
             }}>
                {numberOfReview}{" "}
                reviews
              </Text>
             </View>

            </View>
            <View>

            </View>
          </View>
   </TouchableOpacity>
  )
}

export default FoodCardScreen

const styles = StyleSheet.create({
   cardView: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderWidth: 1,
    borderColor: colors.grey4,
    height: 210,
    overflow: `hidden`
    
   },
   image:{
 borderTopLeftRadius: 5,
 borderTopRightRadius: 5,
 height: 150
   },
   restaurantName: {
    fontSize: 16,
    fontWeight: `bold`,
    color: colors.grey2,
    marginTop: 2,
    marginLeft: 7
   },
   distance: { 
    paddingHorizontal: 5,
    borderColor: colors.grey4,
    borderRightWidth: 1.5,
    flexDirection:"row",
    alignItems:"center",
    marginTop: 2,

   },
   bussinessAddress: {
  paddingHorizontal: 5,
  flex: 1
    
   },
   ratingView:{
    position: `absolute`,
    top: 2,
    right: 5,
    alignItems:"center"
   }
})