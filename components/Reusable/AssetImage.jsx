import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const AssetImage = ({width,height,radius,mode,data}) => {
  return (
    <Image source={data} style={styles.image(width,height,radius,mode)}/>
  )
}

export default AssetImage

const styles = StyleSheet.create({
    image:(width,height,radius,mode)=>({
        width:width,
        height:height,
        borderRadius:radius,
        resizeMode:mode
    })
})