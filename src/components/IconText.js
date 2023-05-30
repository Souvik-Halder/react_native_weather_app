import React from "react";
import { View,Text,SafeAreaView,StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';


const IconText=(props)=>{
    const {iconName,iconSize,iconColor,bodyText,bodyTextStyles}=props
    const {container,textTheme}=styles
    console.log(iconSize)
    return(
        <View style={container}>
           <Feather name={iconName} size={iconSize} color={iconColor}/>
            <Text  style={[textTheme,bodyTextStyles]}>{bodyText}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        alignItems:'center',

    },
    textTheme:{
        fontWeight:'bold'
    }
})

export default IconText;
