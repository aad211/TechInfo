/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Dimensions, Image} from 'react-native';

import CameraPic from '../assets/CameraPic.png';
import TrianglePic from '../assets/TrianglePic.png';

const Win = Dimensions.get('window');

const ChangeProfile = () => {
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
          alignItems: 'center',
          paddingTop: 17,
          marginStart: -355,
          marginTop: 192,
          width: 300,
          height: 450,
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
            Name
          </Text>
          <View
            style={{
              alignItems: 'flex-start',
              marginStart: -27,
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
            marginStart: 1,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontFamily: 'Nunito',
              fontSize: 10,
              color: '#000000',
            }}>
            E - mail
          </Text>
          <View
            style={{
              alignItems: 'flex-start',
              marginStart: -29,
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
            About Me
          </Text>
          <View
            style={{
              alignItems: 'flex-start',
              marginStart: -43,
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
            marginStart: 1,
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
              backgroundColor: 'rgba(241, 250, 238, 0)',
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

export default ChangeProfile;
