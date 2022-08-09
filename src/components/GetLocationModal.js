import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import Cross from 'react-native-vector-icons/Entypo';
import GPS from 'react-native-vector-icons/MaterialCommunityIcons'

import AutoFillAddress from "./../components/AutoFillAddress";

import Modal from 'react-native-modal';

const GetLocationModal = (props) => {

  const [show, SetShow] = useState(true);

  const hideComponent = ()=>{
    SetShow(false)
  }

  const showComponent = ()=>{
    SetShow(true)
  }

  return (
      <Modal isVisible={props.visibility}>
        <View style={styles.container}>
          {/* Icon */}
         <Cross name="cross" width={50} color="#fff"></Cross>
          {/* Title Text */}
          <View>
            <Text style={styles.title} >Search for Nearby Hospitals</Text>
          </View>
          {/* AutoFillAddress Component */}
          <View style={
            {
              flex: 1,
              backgroundColor: "#064635",
              width: "70%",
              alignSelf: "center",
              height: "80%",
              marginTop: "10%"
            }
          }>
            <AutoFillAddress hide={hideComponent} show={showComponent}></AutoFillAddress>
          </View>
          {/* Button */}
          {show ? <View style={
            {
              position: "absolute",
              alignItems: "center",
              alignSelf: "center",
              justifyContent:"center",
              width: "70%",
              top: "55%"
            }
          }>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Search Location</Text>
            </TouchableOpacity>
          </View> : ""}

          {/* Horizontal Line */}
          {show ? <View style={{
            width: "90%",
            alignSelf: "center",
            backgroundColor: "#146356",
            height: 2,
            position: "absolute",
            top: "73%"
          }}></View> : ""}

          {/* Current Location Button */}
          {show ? <TouchableOpacity style={{
            alignSelf: "center",
            alignItems: "center",
            backgroundColor: "#146356",
            width: "70%",
            position: "absolute",
            top: "80%",
            padding: "3%",
            borderRadius: 4,
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"center"
          }}>
            <View>
              <GPS name="crosshairs-gps" width={30} color="#fff"></GPS>
            </View>
            <View>
              <Text style={{ color: "#FFFFFF", fontWeight: "700" }}>Get Current Location</Text>
              <Text style={{ color: "#FFFFFF", fontWeight: "700" }}>Using GPS</Text>
            </View>
          </TouchableOpacity> : ""}
        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#064635",
    flex: 0.5,
    borderRadius:10 
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    color: "#FFFFFF",
    marginTop: "20%",
    fontWeight:"700"
  },
  button: {
    backgroundColor: "#F9D026",
    width: "100%",
    height: "180%",
    justifyContent:"center",
    borderRadius:3
  },
  buttonText: {
    color: "#064635",
    textAlign: "center",
    fontSize:16,
    fontWeight:"400"
  }
})

export default GetLocationModal;