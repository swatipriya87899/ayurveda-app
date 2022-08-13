import React from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';

const MapDetails = props => {
  return (
    <View style={styles.map_details}>
      <View style={{flex: 1}}>
        <Text style={[styles.hospital_name, styles.text_style]}>
          Sanjeevani Hospital
        </Text>
        <Text style={[styles.hospital_city, styles.text_style]}>Varanasi</Text>
        <Text style={[styles.hospital_address, styles.text_style]}>
          322/2 - A , Lanka, Varnasi, U.P. 201014{' '}
        </Text>
        <Text style={[styles.hospital_status]}>Open</Text>
        <Text>{props.details.distance} KM</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  map_details: {
    backgroundColor: ' #FFFFFF',
    justifyContent: 'center',
    marginLeft: 20,
    flex: 0.5,
  },
  text_style: {
    color: '#000000',
  },
  hospital_name: {
    fontSize: 24,
    fontWeight: '800',
  },
  hospital_city: {
    fontSize: 18,
    fontWeight: '600',
  },
  hospital_address: {
    fontWeight: '300',
  },
  hospital_status: {
    fontWeight: '600',
    color: '#1C730F',
  },
});

export default MapDetails;
