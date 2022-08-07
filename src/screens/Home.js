import React from 'react'
import { View,StyleSheet } from 'react-native'
import Card from '../components/Card'
import Card_Group from '../components/Card_Group'
import Carousel from '../components/Carousel'
import Header from '../components/Header'
import Searchbox from '../components/Searchbox'

const Home = () => {
  return (
    <View style={styles.home}>
        <Header></Header>
        <Searchbox></Searchbox>
        <Carousel></Carousel>
        <View style={[styles.card_group, {paddingBottom:320}]}>
        <Card_Group/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card_group:{
    alignItems:'center'
  }
  
})

export default Home