
import React, { useState, useEffect, Component } from 'react';
import { ActivityIndicator, Dimensions, FlatList, SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { Link } from 'react-router-native';

export default class detailProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {urlPicture: '', data: [], urlPicture: []};
    }

    async getLink(id) {
      await storage()
            .ref(`/product/${id}.png`)
            .getDownloadURL()
            .then((data) => {
                //this.setState({urlPicture: data});
                console.log(data)
                return(data)
            })
            .catch((error) => {
                //this.setState({urlPicture: 'no picture'});
                console.log(error)
                return('no picture')
            });
    }

    async componentDidMount() {
        //const urlPicture = await storage().ref(`/product/${name}.png`).getDownloadURL();
        /*this.state.data.map(doc => doc.id)
        .forEach(doc => {
          console.log(doc);
        });*/
        
        await firestore()
          .collection('product')
          .where('topic', '==', this.props.match.params.id)
          .get()
          .then(querySnapshot => {
            //querySnapshot.docs.map(doc => console.log(doc.id))
            const data = querySnapshot.docs.map(async (doc) => ({...doc.data(), id: doc.id, linkPicture: await this.getLink(doc.id)}))
            //const data = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
            //const data = querySnapshot.docs
            this.setState({data: data});
          });

        //console.log(this.state.data)
        
        /*await storage()
          .ref(`/product/${this.state.data.map(doc => doc.id).forEach}.png`)
          .getDownloadURL()
          .then((data) => {
              //this.setState({urlPicture: data});
              console.log(data)
              console.log('woooyyyy')
              //return(data)
          })
          .catch((error) => {
              //this.setState({urlPicture: 'no picture'});
              console.log(error)
              //return('no picture')
          });

        const linkPicture = [];

        //console.log(this.state.data)
        
        this.state.data.map(doc => doc.id)
        .forEach(async (data) => {
          await storage()
          .ref(`/product/${data}.png`)
          .getDownloadURL()
          .then((link) => {
              //this.setState({urlPicture: data});
              //const data = this.state.data.map(doc => ({...doc.data(), id: doc.id, linkPicture: linkPicture}))
              //console.log(data)
              linkPicture.push(link)
              this.setState({urlPicture: ({link})});
              console.log('linkPic: ', this.state.urlPicture)
              //return(data)
          })
          .catch((error) => {
              //this.setState({urlPicture: 'no picture'});
              linkPicture.push('no picture')
              link = 'no picture'
              this.setState({urlPicture: ({link})});
              console.log(error)
              console.log('linkPic: ', this.state.urlPicture)
              //return('no picture')
          });
        })
        
        //this.setState({data: this.state.data.map(doc => ({...doc.data(), id: doc.id, ...linkPicture}))});

        //console.log(this.state.data)

        //console.log('link: ', linkPicture)
        console.log('lagi gila', this.state.urlPicture)*/
    }

  render() {
    return (<View></View>/*
            <View style = {{ alignItems: 'center' }}>
                <Text style = {{ marginBottom: 10, marginTop: 20, fontSize: 25 }}>
                    LIST PRODUCT FROM {this.props.match.params.name}
                </Text>
                <FlatList
                  data={this.state.data}
                  renderItem={({ item }) => (
                    <Link to={`/detailProduct/${item.id}/${item.title}/${item.picture}/${item.detail}`} underlayColor="#f0f4f7">
                      <View>
                          <Text>ID: {item.id}</Text>
                          <Text>Title: {item.title}</Text>
                          <Text>ID Author: {item.author}</Text>
                          <Text>ID Detail: {item.detail}</Text>
                          <Text>Picture: {item.picture}</Text>
                          <Text>Link Picture: {item.picture}</Text>
                      </View>
                    </Link>
                  )}
                />
            </View>*/
    );
  }
}



/*
function Product(id) {
  const [product, setProduct] = useState([]); // Initial empty array of users

    useEffect(() => {
        const subscriber = firestore()
            .collection('product')
            .where('topic', '==', id)
            .onSnapshot(querySnapshot => {
              const product = [];

              querySnapshot.forEach(documentSnapshot => {
                  product.push({
                  ...documentSnapshot.data(),
                  id: documentSnapshot.id,
                  });
              });

              setProduct(product);
            });
    }, []);

    //console.log(product);

    return(
        <FlatList
          data={product}
          renderItem={({ item }) => (
            <Link to={`/detailProduct/${item.id}/${item.title}/${item.picture}/${item.detail}`} underlayColor="#f0f4f7">
              <View>
                  <Text>ID: {item.id}</Text>
                  <Text>Title: {item.title}</Text>
                  <Text>ID Author: {item.author}</Text>
                  <Text>ID Detail: {item.detail}</Text>
                  <Text>Picture: {item.picture}</Text>
              </View>
            </Link>
          )}
        />
    );
}

export default function listProduct ({ match }) {
    
    /*let query = firestore().collection('product')
        .where('topic', '==', match.params.id)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                console.log(doc.id, " => ", doc.data());
            });
        });*/
    
    /*const subscriber = firestore()
    .collection('product')
    .onSnapshot(querySnapshot => {
      const product = [];

      querySnapshot.forEach(documentSnapshot => {
        product.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });
      setUsers(users);
      setLoading(false);
        });
    
    //let documentData = snap.docs.map(document => document.data());

    //console.log("params", match.params);

    return (
            <View style = {{ alignItems: 'center' }}>
                <Text style = {{ marginBottom: 10, marginTop: 20, fontSize: 25 }}>
                    LIST PRODUCT FROM {match.params.name}
                </Text>
                {Product(match.params.id)}
            </View>
    );
}
*/