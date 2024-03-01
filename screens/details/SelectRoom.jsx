import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppBar from '../../components/Reusable/AppBar'
import { COLORS, SIZES } from '../../constants/theme'
import { HeightSpacer, ResuableBtn, ReusableTile } from '../../components'


const SelectRoom = ({navigation}) => {
  const rooms=require('../../assets/data/RecommendationsData.json')
  return (
    <View>
      <View style={{height:100}}>
      <AppBar
        top={50}
        left={20}
        right={20}
        title={"Select Room"}
        color={COLORS.white}
        onPress={()=>navigation.goBack()}
        
        />

      </View>
      <FlatList
      data={rooms}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item)=>item._id}
      renderItem={({item})=>(
        <View style={styles.tileColumn}>
          <View style={styles.tile}>
          <ReusableTile item={item}/>
          <HeightSpacer height={10}/>
          <View style={styles.btnstyle}>
          <ResuableBtn
              onPress={()=>navigation.navigate('SelectedRoom',{item})}
              btnText={"Select Room"}
              width={SIZES.width-60}
              backgroundColor={COLORS.green}
              borderColor={COLORS.green}
              borderWidth={0}
              textColor={COLORS.white}
        
          />
          </View>  
          </View>
        </View>
      )}
      />
    </View>
  )
}

export default SelectRoom

const styles = StyleSheet.create({
  tileColumn:{
    marginHorizontal:20,
    marginBottom:10
  },
  tile:{backgroundColor:COLORS.lightWhite,
  borderRadius:12
  },
  btnstyle:{
    margin:10,
    justifyContent:'center'
  }
})