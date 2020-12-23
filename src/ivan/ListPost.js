/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {CONSTANCE} from './constants';
import SearchPic from '../assets/SearchPic.png';
import FilterPic from '../assets/FilterPic.png';
import ArduinoPic from '../assets/arduino.png';
import ContributorPic from '../assets/hanip.png';
import TrianglePic from '../assets/TrianglePic.png';

const Win = Dimensions.get('window');
const {IMAGE_HEIGHT, IMAGE_WIDTH} = CONSTANCE;

const ListPost = () => {
  return (
    <View
      style={{
        alignItems: 'flex-start',
        flex: 1,
      }}>
      <View
        style={{
          alignItems: 'flex-start',
          width: Win.width,
          height: 74,
          borderTopStartRadius: 0,
          borderTopEndRadius: 0,
          borderBottomEndRadius: 25,
          borderBottomStartRadius: 25,
          backgroundColor: 'rgba(69, 123, 157, 255)',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            paddingStart: 17,
            paddingTop: 10,
            width: Win.width,
            height: 74,
            borderTopStartRadius: 0,
            borderTopEndRadius: 0,
            borderBottomEndRadius: 25,
            borderBottomStartRadius: 25,
            backgroundColor: '#9BBAC5',
          }}>
          <Text
            style={{
              fontFamily: 'Nunito',
              fontSize: 40,
              fontWeight: 'bold',
              color: 'rgba(241, 250, 238, 255)',
            }}>
            {' '}
            Your Post{' '}
          </Text>
          <View
            style={{
              alignItems: 'flex-start',
              marginStart: 88,
              marginTop: 1,
            }}>
            <View
              style={{
                alignItems: 'flex-start',
                paddingStart: 8,
                paddingTop: 8,
                marginTop: 10,
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: 'rgba(255, 255, 255, 255)',
              }}>
              <Image
                style={{
                  width: 24,
                  height: 24,
                }}
                source={SearchPic}
              />
            </View>
          </View>
          <Image
            style={{
              marginStart: 17,
              marginTop: 10,
              width: 40,
              height: 40,
            }}
            source={FilterPic}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.imageButton}>
        <View style={styles.containerInside}>
          <Text style={styles.titleVertical}>Arduino</Text>
          <Image source={ContributorPic} style={styles.contributor} />
          <Text style={styles.subtitleVertical}>Haidar Rafif</Text>
          <View style={styles.containerInside2}>
            <Image source={ArduinoPic} style={styles.containerImage} />
          </View>
        </View>
      </TouchableOpacity>
      <View
        style={{
          alignItems: 'flex-start',
          marginStart: 10,
          marginTop: 306,
        }}>
        <View
          style={{
            alignItems: 'flex-start',
            paddingStart: 13,
            paddingTop: 15,
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: 'rgba(69, 123, 157, 255)',
          }}>
          <Image source={TrianglePic} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#457B9D',
  },

  containerInside: {
    backgroundColor: '#457B9D',
    margin: 30,
    width: Win.width - 60,
    height: 300,
    borderRadius: 35,
  },

  containerInside2: {
    backgroundColor: '#F1FAEE',
    width: Win.width - 100,
    height: 200,
    alignSelf: 'center',
    borderRadius: 35,
  },

  title: {
    marginTop: 80,
    fontSize: 65,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    color: '#F1FAEE',
  },

  subtitle: {
    marginBottom: 100,
    fontSize: 18,
    textAlign: 'center',
    justifyContent: 'center',
    color: '#F1FAEE',
  },

  titleVertical: {
    marginBottom: 5,
    fontSize: 24,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#000000',
  },

  subtitleVertical: {
    fontSize: 12,
    justifyContent: 'center',
    textAlign: 'left',
    marginTop: 35,
    marginBottom: 5,
    marginStart: 60,
    color: '#000000',
    ...StyleSheet.absoluteFillObject,
  },

  contributor: {
    marginStart: 20,
    marginBottom: 10,
  },

  containerImage: {
    margin: 10,
    alignSelf: 'center',
    marginTop: 25,
  },

  imageButton: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    alignItems: 'center',
    padding: 10,
  },

  image: {
    //width: IMAGE_WIDTH,
    //height: IMAGE_HEIGHT,
    borderRadius: 30,
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },

  bottomBar: {
    backgroundColor: '#F1FAEE',
  },
});

export default ListPost;
