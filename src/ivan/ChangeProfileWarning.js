/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';

import HexagonPic from '../assets/HexagonPic.png';
import TrianglePic from '../assets/TrianglePic.png';

const Win = Dimensions.get('window');

const ChangeProfileWarning = () => {
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
            Change Profile
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
            Update your data so we can know you better
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
              WARNING
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
              Your information successfully changed
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
              !
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
              Back to Profile
            </Text>
          </View>
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

export default ChangeProfileWarning;
