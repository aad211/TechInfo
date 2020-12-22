/*
Show product detail
*/

import React, {useState, useEffect, Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

export default class detailProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {urlPicture: '', data: []};
    }

    async componentDidMount() {
        //const urlPicture = await storage().ref(`/product/${name}.png`).getDownloadURL();
        await storage()
            .ref(`/product/${this.props.match.params.id}.png`)
            .getDownloadURL()
            .then((data) => {
                this.setState({urlPicture: data});
            })
            .catch((error) => {
                this.setState({urlPicture: 'no picture'});
                console.log(error)
            });

        await firestore()
            .collection('detail')
            .doc(this.props.match.params.detail)
            .get()
            .then(documentSnapshot => {
                this.setState({data: documentSnapshot.data()});
            })
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        return (
            <View style = {{ alignItems: 'center' }}>
                <Text>ID: {this.props.match.params.id}</Text>
                <Text>Title: {this.props.match.params.name}</Text>
                <Text>URL Picture: {this.props.match.params.picture}</Text>
                <Image
                    style={{
                        alignSelf: 'center',
                        height: 200,
                        width: 200,
                        resizeMode: 'contain' //bisa contain atau cover tergantung nantinya
                    }}
                    source={
                        this.state.urlPicture == '' ? 
                            require('./assets/loadingPicture.png') : 
                            this.state.urlPicture == 'no picture' ? 
                                require('./assets/noProductPicture.png') :
                                { uri: this.state.urlPicture }
                    }
                />
                <Text></Text>
                {/*this.Product(this.props.match.params.id)*/}
                {console.log(this.state.data)}
                {console.log(this.state.urlPicture)}
            </View>
        );
    }
}


/*import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Dimensions, FlatList, SafeAreaView, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';


async function getPicture(name) {
    const urlPicture = await storage().ref(`/product/${name}.png`).getDownloadURL();
    //const urlPicture = productPicture.getDownloadURL();
    console.log(urlPicture)
    return(
        <Image source={{ uri: urlPicture }} />
    );
}*/

/*function Product(id, name, picture) {
    const [detail, setDetail] = useState([]); // Initial empty array of users
    //const [linkPicture, setLinkPicture] = useState([]);
    
    const linkPicture = async (name) => {
        const imageRef = storage().ref(`/product/${name}.png`)
        const url = await imageRef.getDownloadURL().catch((error) => { throw error });
        return url
    }

    useEffect(() => {
        firestore()
            .collection('detail')
            .where('product', '==', id)
            .onSnapshot(querySnapshot => {
                const detail = [];

                querySnapshot.forEach(documentSnapshot => {
                    detail.push({
                    ...documentSnapshot.data(),
                    id: documentSnapshot.id,
                    });
                });

                setDetail(detail);
            });
    }, []);

    //console.log(detail);
    console.log(linkPicture(name));

    return(
        <View>
            <Text>ID: {id}</Text>
            <Text>Title: {name}</Text>
            <Text>URL Picture: {picture}</Text>
            <Text>Detail: {detail.map((item)=>(item.detail))}</Text>
        </View>
    );
}

export default function detailProduct ({ match }) {
    const Picture = storage().ref(`/product/${match.params.name}.png`);
    const urlPicture = Picture.getDownloadURL();
    console.log(urlPicture)

    return (
        <View style = {{ alignItems: 'center' }}>
            <Text style = {{ marginBottom: 10, marginTop: 20, fontSize: 25 }}>
                Detail Product
            </Text>
            {Product(match.params.id, match.params.name, match.params.picture)}
        </View>
    );
}*/