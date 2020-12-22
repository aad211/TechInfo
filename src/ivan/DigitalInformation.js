/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import TrianglePic from '../assets/TrianglePic.png';
import BackgroundPicture from '../assets/1.png';
import DATA from './ItemData';
import {CONSTANCE} from './constants';

const Win = Dimensions.get('window');
const {IMAGE_HEIGHT, IMAGE_WIDTH} = CONSTANCE;

const DigitalInformation = () => {
  return (
    <View
      style={{
        alignItems: 'flex-start',
      }}>
      <ImageBackground
        style={{
          width: Win.width,
          height: (2 * Win.height) / 5,
        }}
        source={BackgroundPicture}>
        <View
          style={{
            alignItems: 'flex-start',
            paddingStart: 65,
            paddingTop: 109,
            flex: 1,
          }}>
          <Text
            style={{
              fontFamily: 'Calibri',
              fontWeight: 'bold',
              fontSize: 60,
              textAlign: 'center',
              color: 'rgba(241, 250, 238, 255)',
            }}>
            {' '}
            DIGITAL{' '}
          </Text>
        </View>
      </ImageBackground>

      <FlatList
        style={styles.containerVertical}
        data={DATA}
        keyExtractor={(item) => String(item.id)}
        vertical
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity style={styles.imageButton}>
              <View style={styles.containerInside}>
                <Text style={styles.titleVertical}>{item.itemName}</Text>
                <Image source={item.contributor} style={styles.contributor} />
                <Text style={styles.subtitleVertical}>
                  {item.contributorName}
                </Text>
                <View style={styles.containerInside2}>
                  <Image source={item.map} style={styles.containerImage} />
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <View
        style={{
          alignItems: 'flex-start',
          marginStart: 10,
          marginTop: -306,
        }}>
        <View
          style={{
            alignItems: 'flex-start',
            paddingStart: 13,
            paddingTop: 15,
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: '#A8DADC',
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
    borderRadius: 35,
  },

  containerInside2: {
    backgroundColor: '#F1FAEE',
    width: Win.width - 100,
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

export default DigitalInformation;
