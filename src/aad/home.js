//Home Component

/*import React from 'react';
import { View, Text } from 'react-native';
import dbService from './firestore';

export default function Home() {
    dbService.getAll();
    return (
        <View>
            <Text>Home</Text>
        </View>
    );
}*/


// Imports: Dependencies
import React, { Component } from 'react';
import { ActivityIndicator, Dimensions, FlatList, SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import firestore from '@react-native-firebase/firestore';

// Screen Dimensions
const { height, width } = Dimensions.get('window');
// Screen: Infinite Scroll
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
      <SafeAreaView>
        <FlatList
          // Data
          data={this.state.documentData}
          // Render Items
          renderItem={({ item }) => (
            <Link to={`/listProduct/${item.id}/${item.topicName}`} underlayColor="#f0f4f7">
              <View style={styles.itemContainer}>
                <Text>Id: {item.id}</Text>
                <Text>Topic: {item.topicName}</Text>
                <Text>Picture: {item.pictureLink}</Text>
              </View>
            </Link>
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
      </SafeAreaView>
    )
  }
}
// Styles
const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
  },
  headerText: {
    fontFamily: 'System',
    fontSize: 36,
    fontWeight: '600',
    color: '#000',
    marginLeft: 12,
    marginBottom: 12,
  },
  itemContainer: {
    height: 250,
    width: width,
    borderWidth: .2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'System',
    fontSize: 16,
    fontWeight: '400',
    color: '#000',
  },
});