import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants/theme'
import { HeightSpacer, ReusableText } from '../../components'
import AppBar from '../../components/Reusable/AppBar'

const Settings = () => {
  return (
    <View style={{backgroundColor:COLORS.lightWhite,flex:1}}>
        <View style={{height:120}}>
        <AppBar
        top={50}
        left={20}
        right={20}
        color={COLORS.white}
        onPress={()=>navigation.goBack()}
        />
        </View>    
        <View style={{marginHorizontal:20}}>
        <ReusableText
              text={"Account Settings"}
              family={"regular"}
              size={SIZES.xLarge-5}
              color={COLORS.black}
       />
       <HeightSpacer height={10}/>
       <ReusableText
              text={"Support"}
              family={"regular"}
              size={SIZES.xLarge-5}
              color={COLORS.black}
       />
       <HeightSpacer height={10}/>
       <ReusableText
              text={"Legal"}
              family={"regular"}
              size={SIZES.xLarge-5}
              color={COLORS.black}
       />
       <HeightSpacer height={10}/>
        </View>  
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({})