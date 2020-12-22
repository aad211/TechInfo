
import React, { Component } from 'react';
import { Button, View, Text, ScrollView, TextInput } from 'react-native';
import style from './style';
import fireAuth from './auth';
import dbService from './firestore';
import signInModel from './signInModel';

export default class SignIn extends Component {
    state = {nama: "", email: "", password: "", id: ""}

    inputId = (inputText) => {
        this.setState({ id: inputText })
    }

    render(){
        return (
            <ScrollView>
                <View style = {{ alignItems: 'center' }}>
                <Text style = {{ marginBottom: 10, marginTop: 20, fontSize: 25 }}>
                    Firestore CRUD Function
                </Text>
                <Button
                    onPress = {() =>
                    dbService.createDB ({
                        topicName: this.state.id,
                        pictureLink: "www.google.com",
                        timeUpload: new Date()
                    })
                    }
                    title = "Create Database"
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
