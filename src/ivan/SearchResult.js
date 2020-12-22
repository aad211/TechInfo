/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {CONSTANCE} from './constants';
import SearchPic from '../assets/SearchPic.png';
import ArduinoPic from '../assets/arduino.png';
import ContributorPic from '../assets/hanip.png';

const Win = Dimensions.get('window');
const {IMAGE_HEIGHT, IMAGE_WIDTH} = CONSTANCE;

const SearchResult = () => {
  return (
    <View
      style={{
        alignItems: 'flex-start',
        paddingTop: 29,
        backgroundColor: '#457B9D',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          width: Win.width,
          height: Win.height / 7,
        }}>
        <View
          style={{
            alignItems: 'center',
            marginStart: 30,
            paddingStart: 260,
            paddingTop: 10,
            marginTop: 1,
            width: Win.width - 60,
            height: 50,
            borderRadius: 25,
            backgroundColor: '#FFFFFF',
          }}>
          <Image
            style={{
              width: 30,
              height: 30,
              marginStart: 40,
            }}
            source={SearchPic}
          />
        </View>
        <Text
          style={{
            fontFamily: 'Calibri',
            fontWeight: 'bold',
            fontSize: 36,
            textAlign: 'left',
            color: '#000000',
            marginStart: -342,
          }}>
          {' '}
          Arduino{' '}
        </Text>
      </View>

      <View
        style={{
          backgroundColor: '#F1FAEE',
          height: Win.height,
          width: Win.width,
          borderRadius: 25,
        }}>
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

export default SearchResult;
