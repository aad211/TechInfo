/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';

import FilterPic from '../assets/FilterPic.png';
import Hanip from '../assets/hanip.png';
import JobPic from '../assets/JobPic.png';
import EmailPic from '../assets/EmailPic.png';
import CreatePostPic from '../assets/CreatePostPic.png';
import YourPostPic from '../assets/YourPostPic.png';
import EditProfilePic from '../assets/EditProfilePic.png';

const Win = Dimensions.get('window');

const AccountSideMenu = () => {
  return (
    <View
      style={{
        alignItems: 'flex-start',
        flex: 1,
        marginStart: -200,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
        }}>
        <View
          style={{
            alignItems: 'flex-start',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              paddingStart: 30,
              paddingTop: 12,
              width: Win.width,
              height: 80,
              borderTopStartRadius: 0,
              borderTopEndRadius: 0,
              borderBottomEndRadius: 30,
              borderBottomStartRadius: 30,
              backgroundColor: '#457B9D',
            }}>
            <Text style={{}}>
              <Text
                style={{
                  fontFamily: 'Nunito',
                  fontSize: 40,
                  fontWeight: 'bold',
                  color: '#F1FAEE',
                }}>
                My account
              </Text>
            </Text>
            <Image
              style={{
                marginStart: 100,
                marginTop: 10,
                width: 40,
                height: 40,
              }}
              source={FilterPic}
            />
          </View>
          <View
            style={{
              alignItems: 'flex-start',
              marginTop: 100,
              width: Win.width,
              height: 100,
              borderTopStartRadius: 0,
              borderTopEndRadius: 0,
              borderBottomEndRadius: 30,
              borderBottomStartRadius: 30,
              backgroundColor: '#457B9D',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            paddingTop: 15,
            marginStart: -610,
            marginTop: 85,
            width: Win.width,
            height: 120,
            borderTopStartRadius: 0,
            borderTopEndRadius: 0,
            borderBottomEndRadius: 30,
            borderBottomStartRadius: 30,
            backgroundColor: '#F1FAEE',
          }}>
          <Image
            style={{
              width: 85.5,
              height: 79.5,
              borderRadius: 45,
              marginStart: 20,
            }}
            source={Hanip}
          />
          <View
            style={{
              alignItems: 'flex-start',
              paddingStart: 84,
              marginStart: -78,
            }}>
            <View
              style={{
                alignItems: 'flex-start',
              }}>
              <View
                style={{
                  alignItems: 'flex-start',
                }}>
                <Text
                  style={{
                    fontFamily: 'Nunito',
                    fontSize: 24,
                    textAlign: 'center',
                    color: '#457B9D',
                    marginStart: 1,
                  }}>
                  Haidar Rafif
                </Text>
                <View
                  style={{
                    marginTop: 0.5,
                    backgroundColor: '#457B9D',
                    width: 140,
                    height: 2,
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  marginStart: 1,
                  marginTop: 4,
                }}>
                <Image
                  style={{
                    width: 15,
                    height: 15,
                  }}
                  source={JobPic}
                />
                <Text
                  style={{
                    fontFamily: 'Nunito',
                    fontSize: 12,
                    textAlign: 'center',
                    color: '#457B9D',
                    marginStart: 5,
                    marginTop: 0.5,
                  }}>
                  Job
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  marginStart: 1,
                  marginTop: 4,
                }}>
                <Image
                  style={{
                    width: 15,
                    height: 15,
                  }}
                  source={EmailPic}
                />
                <Text
                  style={{
                    fontFamily: 'Nunito',
                    fontSize: 12,
                    textAlign: 'center',
                    color: '#457B9D',
                    marginStart: 5,
                    marginTop: 0.5,
                  }}>
                  Email
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          marginStart: 35,
          marginTop: 40,
        }}>
        <View
          style={{
            alignItems: 'flex-start',
          }}>
          <View
            style={{
              alignItems: 'flex-start',
              paddingTop: 22,
              marginTop: 300,
              width: 120,
              height: 120,
              borderRadius: 15,
              backgroundColor: '#457B9D',
              ...StyleSheet.absoluteFillObject,
            }}>
            <View
              style={{
                alignItems: 'center',
              }}>
              <Image
                style={{
                  marginStart: 20,
                  width: 50,
                  height: 50,
                }}
                source={CreatePostPic}
              />
              <Text
                style={{
                  fontFamily: 'Nunito',
                  fontSize: 17,
                  textAlign: 'center',
                  color: '#F1FAEE',
                  marginTop: 7,
                  marginStart: 16,
                }}>
                Create Post
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            alignItems: 'flex-start',
            marginStart: -150,
          }}>
          <View
            style={{
              alignItems: 'flex-start',
              paddingTop: 22,
              marginTop: 300,
              marginStart: -210,
              width: 120,
              height: 120,
              borderRadius: 15,
              backgroundColor: '#457B9D',
            }}>
            <View
              style={{
                alignItems: 'center',
              }}>
              <Image
                style={{
                  marginStart: 20,
                  width: 50,
                  height: 50,
                }}
                source={YourPostPic}
              />
              <Text
                style={{
                  fontFamily: 'Nunito',
                  fontSize: 17,
                  textAlign: 'center',
                  color: '#F1FAEE',
                  marginTop: 7,
                  marginStart: 25,
                }}>
                Your Post
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          marginTop: -50,
          paddingStart: 395,
          flex: 1,
        }}>
        <View
          style={{
            alignItems: 'flex-start',
            marginStart: 17,
            width: 160,
            height: 640,
            backgroundColor: '#457B9D',
          }}>
          <View
            style={{
              alignItems: 'flex-start',
              paddingStart: 17.5,
              paddingTop: 50,
              width: 2000,
              height: Win.height,
              backgroundColor: '#C6DADA',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
              }}>
              <Image
                style={{
                  width: 85.5,
                  height: 79.5,
                  borderRadius: 45,
                }}
                source={Hanip}
              />
              <View
                style={{
                  alignItems: 'flex-start',
                  paddingTop: 77,
                  marginStart: -78,
                }}>
                <View
                  style={{
                    alignItems: 'flex-start',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Nunito',
                      fontSize: 18,
                      fontWeight: 'bold',
                      textAlign: 'left',
                      color: '#457B9D',
                      marginTop: 10,
                    }}>
                    Haidar Rafif
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginStart: 8.65,
                marginTop: 37.5,
              }}>
              <Image
                style={{
                  marginTop: 0.5,
                  width: 12.73,
                  height: 13,
                }}
                source={EditProfilePic}
              />
              <Text
                style={{
                  fontFamily: 'Nunito',
                  fontSize: 12,
                  textAlign: 'center',
                  color: '#457B9D',
                  marginStart: 6.12,
                }}>
                Edit Profile
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginStart: 7.5,
                marginTop: 12.5,
              }}>
              <Image
                style={{
                  width: 15,
                  height: 15,
                }}
                source={JobPic}
              />
              <Text
                style={{
                  fontFamily: 'Nunito',
                  fontSize: 12,
                  textAlign: 'center',
                  color: '#457B9D',
                  marginStart: 5,
                  marginTop: 0.5,
                }}>
                Change Password
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginStart: 7.5,
                marginTop: 12,
              }}>
              <Image
                style={{
                  width: 15,
                  height: 15,
                }}
                source={JobPic}
              />
              <Text
                style={{
                  fontFamily: 'Nunito',
                  fontSize: 12,
                  textAlign: 'center',
                  color: '#457B9D',
                  marginStart: 5,
                  marginTop: 0.5,
                }}>
                Delete Account
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginStart: 7.5,
                marginTop: 24,
              }}>
              <Image
                style={{
                  width: 15,
                  height: 15,
                }}
                source={JobPic}
              />
              <Text
                style={{
                  fontFamily: 'Nunito',
                  fontSize: 12,
                  textAlign: 'center',
                  color: '#457B9D',
                  marginStart: 5,
                  marginTop: 0.5,
                }}>
                Help
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginStart: 7.5,
                marginTop: 12,
              }}>
              <Image
                style={{
                  width: 15,
                  height: 15,
                }}
                source={JobPic}
              />
              <Text
                style={{
                  fontFamily: 'Nunito',
                  fontSize: 12,
                  textAlign: 'center',
                  color: '#457B9D',
                  marginStart: 5,
                  marginTop: 0.5,
                }}>
                About
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginStart: 7.5,
                marginTop: 281.5,
              }}>
              <Image
                style={{
                  marginTop: 3,
                  width: 15,
                  height: 15,
                }}
                source={JobPic}
              />
              <Text
                style={{
                  fontFamily: 'Nunito',
                  fontSize: 14,
                  textAlign: 'center',
                  color: '#457B9D',
                  marginStart: 5,
                }}>
                Logout
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AccountSideMenu;
