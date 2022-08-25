import React, { useState,useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Card from '../components/Card';
import Card_Group from '../components/Card_Group';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import Searchbox from '../components/Searchbox';
import GetLocationModal from '../components/GetLocationModal';

import GetLocation from 'react-native-get-location'

const Home = () => {


  const [location, SetLocation] = useState({ "latitude": 10.0518127, "longitude": 76.4503435 })

  const fetchLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        SetLocation({ "latitude": location.latitude, "longitude": location.longitude });
        console.log(location);
      })
      .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
      })
  }

  useEffect(() => {
    fetchLocation();
  }, [])

  const [modalVisible, setModalVisible] = useState(false);

  //Change Location Modal
  const changeLocationHandler = () => {
    setModalVisible(true);
  };

  //function to set modalVisible false
  const closeTheModal = () => {
    setModalVisible(false);
  }

  //Carousel Image Of Home Page
  const carouselImages = [
    {
      image: require('./../assests/images/Carousel1.png'),
      desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
    {
      image: require('./../assests/images/Carousel2.png'),
      desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
    {
      image: require('./../assests/images/Carousel1.png'),
      desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
  ];
  
  return (
    <View style={styles.home}>
      <Header changeLocation={changeLocationHandler}></Header>
      <ScrollView>
        <View style={styles.margin}>
          <Searchbox></Searchbox>
        </View>
        <Carousel
          image={carouselImages}
          component={<Preview />}
          width={300}></Carousel>
        <View style={[styles.card_group, { paddingBottom: 150 }]}>
          <Card_Group location={location}/>
        </View>
      </ScrollView>
      <GetLocationModal closeModal={closeTheModal} visibility={modalVisible} ></GetLocationModal>
    </View>
  );
};

const styles = StyleSheet.create({
  card_group: {
    alignItems: 'center',
  },
  margin: {
    marginTop: 20,
  },
});

export default Home;
