import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ReusableTile from "../../components/Reusable/ReusableTile"
import { COLORS, SIZES } from '../../constants/theme'


const TopTrips = ({navigation}) => {
    const places=require("../../assets/data/RecommendationsData.json")
  return (
    <View style={{margin:20}}>
      <FlatList
      data={places}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item)=>item._id}
      renderItem={({item})=>(
        <View style={{backgroundColor:COLORS.lightWhite,marginBottom:10,borderRadius:16}}>
            <View style={{marginBottom:10}}>
            <ReusableTile
            item={item}
            onPress={()=>navigation.navigate('PlaceDetails',item._id)}
            />
            </View>
           
           
          
        </View>

      )}

      />
    </View>
  )
}

export default TopTrips

const styles = StyleSheet.create({})