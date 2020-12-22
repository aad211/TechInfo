// Imports Dependencies
import React, { Componenet } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import DATA from './data';
import {CONSTANCE} from './constants';
import BottomBar from './BottomBar';

// Screen Dimensions
const Win = Dimensions.get('window');
const {IMAGE_HEIGHT, IMAGE_WIDTH} = CONSTANCE;

// Infinite Scroll
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      documentID: [],
      documentData: [],
      limit: 6,
      lastVisible: null,
      loading: false,
      refreshing: false,
      selectedId: null
    };
  }
  // Component Did Mount
  componentDidMount = () => {
    try {
      // Cloud Firestore: Initial Query
      this.retrieveData();
    }
    catch (error) {
      console.log(error);
    }
  };
  // Retrieve Data
  retrieveData = async () => {
    try {
      // Set State: Loading
      this.setState({
        loading: true,
      });
      console.log('Get Data');
      // Cloud Firestore: Query
      let initialQuery = firestore().collection('topic')
        //.where('id', '<=', 200)
        //.orderBy('timeUpload')
        .orderBy(firestore.FieldPath.documentId())
        .limit(this.state.limit)
      // Cloud Firestore: Query Snapshot
      let documentSnapshots = await initialQuery.get();
      //console.log("SNAPSHOT DEBUG => ", documentSnapshots);

      // Cloud Firestore: Document Data
      let documentData = documentSnapshots.docs.map(doc => ({...doc.data(), id: doc.id}));

      console.log("DATA DEBUG => ", documentData);
      
      // Cloud Firestore: Last Visible Document (Document ID To Start From For Proceeding Queries)
      let lastVisible = documentData[documentData.length - 1].id;

      // Set State
      this.setState({
        documentData: documentData,
        lastVisible: lastVisible,
        loading: false,
      });
    }
    catch (error) {
      console.log(error);
    }
  };
  // Retrieve More
  retrieveMore = async () => {
    try {
      // Set State: Refreshing
      this.setState({
        refreshing: true,
      });
      console.log('Get additional Data');
      // Cloud Firestore: Query (Additional Query)
      let additionalQuery = firestore().collection('topic')
        //.where('id', '<=', 200)
        //.orderBy('timeUpload')
        .orderBy(firestore.FieldPath.documentId())
        .startAfter(this.state.lastVisible)
        .limit(this.state.limit)
      // Cloud Firestore: Query Snapshot
      let documentSnapshots = await additionalQuery.get();

      // Cloud Firestore: Document Data
      let documentData = documentSnapshots.docs.map(doc => ({...doc.data(), id: doc.id}));
      console.log("DATA DEBUG => ", documentData);
      
      // Cloud Firestore: Last Visible Document (Document ID To Start From For Proceeding Queries)
      let lastVisible = documentData[documentData.length - 1].id;
      // Set State
      this.setState({
        documentData: [...this.state.documentData, ...documentData],
        lastVisible: lastVisible,
        refreshing: false,
      });
    }
    catch (error) {
      console.log(error);
    }
  };
  // Render Header
  renderHeader = () => {
    try {
      return (
        <Text style={styles.headerText}>Topic</Text>
      )
    }
    catch (error) {
      console.log(error);
    }
  };
  // Render Footer
  renderFooter = () => {
    try {
      // Check If Loading
      if (this.state.loading) {
        return (
          <ActivityIndicator />
        )
      }
      else {
        return null;
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
        <View style={styles.container}>
        <ScrollView style={{flex: 1, height: Win.height}}>
            <Text style={styles.title}>TECHINFO</Text>
            <Text style={styles.subtitle}>Science, Technology, Creativity</Text>
            
            <FlatList
                style={styles.containerVertical}
                data={this.state.documentData}
                vertical={true}
                showsVerticalScrollIndicator={false}

                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.imageButton} onPress={onPress}>
                        <View style={{flex: 1}}>
                            <Text style={styles.titleVertical}>{item.topicName}</Text>
                        </View>
                        <Image
                            style={{
                                borderRadius: 25,
                                alignSelf: 'center',
                                height: 150,
                                width: 225,
                                resizeMode: 'contain' //bisa contain atau cover tergantung nantinya
                            }}
                            source={
                                {uri: 'https://firebasestorage.googleapis.com/v0/b/rpl-project-63a9d.appspot.com/o/product%2FfnPUalZbQVIXTZHOyAeE.png?alt=media&token=2dd2bc46-37ea-49cf-bc69-46f4faf3300d' /*item.pictureLink*/}
                            }
                        />
                    </TouchableOpacity>
                )}
                // Item Key
                keyExtractor={(item, index) => String(index)}
                // Header (Title)
                ListHeaderComponent={this.renderHeader}
                // Footer (Activity Indicator)
                ListFooterComponent={this.renderFooter}
                // On End Reached (Takes a function)
                onEndReached={this.retrieveMore}
                // How Close To The End Of List Until Next Data Request Is Made
                onEndReachedThreshold={0.3}
                // Refreshing (Set To True When End Reached)
                refreshing={this.state.refreshing}
            />
        </ScrollView>
        <BottomBar />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#457B9D',
    flex: 1,
    height: Win.height,
  },

  containerVertical: {
    backgroundColor: '#F1FAEE',
    marginTop: 10,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    flex: 1,
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
    flex: 1,
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
