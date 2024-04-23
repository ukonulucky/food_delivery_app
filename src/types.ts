import { ImageSourcePropType } from "react-native"


export type AuthStackNavigationParams = {
    
} 


export type headerScreenPropType = {
    title: string,
    iconName: string,
    iconType: string
}

export type foodCardScreenPropType = {
    onPressFoodCard?: () => void,
    restaurantName: string,
    deliveryAvailable?: string,
    discountAvailable ?: string,
    discountPercent?: string,
    numberOfReview: string,
    businessAddress: string,
    faraway: string,
    averageReview: string,
    image: ImageSourcePropType, 
    screenWidth: number
}