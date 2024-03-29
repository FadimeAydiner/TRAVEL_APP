import { View, Image} from 'react-native'
import React from 'react'
import styles from './Slides.style'
import {HeightSpacer,
       ResuableBtn, 
       ReusableText
       } from '../../components/index'
import { COLORS, SIZES } from '../../constants/theme'
import { useNavigation } from '@react-navigation/native'

const Slides = ({item}) => {
  const navigation=useNavigation();
  return (
    <View>
      <Image source={item.image} style={styles.image}/>
      <View style={styles.stack}>
            <ReusableText
                text={item.tile}
                family={'medium'}
                size={SIZES.xxLarge}
                color={COLORS.white}
                      
            />
            <HeightSpacer height={40}/>
            <ResuableBtn 
                onPress={()=>navigation.navigate('Bottom')}
                btnText={"Let's go"}
                width={(SIZES.width-50)/2.2}
                backgroundColor={COLORS.red}
                borderColor={COLORS.red}
                borderWidth={0}
                textColor={COLORS.white}
          
            />
            
      </View>
    </View>
  );
};

export default Slides;