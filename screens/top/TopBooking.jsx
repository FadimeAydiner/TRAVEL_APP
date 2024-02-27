import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ReusableTile from "../../components/Reusable/ReusableTile"
import { COLORS, SIZES } from '../../constants/theme'
import reusable from '../../components/Reusable/reusable.style'
import { ResuableBtn } from '../../components'

const TopBooking = ({navigation}) => {
    const hotels=require("../../assets/data/HotelsData.json")
  return (
    <View style={{margin:20}}>
      <FlatList
      data={hotels}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item)=>item._id}
      renderItem={({item})=>(
        <View style={{backgroundColor:COLORS.lightWhite,marginBottom:10,borderRadius:16}}>
            <ReusableTile
            item={item}
            />
            <View style={[reusable.rowWithSpace('space-between'),{margin:10}]} >
            <ResuableBtn
              onPress={()=>navigation.navigate('SelectRoom')}
              btnText={"Details"}
              width={(SIZES.width-50)/2.2}
              backgroundColor={COLORS.white}
              borderColor={COLORS.blue}
              borderWidth={0.5}
              textColor={COLORS.blue}
        
          />
          <ResuableBtn
              onPress={()=>navigation.navigate('SelectRoom')}
              btnText={"Cancel"}
              width={(SIZES.width-50)/2.2}
              backgroundColor={COLORS.red}
              borderColor={COLORS.red}
              borderWidth={0.5}
              textColor={COLORS.white}
        
          />

            </View>
        </View>

      )}

      />
    </View>
  )
}

export default TopBooking

const styles = StyleSheet.create({})