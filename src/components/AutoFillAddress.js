import React from 'react';
import { TextInput } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import config from './../../config';

const GOOGLE_PLACES_API_KEY = config.key.google_map;

const GooglePlacesInput = (props) => {
  return (
    <GooglePlacesAutocomplete

    isRowScrollable={false}
      query={{
        key: GOOGLE_PLACES_API_KEY,
        language: 'en', // language of the results
      }}
      onPress={(data, details) =>{
        props.show()
        console.log(data, "data");
        console.log(details,"details");
      }}

      currentLocation={true}

      enablePoweredByContainer={false}

      textInputProps={{
        InputComp: TextInput,
        placeholder: "Search by City",
        placeholderTextColor: "#000000",
        style:{
          color:"#000000",
          backgroundColor:"#FFFFFF",
          flex:1,
          paddingLeft:10,
          borderRadius:3,
        },
        onPressIn:props.hide,
      }}
      styles={{
        row:{
          backgroundColor:"#FFFFFF"
        },
        description:{
            color:"#000000"
        }
      }}
    />
  );
};

export default GooglePlacesInput;