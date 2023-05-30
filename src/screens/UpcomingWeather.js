import React from 'react'
import { SafeAreaView,StyleSheet,Text,View ,StatusBar,ImageBackground} from 'react-native'
import { FlatList } from 'react-native'
import { Feather } from '@expo/vector-icons';
import ListItem from '../components/ListItem';
const Data=   [                     
{
dt_txt:"2021-09-01 12:00:00",
main:{
temp_min:30,
temp_max:35,
},
weather:[
{
main:"Clouds",
}
]


},
{
    dt_txt:"2022-08-01 12:00:00",
    main:{
    temp_min:48,
    temp_max:25,
    },
    weather:[
    {
    main:"Clear",
    }
    ]
    
    },
    {
        dt_txt:"2023-09-01 12:00:00",
        main:{
        temp_min:40,
        temp_max:35,
        },
        weather:[
        {
        main:"Rain",
        }
        ]
        
        
        }
                      
]                 


const UpcomingWeather = () => {
    const renderItem=({item})=>(
<ListItem condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max}/>
    )
const {container,image}=styles

    return(
        <SafeAreaView style={container}>
            <Text style={styles.hi}>UpcomingWeather</Text>
            <ImageBackground source={require('../../assets/upcoming.jpg')} style={image}>
            <FlatList 
            data={Data}
            renderItem={renderItem}
            keyExtractor={item => item.dt_txt}
            />
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
       
        backgroundColor:'royalblue'
        //This will provide the margin form the top status bar automatically
       
    },
 hi:{
    marginTop: StatusBar.currentHeight || 0,
    textAlign:'center',
 },
    image:{
     flex:1,
    }
})

export default UpcomingWeather