/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Dimensions, Image} from 'react-native';

import TrianglePic from '../assets/TrianglePic.png';

const Win = Dimensions.get('window');

const ChangePassword = () => {
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
              fontSize: 42,
              textAlign: 'left',
              color: '#F1FAEE',
            }}>
            Change Pass
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
            Change your password to secure your data
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
          height: 400,
          borderRadius: 25,
          backgroundColor: '#F1FAEE',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            marginStart: 1,
          }}>
          <Text
            style={{
              fontFamily: 'Nunito',
              fontSize: 10,
              color: '#000000',
            }}>
            Your Old Password
          </Text>
          <View
            style={{
              alignItems: 'flex-start',
              marginStart: -86,
              marginTop: 14,
              width: 250,
              height: 31,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#E5E5E5',
              backgroundColor: '#FFFFFF)',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            marginStart: 1,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontFamily: 'Nunito',
              fontSize: 10,
              color: '#000000',
            }}>
            Your New Password
          </Text>
          <View
            style={{
              alignItems: 'flex-start',
              marginStart: -91,
              marginTop: 14,
              width: 250,
              height: 31,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#E5E5E5',
              backgroundColor: '#FFFFFF',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            marginTop: 20,
          }}>
          <Text
            style={{
              fontFamily: 'Nunito',
              fontSize: 10,
              color: '#000000',
            }}>
            Retype Your New Password
          </Text>
          <View
            style={{
              alignItems: 'flex-start',
              marginStart: -124,
              marginTop: 14,
              width: 250,
              height: 31,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#E5E5E5',
              backgroundColor: '#FFFFFF',
            }}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            paddingTop: 6,
            marginStart: 6,
            marginTop: 113,
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

export default ChangePassword;
