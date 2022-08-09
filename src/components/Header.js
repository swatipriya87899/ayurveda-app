import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Nav from 'react-native-vector-icons/Fontisto';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <View style={{flexDirection:'row', alignItems:'center'}}>
        <Nav name="nav-icon-a" size={25} color="#064635"></Nav>
        {/* App-name */}
        <Text style={styles.name}>Ayurveda</Text>
      </View>

      {/* location */}
      <View style={{alignItems: 'center'}}>
        <View style={styles.location_box}>
          <Icon name="map-marker" size={20} color="#064635" />
          <Text style={styles.location}>Kharari</Text>
        </View>
        <Text onPress={props.changeLocation} style={styles.change_location}>Change Location</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin:10
  },

  name: {
    color: '#146356',
    fontSize: 28,
    fontWeight: '700',
    fontWeight: 'bold',
    marginHorizontal:10
  },
  location_box: {
    flexDirection: 'row',
  },
  location: {
    color: '#000000',
    fontWeight: '700',
    fontSize: 16,
  },
  change_location: {
    color: '#064635',
    fontWeight: '700',
    fontSize: 14,
  },
});

export default Header;
