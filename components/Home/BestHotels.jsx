import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import reusable from '../Reusable/reusable.style'
import { COLORS, SIZES, TEXT } from '../../constants/theme'
import {Feather} from'@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import ReusableText from '../Reusable/ReusableText'
import HotelCard from '../Tiles/Hotels/HotelCard'

const BestHotels = () => {
    const navigation=useNavigation();
    const hotels = require('../../assets/data/HotelsData.json');
  return (
    <View style={styles.container}>
    <View style={[reusable.rowWithSpace('space-between'),{paddingBottom:20}]}>
        <ReusableText
                text={"Near By Hotels"}
                family={"medium"}
                size={TEXT.large}
                color={COLORS.black}
        />
        <TouchableOpacity onPress={()=>navigation.navigate('HotelList')}>
            <Feather
            name='list'
            size={20}
            />

        </TouchableOpacity>
    </View>
        <FlatList
         data={hotels}
         horizontal
         keyExtractor={(item)=>item._id}
         contentContainerStyle={{columnGap:SIZES.medium}}
         showsHorizontalScrollIndicator={false}
         renderItem={({item})=>(
           <HotelCard item={item} margin={10} onPress={()=>{navigation.navigate('HotelDetails')}}/>
            
    
        )} 
        />
    </View>
  )
}

export default BestHotels

const styles = StyleSheet.create({})