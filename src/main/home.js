/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, View} from 'react-native';
import mainScreen from './mainScreen';

class Home extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <mainScreen
          onPress={() => this.props.navigation.navigate('DigitalInformationPage')}
        />
      </View>
    );
  }
}

export default Home;
