import { StyleSheet,Image } from 'react-native'
import React from 'react'


const NetworkImage = (source,width,height,radius) => {
  return (
    <Image 
        source={{uri:source}}
        style={styles.images(width,height,radius)}
    
    />
  )
}

export default NetworkImage

const styles = StyleSheet.create({
    images:(width,height,radius)=>({
        width:width,
        height:height,
        borderRadius:radius,
        resizeMode:"cover"
    })
})