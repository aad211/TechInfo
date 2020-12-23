/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, Dimensions} from 'react-native';

import LogoApp from '../assets/logo.png';

const Win = Dimensions.get('window');

export default function ScreenSplash() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{marginTop: (2 * Win.height) / 3}}>
        <Image source={LogoApp} />
      </View>
    </View>
  );
}
