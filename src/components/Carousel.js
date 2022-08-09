import React from 'react';
import { View,Text } from 'react-native';
import {FlatListSlider} from 'react-native-flatlist-slider';
import Preview from './Preview';

const Carousel = () => {

  const images = [
    {
      image:require('./../assests/images/Carousel1.png'),
      desc: 'Silent Waters in the mountains in midst of Himilayas',
     },
    {
      image:require('./../assests/images/Carousel2.png'),
      desc: 'Silent Waters in the mountains in midst of Himilayas',
     },
   {
    image:require('./../assests/images/Carousel1.png'),
    desc: 'Silent Waters in the mountains in midst of Himilayas',
   },
   ]

  return (
    <FlatListSlider 
    data={images}
    width={300}
    timer={2000}
    indicatorContainerStyle={{position:'absolute', bottom: 40}}
    component={<Preview />}
    indicatorActiveColor={'#21C974'}
    indicatorInActiveColor={'#ffffff'}
    indicatorActiveWidth={30}
    animation
  />
  )
}

export default Carousel