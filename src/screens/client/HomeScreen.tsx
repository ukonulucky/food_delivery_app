import {
     View, 
     Text, 
     SafeAreaView, 
     StyleSheet, 
     ScrollView, 
     TouchableOpacity, 
     FlatList,
     Pressable,
     Image,
     Dimensions
    } from 'react-native'
import React, { useState } from 'react'
import HomeHeader from '../../components/HomeHeader'
import { colors } from '../../global/styles'
import { Icon } from 'react-native-elements'
import { FoodCardDataList, foodList } from '../../global/Data'
import FoodCardScreen from '../../components/FoodCard'
import CountDown from "react-native-countdown-component"
import babelConfig from '../../../babel.config'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

const [deliveryState, setDeliveryState] = useState(false)
 const [isCategoryCartClicked, setIsCategoryCartClicked] = useState<number>(1)

const screenWidth = Dimensions.get(`screen`).width
  return (
   <SafeAreaView style={styles.container}>
    <HomeHeader /> 
    
    <ScrollView
    stickyHeaderIndices={[0]}
    >
        <View style={{
          backgroundColor: colors.cardBackground,
          paddingBottom: 8,
          marginBottom: 8
        }}>
        <View style={{
    marginTop: 10,
    alignItems:"center",
  justifyContent: "space-around",
  flexDirection:`row`
   }}>
   <TouchableOpacity
   activeOpacity={0.2}
   onPress={() => {
    setDeliveryState(false)
   }}
  
   >
   <View  style={{...styles.deliveryButton, 
    backgroundColor: !deliveryState ? colors.buttons : colors.grey5
   }}>
   <Text style={styles.deliveryText}>
        Delivery
    </Text>
   </View>
  
   </TouchableOpacity>

   <TouchableOpacity
   activeOpacity={0.2}
   onPress={() => {
    setDeliveryState(true)
   }}
  
   >
    <View  style={{...styles.deliveryButton, 
    backgroundColor: deliveryState ? colors.buttons : colors.grey5
   }}>
   <Text style={styles.deliveryText}>
        Pick-Up
    </Text>
    </View>
   
  
   </TouchableOpacity>


   </View>
        </View>
        <View style={{
          flexDirection:"row",
          alignItems:"center",
          marginHorizontal: 10

        }}>
         <View style={{
          marginRight: 5,
          
         }}>
         <Text style={{
          fontSize: 14
         }}>
          Options change in
          </Text>
         </View>
          <CountDown 
        until={3600}
        size={12}
        digitStyle={{
            backgroundColor:colors.lightgreen
        }}
        timeToShow = {["M","S"]}
        timeLabels = {{
          m: "Min",
          s:"Sec"
        }}
        digitTxtStyle = {{
          color: colors.cardBackground
        }}
        
          />
        </View>
        <View style={styles.locationAndFilterContainer}>
         
          <View style={styles.locationAndTimeContainer}>
          <View style={styles.location}>
            <Icon
            name='map-marker'
            type='material-community'
            size={24}
            color={colors.grey1}

            />
            <Text style={styles.locationText}>
              22 Basire Street
            </Text>

          </View>
          <View style={styles.locationTimeSubContainer}>
          <Icon
            name='clock-time-four'
            type='material-community'
            size={24}
            color={colors.grey1}

            />
            <Text style={styles.locationText}>
              Now
            </Text>

          </View>
          </View>
          <View style={styles.filterContainer}>
          <Icon
            name='tune'
            type='material-community'
            size={24}
            color={colors.grey1}

            />
          </View>
          <View>

          </View>
        </View>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryHeadingText}>
            Categories
          </Text>
          <View style={{
            marginTop: 10,
            paddingLeft: 10,
            
            
          }}>
            <FlatList
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{
              width: 5
            }} />}
            horizontal
            data={foodList}

            renderItem={({item}) => {
                return <Pressable
                onPress={() => {
                  setIsCategoryCartClicked(item.id)
                }}
                >
                    <View  style={isCategoryCartClicked == item.id ? styles.categoryCartContainerClicked : styles.categoryCartContainer}>
                      <Image 
                      source={item.image}
                      style={{
                        width: 60,
                        height: 60,
                        borderRadius: 30
                      }}
                      />
                      <Text  style={{
                        textAlign:`center`
                      }} >
                        {item.name}
                      </Text>
                    </View>
                </Pressable>
            }}
            
            />
          </View>

        </View>
        <View style={{
          marginVertical:  10
        }}> 
        <Text style={styles.categoryHeadingText}>
              Fredd delivery now
          </Text>
          <View style={{
            marginHorizontal: 10
          }}>

          <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={FoodCardDataList}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => <View 
          style={{
            width: 10,
            height: 200
          }}
          />}
          renderItem={({item}) => <View style={{
            marginTop: 10,
            
          }}>
          <FoodCardScreen
           restaurantName = {item.restaurantName}
           numberOfReview = {item.numberOfReview}
           businessAddress = {item.businessAddress}
           faraway =  {item.faraway}
           averageReview = {item.averageReview}
           image = {item.image}
           screenWidth = { screenWidth * 0.8}
          />
          </View>}
          />
          </View>
          
        </View>

        <View style={{
          marginVertical:  10
        }}> 
        <Text style={styles.categoryHeadingText}>
              Promotions available
          </Text>
          <View style={{
            marginHorizontal: 10
          }}>

          <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={FoodCardDataList}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => <View 
          style={{
            width: 10,
            height: 200
          }}
          />}
          renderItem={({item}) => <View style={{
            marginTop: 10,
            
          }}>
          <FoodCardScreen
           restaurantName = {item.restaurantName}
           numberOfReview = {item.numberOfReview}
           businessAddress = {item.businessAddress}
           faraway =  {item.faraway}
           averageReview = {item.averageReview}
           image = {item.image}
           screenWidth = { screenWidth * 0.8}
          />
          </View>}
          />
          </View>
          
        </View>

        <View style={{
          marginVertical:  10
        }}> 
        <Text style={styles.categoryHeadingText}>
             Restaurants in your area
          </Text>
          <View style={{
            marginTop: 10,
            marginHorizontal: 10
          }}>

         {
          FoodCardDataList.map(item => <View key={item.id} style={{marginTop: 10}
          }
          >

        <FoodCardScreen
           restaurantName = {item.restaurantName}
           numberOfReview = {item.numberOfReview}
           businessAddress = {item.businessAddress}
           faraway =  {item.faraway}
           averageReview = {item.averageReview}
           image = {item.image}
           screenWidth = { screenWidth - 20}
          />
          </View>)
         }
          </View>
          
        </View>
  
  
    </ScrollView>
