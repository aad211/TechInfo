/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import HexagonPic from '../assets/HexagonPic.png';

const Win = Dimensions.get('window');

const SignInFailed = () => {
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
            Sign In
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
            Sign in to discover another way to help many people.
          </Text>
        </View>
      </View>

      <View
        style={{
          alignItems: 'flex-start',
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
            alignItems: 'center',
          }}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Nunito',
                fontSize: 24,
                textAlign: 'center',
                color: '#457B9D',
              }}>
              FAILED
            </Text>
            <Text
              style={{
                fontFamily: 'Nunito',
                fontSize: 16,
                textAlign: 'center',
                color: '#457B9D',
                marginTop: 6,
                paddingStart: 25,
                paddingEnd: 25,
              }}>
              Sorry, you enter the wrong e-mail or password
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <ImageBackground
              style={{
                marginTop: 11,
                width: 197,
                height: 197,
              }}
              source={HexagonPic}
            />
            <Text
              style={{
                fontFamily: 'Nunito',
                fontSize: 125,
                textAlign: 'center',
                color: '#F1FAEE',
                marginTop: 29,
                ...StyleSheet.absoluteFillObject,
              }}>
              X
            </Text>
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
              Back to Sign In
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignInFailed;
