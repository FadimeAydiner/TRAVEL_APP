import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AssetImage, HeightSpacer, ResuableBtn, ReusableText, ReusableTile } from '../../components'
import { COLORS, SIZES, TEXT } from '../../constants/theme'

const Failed = ({navigation}) => {
  const hotel= {
    "_id": "64c675183cfa5e847bcd5433",
    "country_id": "64c62bfc65af9f8c969a8d04",
    "title": "Mountain Lodge",
    "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/5da4db00-e83f-449a-a97a-b7fa80a5bda6-aspen.jpeg",
    "rating": 4.5,
    "review": "12024 Reviews",
    "location": "Aspen, CO"
}
return (
<View>
  <View style={{marginTop:'15%'}}>
    <AssetImage 
    data={require('../../assets/images/Falied.png')}
    width={'100%'}
    height={200}
    mode={'contain'}
    /> 
    <HeightSpacer height={40}/>
    <View style={{alignItems:'center'}}>
    <ReusableText
          text={"Booking Failed"}
          family={"medium"}
          size={TEXT.large}
          color={COLORS.black}
   />
   <HeightSpacer height={20}/>
   <ReusableText
          text={'You can find your booking details below'}
          family={"regular"}
          size={SIZES.medium}
          color={COLORS.gray}
   />
   <HeightSpacer height={20}/>
    </View>
    <View style={{margin:20}}>
    <ReusableText
          text={'Room Details'}
          family={"bold"}
          size={SIZES.medium}
          color={COLORS.dark}
   />
    <HeightSpacer height={20}/>
    <ReusableTile item={hotel}/>
    <HeightSpacer height={40}/>
    <ResuableBtn
          onPress={()=>navigation.goBack()}
          btnText={"Try Again"}
          width={SIZES.width-50}
          backgroundColor={COLORS.red}
          borderColor={COLORS.red}
          borderWidth={0}
          textColor={COLORS.red}
    
      />
   </View>
  </View>
</View>
)
}
export default Failed

const styles = StyleSheet.create({})