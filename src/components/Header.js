import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
  return (
    <View style={styles.header}>
      {/* App-name */}
      <Text style={styles.name}>Ayurveda</Text>

      {/* location */}
      <View style={styles.location_box}>
        <Icon name="map-marker" size={25} color="#064635" />
        <Text style={styles.location}>Kharari</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  name: {
    color: '#146356',
    fontSize: 25,
    fontWeight: '700',
    fontWeight:'bold'
  },
  location_box:{
    flexDirection:'row'
  },
  location:{
    
  }
});

export default Header;
