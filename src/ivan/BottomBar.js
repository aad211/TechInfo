/* eslint-disable react-native/no-inline-styles */
//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// create a component
const BottomBar = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 15, color: 'black'}}>Home</Text>
      </View>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 15, color: 'black'}}>Search</Text>
      </View>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 15, color: 'black'}}>Admin</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingBottom: 10,
    //opacity:0.3,
    backgroundColor: '#F1FAEE',
  },
});

//make this component available to the app
export default BottomBar;
