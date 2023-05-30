import React from "react";
import { View,Text,SafeAreaView,StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';
import RowText from "../components/RowText";
const CurrentWeather = () => {
  const {container,wrapper,temp,feels,highLow,highLowWrapper,bodyWrapper,description,message}=styles;
  return (
    <SafeAreaView style={wrapper}>
 <View style={container}>
      <Text>Current Weather </Text>
      <Feather name="sun" size={100} color="black" />
      <Text style={temp}>6</Text>
      <Text style={feels}>Fells Like 5</Text>
     
      <RowText messageOne={'High: 8'} messageTwo={'Low: 2'} 
      containerStyles={highLowWrapper}
      messageOneStyles={highLow}
      messageTwoStyles={highLow}
      />
    
      </View>

    <RowText messageOne={'Its Sunny'} messageTwo={'Its perfect t-shirt weather'} 
      containerStyles={bodyWrapper}
      messageOneStyles={description}
      messageTwoStyles={message}
      />
     
   

 
    </SafeAreaView>
   
  )
}

const styles = StyleSheet.create({
  container: {
   
    flex:1,
    alignItems:'center',
   justifyContent:'center'
  },
  wrapper:{
    backgroundColor: "pink",
    flex :1,
  },
  temp:{
    color:'black',
    fontSize:48
  },
  feels:{
    fontSize:30,
    color:'black'
  },
  highLow:{
    color:'black',
    fontSize:20
  },
  highLowWrapper:{
    flexDirection:'row'
  },
  bodyWrapper:{
    justifyContent:'flex-end',
    alignItems:'flex-start',
    paddingLeft:25,
    marginBottom:40
  },
  description:{
    fontSize:48,
  },
  message:{
    fontSize:30
  }
});
export default CurrentWeather;