import React from "react";
import { View,Text,SafeAreaView,StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

const ListItem=(props)=>{
    const { dt_txt,min,max ,condition}=props
    const{item,date,temp}=styles;
    return(
        <View style={styles.item}>
        <Feather name="sun" size={24} color="white" />
            <Text style={date}>{dt_txt}</Text>
         
            <Text style={temp}>{max}</Text>
            <Text style={temp}> {min}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor:'pink',
        padding:20,
        marginVertical:8,
        marginHorizontal:16,
        borderColor:'black',
        borderWidth:3,
        borderRadius:30,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    date:{
        fontSize:20,
        color:'black'
    },
    temp:{
        fontSize:20,
        color:'black'
    }
})

export default  ListItem;
