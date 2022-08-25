import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Card from './Card';
import config from '../../config';

const Card_Group = (props) => {

  const [hospitalsData, setHospitalsData] = useState([]);
  const [data, setData] = useState([])

  useEffect(async () => {
    fetch(`${config.Base_API_URL}/hospital/getNearbyHospitals`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "latitude": props.location.latitude,
        "longitude": props.location.longitude,
        "radius": 500,
        "mode": "D"
      })
    }).then((response) => {
      return response.json()
    }).then((data) => {
      data.map((item) => {
        let currentHospital = {
          name: item.details.hospitalName,
          address: item.details.contactInfo.address.city,
          status: "open",
          distance: parseInt(item.location.distance) / 1000,
          id: item.details._id,
          phone: item.details.phoneNumber,
          image: item.details.images[0],
          longitude: item.location.longitude,
          latitude: item.location.latitude
        };
        setHospitalsData((prevState) => {
          prevState.push(currentHospital);
          return prevState;
        })
        setData(hospitalsData)
      })
    })
  }, [])

  const renderItem = ({ item }) => <Card name={item.name} image={item.image} city={item.address} status={item.status} distance={item.distance} id={item.id} phone={item.phone} latitude={item.latitude} longitude={item.longitude}></Card>;

  return (
    <View>{data && <View><FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.name}></FlatList></View>}
      </View>
  );
};

const styles = StyleSheet.create({
});

export default Card_Group;
