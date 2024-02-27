import { View, Text ,Image} from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { TopBooking, TopInfo, TopTrips } from '../screens';
import { COLORS, SIZES } from '../constants/theme';
import { HeightSpacer, NetworkImage, ReusableText } from '../components';
import AppBar from '../components/Reusable/AppBar';
import styles from '../screens/top/topTab.style';

const TopTab = () => {
    const Tab=createMaterialTopTabNavigator();
  return (
    <View style={{flex:1}}>
        <View style={{backgroundColor:COLORS.lightWhite}}>
            <View>
               
                <NetworkImage
                source={'https://a.cdn-hotels.com/gdcs/production6/d781/3bae040b-2afb-4b11-9542-859eeb8ebaf1.jpg?impolicy=fcrop&w=1600&h=1066&q=medium'}
                width={'100%'}
                height={300}
                radius={0}
                />

                <AppBar
                top={40}
                left={20}
                right={20}
                color={COLORS.white}
                icon={'logout'}
                color1={COLORS.white}
                onPress1={()=>{}}
                />
                <View style={styles.profile}>
                    <Image source={{uri:'https://d326fntlu7tb1e.cloudfront.net/uploads/4c004766-c0ad-42ed-bef1-6a7616b24c11-vinci_11.jpg'}}
                    style={styles.image}/>
                <HeightSpacer height={5}/>
               
                    <View style={{alignItems:"center"}}>
                    <ReusableText
                        text={"Fadime Aydiner"}
                        family={"medium"}
                        size={SIZES.medium}
                        color={COLORS.white}
                     />
                    </View>

                
                <HeightSpacer height={5}/>
                <View style={styles.name}>
                    <View style={{alignItems:"center"}}>
                    <ReusableText
                        text={"fadime@example.com"}
                        family={"medium"}
                        size={SIZES.medium}
                        color={COLORS.black}
                     />
                    </View>
                    </View>

               

                </View>
            </View>

        </View>
      <Tab.Navigator>
        <Tab.Screen name='Bookings' component={TopBooking}/>
        <Tab.Screen name='Trips' component={TopTrips}/>
        <Tab.Screen name='Info' component={TopInfo}/>
      </Tab.Navigator>
    </View>
  )
}

export default TopTab