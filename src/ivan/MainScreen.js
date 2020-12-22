import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import DATA from './data';
import {CONSTANCE} from './constants';
//import BottomBar from './BottomBar';

const {IMAGE_HEIGHT, IMAGE_WIDTH} = CONSTANCE;

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TECHINFO</Text>
      <Text style={styles.subtitle}>Science, Technology, Creativity</Text>

      <FlatList
        style={styles.containerVertical}
        data={DATA}
        keyExtractor={(item) => String(item.id)}
        vertical
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity style={styles.imageButton}>
              <View>
                <Text style={styles.titleVertical}>{item.type}</Text>
              </View>
              <Image source={item.path} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#457B9D',
  },

  containerVertical: {
    backgroundColor: '#F1FAEE',
    marginTop: 10,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
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
    color: '#457B9D',
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

export default MainScreen;