<View style={styles.floatButton}>
  <TouchableOpacity
  activeOpacity={0.6}
  onPress={() => {
  

  }}
  >
    <Icon
    name='place'
    type='material'
    color={colors.buttons}
    />
    <Text style={{
      color: colors.grey1
    }}>Map</Text>

  </TouchableOpacity>
</View>
   </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
 container:{
    flex: 1 
 },
 deliveryButton: {
   paddingHorizontal: 20, 
   paddingVertical: 5,
   borderRadius: 10,
 
 },
 deliveryText: {
    fontSize: 16
 },

 locationAndFilterContainer:{
  flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
marginTop: 10,
marginHorizontal: 20


 },
 locationAndTimeContainer:{
  flexDirection: "row",
   justifyContent: 'center',
   backgroundColor: colors.grey5,
   borderRadius: 20,
   paddingVertical: 3,
   flex: 1
  
   },
 location:{
  flexDirection: "row",
  justifyContent:"center",
  alignItems:"center",
  
 },
 locationText: {
 fontSize: 12,
 color: colors.grey2
 },
 filterContainer:{
  marginLeft: 30,
  alignItems:`flex-end`

 },
 locationTimeSubContainer: {
 flexDirection:`row`,
 alignItems:"center",
 backgroundColor: colors.cardBackground,
 paddingHorizontal: 10,
 paddingVertical: 1,
 borderRadius: 15,
 marginLeft: 20
 },
 categoryContainer:{
  marginTop: 20
 },
 categoryHeadingText:{
 fontSize: 20,
 fontWeight:"bold",
 color:colors.grey1,
 backgroundColor: colors.grey5,
 paddingHorizontal: 10,
 paddingVertical: 2

 },
 categoryCartContainer:{
   alignItems: "center",
   justifyContent:"center",
   backgroundColor: colors.cardBackground,
   width: 80,
   height: 100,
   borderRadius: 30

 },
 categoryCartContainerClicked:{
  alignItems: "center",
  justifyContent:"center",
  backgroundColor: colors.buttons,
  width: 80,
  height: 100,
  borderRadius: 30
},
floatButton: {
  position:"absolute",
  bottom: 10,
  right: 20,
  backgroundColor:colors.grey5,
  width:55,
  height: 55,
  borderRadius: 25,
  alignItems:"center",
  justifyContent:"center",
  elevation: 5,
}
})