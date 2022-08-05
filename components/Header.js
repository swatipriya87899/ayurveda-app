import React from 'react';
import { View, StyleSheet,Text } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
        {/* App-name */}
        <Text style={styles.name}>Ayurveda</Text>

        {/* location */}
        <Text>Kharari</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },

    name:{
        color: "#146356",
        fontSize: 25,
        fontWeight: "700"
    }
})

export default Header;