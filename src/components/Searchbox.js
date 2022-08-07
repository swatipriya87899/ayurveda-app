import React,{useState} from 'react';
import { View, StyleSheet,TextInput,Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Searchbox = () => {
    const [input, setInput] = React.useState("");

    const onSearch = (value) => {
        setInput(value);
    }

  return (
    <View style={styles.searchboxContainer}>
        <TextInput style={styles.searchbox} placeholder="Search Hospitals..." value={input} onChangeText={onSearch}></TextInput>
        <Icon name="search" size={25} color="rgba(0, 0, 0, 0.7)" />
    </View>
  )
}

const styles = StyleSheet.create({
    searchboxContainer:{
        display:"flex",
        alignItems:"center"
    },

    searchbox:{
        backgroundColor: "rgba(221, 255, 188, 0.5)",
        textAlign:"center",
        width:"80%",
        borderRadius: 8,
    }
})

export default Searchbox