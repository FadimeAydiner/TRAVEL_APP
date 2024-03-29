import { StyleSheet, Text, View,TextInput, TouchableOpacity,Image, FlatList} from 'react-native'
import React,{useState,useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import reusable from '../../components/Reusable/reusable.style'
import styles from './Search.style'
import {Feather} from '@expo/vector-icons'
import { COLORS } from '../../constants/theme'
import { HeightSpacer, ReusableTile } from '../../components'


const Search = ({navigation}) => {
  const [searchKey,setSearchKey]=useState('')
  const [searchResults,setSearchResults]=useState('')
  const search=require('../../assets/data/RecommendationsData.json')
  return (
    <SafeAreaView style={reusable.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
          style={styles.input}
          value={searchKey}
          onChange={setSearchKey}
          placeholder='Where do you want to visit?'
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Feather
          name="search"
          size={24}
          color={COLORS.white}/>
        </TouchableOpacity>

      </View>

      {search.length===0 ? (
        <View>
          <HeightSpacer height={'20%'}/>
        <Image 
        source={require("../../assets/images/search.png")}
        style={styles.searchImage}
        />
        </View>
      ):(
        <FlatList
        data={search}
        keyExtractor={(item)=>{item._id}}
        renderItem={({item})=>(
          <View style={styles.tile}>
            <ReusableTile item={item} onPress={()=>navigation.navigate('PlaceDetails',item._id)}/>
          </View>
        )}

        />
      )}
    </SafeAreaView>
  )
}

export default Search

