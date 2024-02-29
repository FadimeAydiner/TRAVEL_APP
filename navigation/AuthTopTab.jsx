import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Signin from '../screens/authentication/Signin';
import Registration from '../screens/authentication/Registration';
import { COLORS } from '../constants/theme';
import { AssetImage, HeightSpacer } from '../components';

const AuthTopTab = () => {
    const Tab=createMaterialTopTabNavigator();
  return (
    <View style={{flex:1,backgroundColor:COLORS.lightWhite}}>
      <ScrollView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
        <HeightSpacer height={80}/>
        <AssetImage 
        data={require('../assets/images/bg1.png')}
        mode={'contain'}
        height={250}
        width={'100%'}/>

        <View>
        <Tab.Navigator>
        <Tab.Screen name='Signin' component={Signin}/>
        <Tab.Screen name='Registration' component={Registration}/>
      </Tab.Navigator>
        </View>
      
      </ScrollView>
    </View>
  )
}

export default AuthTopTab

const styles = StyleSheet.create({})