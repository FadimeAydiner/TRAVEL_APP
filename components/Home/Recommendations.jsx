import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import reusable from '../Reusable/reusable.style';
import ReusableText from '../Reusable/ReusableText';
import { COLORS, SIZES, TEXT } from '../../constants/theme';
import {Feather} from '@expo/vector-icons'
import ReusableTile from '../Reusable/ReusableTile';

const Recommendations = () => {
    const navigation=useNavigation();
    const recommendations=require('../../assets/data/RecommendationsData.json');
    

  return (
    <View style={styles.container}>
        <View style={[reusable.rowWithSpace('space-between'),{paddingBottom:20}]}>
            <ReusableText
                    text={"Recommendations"}
                    family={"medium"}
                    size={TEXT.large}
                    color={COLORS.black}
            />
            <TouchableOpacity onPress={()=>navigation.navigate('Recommended')}>
                <Feather
                name='list'
                size={20}
                />

            </TouchableOpacity>
        </View>
    
      <FlatList
        data={recommendations}
        horizontal
        keyExtractor={(item)=>item._id}
        contentContainerStyle={{columnGap:SIZES.medium}}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>(
            <ReusableTile
                item={item} onPress={()=>navigation.navigate('PlaceDetails',item._id)}
            />
        )}
      />
    </View>
  )
}

export default Recommendations

const styles = StyleSheet.create({
    container:{
        paddingTop:30
    }
})