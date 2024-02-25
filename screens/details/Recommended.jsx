import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppBar from '../../components/Reusable/AppBar'
import { COLORS } from '../../constants/theme'
import { ReusableTile } from '../../components'

const Recommended = ({navigation}) => {
  const recommendations=require('../../assets/data/RecommendationsData.json');

  return (
    <SafeAreaView style={{marginHorizontal:20}}>
      <View style={{height:50}}>
        <AppBar
        top={10}
        left={0}
        right={0}
        title={"Recommendations"}
        color={COLORS.white}
        icon={'search1'}
        color1={COLORS.white}
        onPress={()=>navigation.goBack()}
        onPress1={()=>navigation.navigate('Search')}
        />
      </View>
      <View style={{paddingTop:20}}>
        <FlatList
        data={recommendations}
        keyExtractor={(item)=>item._id}
        renderItem={({item})=>(
          <View style={{marginBottom:10}}>
            <ReusableTile item={item} onPress={()=>navigation.navigate('PlaceDetails',item._id)}/>
          </View>
        )}
        
        />
      </View>
    </SafeAreaView>
  )
}

export default Recommended

const styles = StyleSheet.create({})