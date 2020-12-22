/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';

import EmailPic from '../assets/EmailPic.png';
import PasswordPic from '../assets/PasswordPic.png';
import FacebookPic from '../assets/FacebookPic.png';
import TwitterPic from '../assets/TwitterPic.png';
import GooglePic from '../assets/GooglePic.png';
import PhonePic from '../assets/PhonePic.png';
import TrianglePic from '../assets/TrianglePic.png';

const Win = Dimensions.get('window');

const SignIn = () => {
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
          paddingStart: 23,
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
            alignItems: 'flex-start',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              paddingStart: 10,
              paddingTop: 13,
              width: 250,
              height: 50,
              borderRadius: 5,
              backgroundColor: 'rgba(239, 239, 239, 255)',
            }}>
            <Image
              style={{
                width: 24,
                height: 24,
              }}
              source={EmailPic}
            />
            <Text
              style={{
                fontFamily: 'Nunito',
                fontSize: 18,
                color: 'rgba(172, 172, 172, 255)',
                marginStart: 10,
                marginTop: 2,
              }}>
              Email
            </Text>
          </View>
        </View>
        <View
          style={{
            alignItems: 'flex-start',
            marginTop: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              paddingStart: 9,
              paddingTop: 12,
              width: 250,
              height: 50,
              borderRadius: 5,
              backgroundColor: 'rgba(239, 239, 239, 255)',
            }}>
            <Image
              style={{
                width: 26,
                height: 26,
              }}
              source={PasswordPic}
            />
            <Text
              style={{
                fontFamily: 'Nunito',
                fontSize: 18,
                color: 'rgba(172, 172, 172, 255)',
                marginStart: 9,
                marginTop: 3,
              }}>
              Password
            </Text>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            marginTop: 25,
          }}>
          <View
            style={{
              alignItems: 'center',
              paddingTop: 6,
              width: 250,
              height: 50,
              borderRadius: 5,
              backgroundColor: 'rgba(69, 123, 157, 255)',
            }}>
            <Text
              style={{
                fontFamily: 'Nunito',
                fontSize: 28,
                textAlign: 'center',
                color: 'rgba(255, 255, 255, 255)',
              }}>
              Sign In
            </Text>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            marginTop: 10,
          }}>
          <View
            style={{
              alignItems: 'center',
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
                color: 'rgba(69, 123, 157, 255)',
              }}>
              Forgot Password ?
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

export default SignIn;
