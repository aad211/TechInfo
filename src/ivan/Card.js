/* eslint-disable react-native/no-inline-styles */
//import liraries
import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Animated, Easing} from 'react-native';
import * as Animatable from 'react-native-animatable';

const Card = ({item}) => {
  const scale = useRef(new Animated.Value(0)).current;
  const markerScale = useRef(new Animated.Value(0)).current;
  const imageHeight = useRef(new Animated.Value(120)).current;
  const imageWidth = useRef(new Animated.Value(120)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(scale, {
        toValue: 1,
        duration: 600,
        delay: 300 * (item.id + 1),
        useNativeDriver: false,
      }),

      Animated.timing(markerScale, {
        toValue: 1,
        duration: 400,
        delay: 900 + 300 * (item.id + 1),
        easing: Easing.bezier(0.47, 1.44, 0.99, 1.3),
        useNativeDriver: true,
      }),
      Animated.timing(imageHeight, {
        toValue: 80,
        duration: 800,
        delay: 500 * (item.id + 1),
        useNativeDriver: false,
      }),
    ]).start();
  });

  const rotateX = scale.interpolate({
    inputRange: [0, 1],
    outputRange: ['-100deg', '0deg'],
  });

  const skewY = scale.interpolate({
    inputRange: [0, 1],
    outputRange: ['-50deg', '0deg'],
  });

  return (
    <Animated.View
      style={{
        height: 260,
        width: 200,
        backgroundColor: '#fff',
        padding: 20,
        marginRight: 20,
        borderRadius: 35,
        transform: [{scale}, {rotateX}, {skewY}],
      }}>
      <View>
        <Animatable.Image
          animation="slideInDown"
          delay={300 * (item.id + 1)}
          duration={1000}
          source={item.contributor}
          style={{
            borderRadius: 12,
            marginVertical: 5,
            ...StyleSheet.absoluteFillObject,
          }}
        />

        <Animatable.Text
          animation={'fadeIn'}
          duration={1000}
          delay={400 * (item.id + 1)}
          style={{
            marginLeft: 45,
            fontSize: 14,
            fontWeight: 'bold',
            textDecorationLine: 'underline',
            textDecorationColor: '#000',
          }}>
          {item.contributorName}
        </Animatable.Text>

        <Animated.View
          style={{
            position: 'absolute',
            top: 20,
            left: 45,
            transform: [{scale: markerScale}],
          }}
        />

        <Animated.View
          style={{
            position: 'absolute',
            top: 20,
            left: 60,
            transform: [{scale: markerScale}],
          }}
        />

        <Animated.View
          style={{
            position: 'absolute',
            top: 20,
            left: 75,
            transform: [{scale: markerScale}],
          }}
        />
        <Animated.View
          style={{
            position: 'absolute',
            top: 20,
            left: 90,
            transform: [{scale: markerScale}],
          }}
        />

        <Animated.View
          style={{
            position: 'absolute',
            top: 20,
            left: 105,
            transform: [{scale: markerScale}],
          }}
        />

        <View style={{position: 'absolute', top: 100, zIndex: -1}}>
          <Animatable.Image
            animation="slideInDown"
            delay={300 * (item.id + 1)}
            duration={1000}
            source={item.map}
            style={{
              height: imageHeight,
              width: imageWidth,
              borderRadius: 12,
              marginVertical: 5,
            }}
          />
          <Animated.View
            style={{
              position: 'absolute',
              top: 30,
              left: 70,
              transform: [{scale: markerScale}],
            }}
          />
        </View>

        <Animatable.View
          animation={'fadeIn'}
          duration={800}
          delay={600 * (item.id + 1)}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            top: 90,
          }}
        />
      </View>
    </Animated.View>
  );
};

// define your styles

//make this component available to the app
export default Card;
