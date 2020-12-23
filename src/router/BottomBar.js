/* eslint-disable react-native/no-inline-styles */
//import liraries
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import HomeIcon from '../assets/HomeIcon.png';
import SearchIcon from '../assets/SearchIcon.png';
import AdminIcon from '../assets/AdminIcon.png';

import ButtonHome from './ButtonHome';
import ButtonSearch from './ButtonSearch';
import ButtonAdmin from './ButtonAdmin';
import {withNavigation} from 'react-navigation';

class BottomBar extends React.Component {
  render() {
    return (
      <View style={{flex: 0.1, backgroundColor: '#F1FAEE'}}>
        <View style={{height: 50, paddingTop: 15, flexDirection: 'row'}}>
          <ButtonHome onPress={() => this.props.navigation.navigate('Home')} />
          <ButtonSearch
            onPress={() => this.props.navigation.navigate('SearchScreenPage')}
          />
          <ButtonAdmin
            onPress={() => this.props.navigation.navigate('AdminScreenPage')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerBottomBar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontBottomBar: {
    fontSize: 15,
    color: '#000000',
    marginTop: 5,
  },
});

//make this component available to the app
export default withNavigation(BottomBar);
