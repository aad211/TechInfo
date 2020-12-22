/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';

import SearchPic from '../assets/SearchPic.png';

const Win = Dimensions.get('window');

const SearchScreen = () => {
  return (
    <View
      style={{
        alignItems: 'flex-start',
        paddingStart: 30,
        paddingTop: 29,
        backgroundColor: '#457B9D',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          width: Win.width,
          height: Win.height,
          backgroundColor: '#457B9D',
        }}>
        <View
          style={{
            alignItems: 'flex-start',
            paddingStart: 260,
            paddingTop: 10,
            marginTop: 1,
            width: Win.width - 60,
            height: 50,
            borderRadius: 25,
            backgroundColor: '#FFFFFF',
          }}>
          <Image
            style={{
              width: 30,
              height: 30,
              marginStart: 40,
            }}
            source={SearchPic}
          />
        </View>
        <Text
          style={{
            fontFamily: 'Calibri',
            fontWeight: 'bold',
            fontSize: 36,
            textAlign: 'left',
            color: '#BCBCBC',
            marginStart: -342,
          }}>
          {' '}
          Search Here{' '}
        </Text>
      </View>
    </View>
  );
};

export default SearchScreen;
