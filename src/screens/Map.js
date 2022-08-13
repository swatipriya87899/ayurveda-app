import React, {useState, useRef} from 'react';
import {Text, View, Button, StyleSheet, Modal} from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {Marker} from 'react-native-maps';
import {GOOGLE_MAP_KEY} from '../constants/googleMapKey';
import MapDetails from '../components/MapDetails';

const Map = () => {
  //Map Coordinates
  const [map, setMap] = useState({
    pickupCords: {
      latitude: 24.9539,
      longitude: 84.011787,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    dropLocationCords: {
      latitude: 30.7333,
      longitude: 76.7794,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  });

  //Distance and Time Value
  const [travel_details, setTravel_details] = useState({
    time: 0,
    distance: 0,
  });

  const {pickupCords, dropLocationCords} = map;
  const mapRef = useRef();

  //Calculating time and distance
  const travelDetails = (d, t) => {
    setTravel_details({time: t, distance: d});
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 2}}>
        <MapView
          ref={mapRef}
          style={{width: '100%', height: '100%'}}
          initialRegion={pickupCords}>
          <Marker
            coordinate={pickupCords}
            image={require('./../assests/images/pickupMarker.png')}></Marker>
          <Marker
            coordinate={dropLocationCords}
            image={require('./../assests/images/dropMarker.png')}></Marker>
          <MapViewDirections
            origin={pickupCords}
            destination={dropLocationCords}
            apikey={GOOGLE_MAP_KEY}
            strokeWidth={3}
            strokeColor="#064635"
            optimizeWaypoints={true}
            onReady={result => {
              //Calculate time and distance to reach the hospital
              travelDetails(result.distance, result.duration);

              //Styling the map
              mapRef.current.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: 30,
                  bottom: 300,
                  left: 30,
                  top: 300,
                },
              });
            }}
          />
        </MapView>
      </View>
      <MapDetails details={travel_details}></MapDetails>
    </View>
  );
};

const styles = StyleSheet.create({});
export default Map;
