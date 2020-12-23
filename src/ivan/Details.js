/* eslint-disable react-native/no-inline-styles */
//import libraries
import React, {useEffect, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Animated,
  View,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {StatusBar} from 'expo-status-bar';
import Card from './Card';
import * as Animatable from 'react-native-animatable';
const {width, height} = Dimensions.get('window');

const Detail = ({navigation, route}) => {
  const {item} = route.params;

  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 600,
      delay: 400,
      useNativeDriver: true,
    }).start();
  });

  return (
    <SafeAreaView>
      <StatusBar style="light" />
      <SharedElement style={styles.image} id={`item.${item.id}.path`}>
        <Animated.Image source={item.path} style={[styles.image]} />
      </SharedElement>

      <SharedElement id={`item.${item.id}.contributorName`}>
        <Animated.Text style={styles.location}>
          {item.contributorName}
        </Animated.Text>
      </SharedElement>

      <Animatable.Text
        animation="fadeInUp"
        duration={800}
        delay={600}
        style={{
          top: 100,
          letterSpacing: 1.2,
          fontWeight: 'bold',
          fontSize: 30,
          color: '#fff',
          textAlign: 'center',
        }}>
        DIGITAL
      </Animatable.Text>

      <Animated.FlatList
        data={item.moreDetails}
        style={{top: 320, left: 30}}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => {
          return (
            <View>
              <Card item={item} />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

Detail.sharedElements = (navigation, route) => {
  const {item} = route.params;
  return [
    {id: `item.${item.id}.path`},
    {id: `item.${item.id}.contributorName`},
    {id: `item.${item.id}.contributor`},
  ];
};

// define your styles
const styles = StyleSheet.create({
  image: {
    height,
    width,
    resizeMode: 'cover',
    ...StyleSheet.absoluteFillObject,
  },

  location: {
    marginTop: 40,
    marginLeft: 30,
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    textDecorationStyle: 'double',
    position: 'absolute',
  },

  date: {
    marginTop: 80,
    marginLeft: 30,
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textDecorationStyle: 'double',
    position: 'absolute',
  },
});

//make this component available to the app
export default Detail;
