/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Dimensions, Image, StyleSheet} from 'react-native';

import CameraPic from '../assets/CameraPic.png';
import TrianglePic from '../assets/TrianglePic.png';

const Win = Dimensions.get('window');

const FillIn1 = () => {
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
              backgroundColor: '#757575',
            }}>
            <Text
              style={{
                fontFamily: 'Nunito',
                fontSize: 12,
                color: '#FFFFFF',
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
              backgroundColor: '#E5E5E5',
            }}>
            <Text
              style={{
                fontFamily: 'Nunito',
                fontSize: 12,
                color: '#000000',
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
              color: '#000000',
            }}>
            Item Name
          </Text>
          <View
            style={{
              alignItems: 'flex-start',
              marginStart: -49,
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
            marginStart: 5,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontFamily: 'Nunito',
              fontSize: 10,
              color: '#000000',
            }}>
            Datasheet Link
          </Text>
          <View
            style={{
              alignItems: 'flex-start',
              marginStart: -67,
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
            marginStart: 5,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontFamily: 'Nunito',
              fontSize: 10,
              color: '#000000',
            }}>
            Project Reference Link
          </Text>
          <View
            style={{
              alignItems: 'flex-start',
              marginStart: -99,
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
            alignItems: 'flex-start',
            marginStart: 5,
            marginTop: 17,
          }}>
          <View
            style={{
              alignItems: 'flex-start',
              paddingStart: 109,
              paddingTop: 43,
              width: 250,
              height: 118,
              borderRadius: 5,
              backgroundColor: '#E5E5E5',
            }}>
            <Image
              style={{
                width: 32,
                height: 32,
              }}
              source={CameraPic}
            />
          </View>
        </View>
        <View
          style={{
            alignItems: 'flex-start',
            marginStart: 6,
          }}>
          <View
            style={{
              alignItems: 'flex-start',
              paddingStart: 75,
              paddingTop: 5,
              width: 250,
              height: 30,
              borderRadius: 5,
            }}>
            <Text
              style={{
                fontFamily: 'Nunito',
                fontSize: 18,
                textAlign: 'center',
                color: '#457B9D',
              }}>
              {' '}
              Take Picture{' '}
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
      <View
        style={{
          alignItems: 'flex-start',
          marginStart: 356,
          marginTop: 600,
          ...StyleSheet.absoluteFillObject,
        }}>
        <View
          style={{
            alignItems: 'center',
            paddingTop: 15,
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: '#457B9D',
            rotation: 180,
          }}>
          <Image source={TrianglePic} style={{marginStart: -5}}/>
        </View>
      </View>
    </View>
  );
};
export default FillIn1;
