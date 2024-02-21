import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, TEXT } from '../../../constants/theme'
import {NetworkImage,ReusableText,HeightSpacer} from '../../../components/index'
import { useNavigation } from '@react-navigation/native'
const Country = ({item}) => {
  console.log(item.imageUrl);

  const navigation=useNavigation();
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('CountryDetails',{item})}>
      <View>
        <NetworkImage
          source={item.imageUrl} 
          width={85} 
          height={85} 
          radius={12}
        />
        <HeightSpacer height={5}/>
      <ReusableText
                text={item.country}
                family={'regular'}
                size={TEXT.large}
                color={COLORS.black}
                align={'center'}
         />
      </View>
    </TouchableOpacity>
  )
}

export default Country

const styles = StyleSheet.create({})