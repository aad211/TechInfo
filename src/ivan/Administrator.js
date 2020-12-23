/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';

import FacebookPic from '../assets/FacebookPic.png';
import TwitterPic from '../assets/TwitterPic.png';
import GooglePic from '../assets/GooglePic.png';
import PhonePic from '../assets/PhonePic.png';

const Win = Dimensions.get('window');

const Administrator = () => {
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
          alignItems: 'center',
          paddingTop: 42.5,
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
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Calibri',
              fontSize: 65,
              textAlign: 'center',
              color: '#F1FAEE',
            }}>
            TECHINFO
          </Text>
          <Text
            style={{
              fontFamily: 'Calibri',
              fontSize: 18,
              textAlign: 'center',
              color: '#F1FAEE',
              marginTop: 1.5,
            }}>
            Science, Technology, Creativity
          </Text>
        </View>
      </View>
      <View
        style={{
          alignItems: 'flex-start',
          paddingStart: 23,
          paddingTop: 17,
          marginStart: -355,
          marginTop: 192,
          width: 300,
          height: 350,
          borderRadius: 25,
          backgroundColor: '#F1FAEE',
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
              marginStart: 9,
            }}>
            Welcome to Techinfo
          </Text>
          <Text
            style={{
              fontFamily: 'Nunito',
              fontSize: 16,
              textAlign: 'center',
              color: '#457B9D',
              marginTop: 6,
            }}>
            Join with US to help another people
          </Text>
        </View>
        <View
          style={{
            alignItems: 'flex-start',
            marginStart: 2,
            marginTop: 28,
          }}>
          <View
            style={{
              alignItems: 'center',
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
                marginTop: 5,
              }}>
              Sign In
            </Text>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            marginStart: 17,
            marginTop: 15,
          }}>
          <View
            style={{
              alignItems: 'center',
              width: 220,
              height: 50,
              borderRadius: 5,
              borderWidth: 2,
              borderColor: '#457B9D',
              backgroundColor: 'rgba(69, 123, 157, 0)',
            }}>
            <Text
              style={{
                fontFamily: 'Nunito',
                fontSize: 28,
                textAlign: 'center',
                color: '#457B9D',
                marginTop: 5,
              }}>
              Sign Up
            </Text>
          </View>
        </View>
        <View
          style={{
            alignItems: 'flex-start',
            marginStart: 2,
            marginTop: 25,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
            }}>
            <View
              style={{
                marginTop: 14,
                backgroundColor: '#457B9D',
                width: 250,
                height: 2,
              }}
            />
            <View
              style={{
                alignItems: 'flex-start',
                marginStart: -191,
              }}>
              <View
                style={{
                  alignItems: 'flex-start',
                  paddingTop: 3.5,
                  width: 132,
                  height: 25,
                  backgroundColor: '#F1FAEE',
                }}>
                <Text
                  style={{
                    fontFamily: 'Nunito',
                    fontSize: 16,
                    textAlign: 'center',
                    color: '#000000',
                  }}>
                  {' '}
                  Or connect using{' '}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              marginStart: 10,
              marginTop: 15,
            }}>
            <View
              style={{
                alignItems: 'flex-start',
                paddingStart: 9,
                paddingTop: 7,
                width: 50,
                height: 50,
                borderRadius: 5,
                backgroundColor: '#3C5A99',
              }}>
              <Image
                style={{
                  width: 32,
                  height: 37,
                }}
                source={FacebookPic}
              />
            </View>
            <View
              style={{
                alignItems: 'flex-start',
                paddingStart: 3,
                paddingTop: 7,
                marginStart: 10,
                width: 50,
                height: 50,
                borderRadius: 5,
                backgroundColor: '#45D1F6',
              }}>
              <Image
                style={{
                  width: 44,
                  height: 36,
                }}
                source={TwitterPic}
              />
            </View>
            <View
              style={{
                alignItems: 'flex-start',
                paddingStart: 6,
                paddingTop: 7,
                marginStart: 10,
                width: 50,
                height: 50,
                borderRadius: 5,
                backgroundColor: '#FF6354',
              }}>
              <Image
                style={{
                  width: 37,
                  height: 37,
                }}
                source={GooglePic}
              />
            </View>
            <View
              style={{
                alignItems: 'flex-start',
                paddingStart: 8,
                paddingTop: 8,
                marginStart: 10,
                width: 50,
                height: 50,
                borderRadius: 5,
                backgroundColor: '#757575',
              }}>
              <Image
                style={{
                  width: 34,
                  height: 34,
                }}
                source={PhonePic}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Administrator;
