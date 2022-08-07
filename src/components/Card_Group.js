import React from 'react';
import {View, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import Card from './Card';

//Data for Ayush Hosptial
const data = [
  {
    name: 'Ayurveda Hospital',
    city: 'Sasaram',
  },
  {
    name: 'Yoga Hospital',
    city: 'Patna',
  },
  {
    name: 'Unani Hospital',
    city: 'Samastipur',
  },
  {
    name: 'Ayurved Hospital',
    city: 'Patna',
  },
  {
    name: 'yog Hospital',
    city: 'Samastipur',
  },
];

const Card_Group = () => {
  const renderItem = ({item}) => <Card title={item.name} />;

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.name}></FlatList>
  );
};

const styles = StyleSheet.create({
});

export default Card_Group;
