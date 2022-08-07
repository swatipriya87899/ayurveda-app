import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Card = props => {
  return (
    <View style={styles.card}>
      {/* Image of the Hospital */}
      <View style={styles.card_image_box}>
        <Image
          source={require('./../images/ayush_hospital.png')}
          style={styles.card_image}
          resizeMode="stretch"></Image>
      </View>

      {/* Name of the Hospital */}
      <Text style={[styles.card_title, styles.font_style]}>{props.title}</Text>

      {/* Hospital City Name */}
      <Text style={[styles.card_subtitle, styles.font_style]}>Sasaram</Text>

      <View style={styles.card_details}>
        <View>
          <Text style={[styles.font_style]}>Closed</Text>
          <Text style={[styles.font_style]}>0.6 Km From Here</Text>
        </View>
        <View>
          <Icon name="globe" size={25} color="#26e07f" />
          <Icon name="phone" size={25} color="#26e07f" />
        </View>
      </View>

      <TouchableOpacity style={styles.card_button}>
        <Text style={styles.button_text}>View Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#064635',
    margin: 10,
    borderRadius: 7,
    padding: 5,
    flex: 1,
  },
  card_image: {
    borderRadius: 7,
  },
  font_style: {
    color: '#FEFFDE',
  },
  card_title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card_image_box: {
    width: '100%',
    alignItems: 'center',
  },
  card_subtitle: {
    fontSize: 12,
    textAlign: 'center',
  },
  card_button: {
    display: 'flex',
    alignItems: 'center',
  },
  button_text: {
    backgroundColor: '#DDFFBC',
    borderRadius: 8,
    width: '80%',
    paddingVertical: 10,
    color: '#064635',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  card_details: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Card;
