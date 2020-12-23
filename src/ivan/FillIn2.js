/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Dimensions, Image} from 'react-native';

import TrianglePic from '../assets/TrianglePic.png';

const Win = Dimensions.get('window');

const FillIn2 = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'flex-start',
        flex: 1,
        backgroundColor: '#F1FAEE',
      }}>
      <View
        style={{
          alignItems: 'flex-start',
          paddingTop: 22.5,
          paddingStart: Win.width - 350,
          width: Win.width,
          height: (3 * Win.height) / 7,
          borderTopStartRadius: 0,
          borderTopEndRadius: 0,
          borderBottomEndRadius: 30,
          borderBottomStartRadius: 30,
          backgroundColor: '#457B9D',
        }}>
        <View
          style={{
            alignItems: 'flex-start',
          }}>
          <Text
            style={{
              fontFamily: 'Calibri',
              fontSize: 50,
              textAlign: 'left',
              color: '#F1FAEE',
            }}>
            Fill In
          </Text>
          <Text
            style={{
              fontFamily: 'Calibri',
              fontSize: 18,
              textAlign: 'left',
              color: '#F1FAEE',
              marginTop: 1.5,
              paddingEnd: 50,
            }}>
            Help us to provide more information about the technology
          </Text>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          paddingTop: 17,
          marginStart: -355,
          marginTop: 192,
          width: 300,
          height: 430,
          borderRadius: 25,
          backgroundColor: '#F1FAEE',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            marginStart: 12,
          }}>
          <View
            style={{
              alignItems: 'center',
              paddingTop: 10,
              width: 35,
              height: 35,
              borderRadius: 17.5,
              backgroundColor: '#E5E5E5',
            }}>
            <Text
              style={{
                fontFamily: 'Nunito',
                fontSize: 12,
                color: '#000000',
              }}>
              1
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              paddingTop: 10,
              marginStart: 65,
              width: 35,
              height: 35,
              borderRadius: 17.5,
              backgroundColor: '#757575',
            }}>
            <Text
              style={{
                fontFamily: 'Nunito',
                fontSize: 12,
                color: '#FFFFFF',
              }}>
              2
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 9,
            backgroundColor: '#E5E5E5',
            width: 300,
            height: 1,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            marginStart: 5,
            marginTop: 21,
          }}>
          <Text
            style={{
              fontFamily: 'Nunito',
              fontSize: 10,
              color: 'rgba(0, 0, 0, 255)',
            }}>
            Item Description
          </Text>
          <View
            style={{
              alignItems: 'flex-start',
              marginStart: -74,
              marginTop: 14,
              width: 250,
              height: 130,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: 'rgba(188, 188, 188, 255)',
              backgroundColor: 'rgba(255, 255, 255, 255)',
            }}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            paddingTop: 6,
            marginStart: 6,
            marginTop: 13,
            width: 250,
            height: 50,
            borderRadius: 5,
            backgroundColor: '#457B9D',
          }}>
          <Text
            style={{
              fontFamily: 'Nunito',
              fontSize: 28,
              textAlign: 'center',
              color: '#F1FAEE',
            }}>
            Save
          </Text>
        </View>
      </View>
      <View
        style={{
          alignItems: 'flex-start',
          marginStart: -350,
          marginTop: 600,
        }}>
        <View
          style={{
            alignItems: 'flex-start',
            paddingStart: 13,
            paddingTop: 15,
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: '#457B9D',
          }}>
          <Image source={TrianglePic} />
        </View>
      </View>
    </View>
  );
};
export default FillIn2;
