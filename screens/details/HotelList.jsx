import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import AppBar from '../../components/Reusable/AppBar';
import { ReusableTile } from '../../components';
import { COLORS } from '../../constants/theme';

const HotelList = ({navigation}) => {
    const hotels = require('../../assets/data/HotelsData.json');
    return (
      <SafeAreaView style={{marginHorizontal:20}}>
        <View style={{height:50}}>
          <AppBar
          top={10}
          left={0}
          right={0}
          title={"Near By Hotels"}
          color={COLORS.white}
          icon={'search1'}
          color1={COLORS.white}
          onPress={()=>navigation.goBack()}
          onPress1={()=>navigation.navigate('HotelSearch')}
          />
        </View>
        <View style={{paddingTop:20}}>
          <FlatList
          data={hotels}
          keyExtractor={(item)=>item._id}
          renderItem={({item})=>(
            <View style={{marginBottom:10}}>
              <ReusableTile item={item} onPress={()=>navigation.navigate('HotelDetails',item._id)}/>
            </View>
          )}
          
          />
        </View>
      </SafeAreaView>
    )
  }

export default HotelList

const styles = StyleSheet.create({})