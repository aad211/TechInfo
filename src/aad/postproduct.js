

import React, { useState, useEffect, Component } from 'react';
import { ActivityIndicator, Dimensions, FlatList, SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { Link } from 'react-router-native';

export default class detailProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {detailProduct: "", referenceLink: ""};
    }

    render(){
        return (
            <ScrollView>
                <View>
                    <Text>
                        Input your product title
                    </Text>
                    <Button
                        onPress = {async() =>
                            dbService.createDB ({
                                topicName: this.state.id,
                                pictureLink: "www.google.com",
                                timeUpload: new Date()
                            })
                        }
                        title = "Post your product"
                    />
                </View>

                <View style = {{ alignItems: 'center' }}>
                <TextInput 
                    style = { style.input }
                    placeholder = "id"
                    onChangeText = {this.inputId}
                />

                <Button
                    onPress = {() => dbService.readDB(this.state.id)}
                    title = "Read Database"
                />

                <Button
                    onPress = {() =>
                    dbService.updateDB (
                    this.state.id,
                    {
                        first: "Muhammad",
                        middle: "As'ad",
                        last: "Muyassir",
                        born: 2000
                    }
                    )
                    }
                    title = "Update Database"
                />

                <Button
                    onPress = {() => dbService.deleteDB (this.state.id)}
                    title = "Delete Database"
                />
                </View>

                <View style = {{ alignItems: 'center' }}>
                <Button
                    onPress = {() => dbService.searchByField ("born", "==", 2000)}
                    title = "Search id which born in 2000"
                />
                </View>

            </ScrollView>
        );
    }
}