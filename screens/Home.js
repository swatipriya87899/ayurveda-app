import React from 'react'
import { View } from 'react-native'
import Header from '../components/Header'
import Searchbox from '../components/Searchbox'

const Home = () => {
  return (
    <View>
        <Header></Header>
        <Searchbox></Searchbox>
    </View>
  )
}

export default Home