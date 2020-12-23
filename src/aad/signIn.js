//SignIn Component

import React, { Component } from 'react';
import { Button, View, Text, ScrollView, TextInput } from 'react-native';
import style from './style';
import fireAuth from './auth';
import dbService from './firestore';
import signInModel from './signInModel';

export default class SignIn extends Component {
    state = {nama: "", email: "", password: "", id: ""}

    inputNama = (inputText) => {
        this.setState({ nama: inputText })
        console.log(this.state.nama)
    }

    inputEmail = (inputText) => {
        this.setState({ email: inputText })
        console.log(this.state.email)
    }

    inputPassword = (inputText) => {
        this.setState({ password: inputText })
    }

    inputId = (inputText) => {
        this.setState({ id: inputText })
    }

    render(){
        return (
            <ScrollView>
                <View style = {{ alignItems: 'center' }}>
                <Text style = {{ marginBottom: 10, marginTop: 20, fontSize: 25 }}>
                    Firebase Authentication Function
                </Text>

                <TextInput 
                    style = { style.input }
                    placeholder = "Email"
                    onChangeText = {this.inputEmail}
                />

                <TextInput 
                    style = { style.input }
                    placeholder = "Password"
                    onChangeText = {this.inputPassword}
                    secureTextEntry={true}
                />

                <Button
                    onPress = {() => {fireAuth.signIn(this.state.email, this.state.password)}}
                    title = "SignIn"
                />
                </View>

                <View style = {{ alignItems: 'center' }}>
                <TextInput 
                    style = { style.input }
                    placeholder = "Email"
                    onChangeText = {this.inputEmail}
                />

                <TextInput 
                    style = { style.input }
                    placeholder = "Password"
                    onChangeText = {this.inputPassword}
                    secureTextEntry={true}
                />

                <Button
                    onPress = {() => {fireAuth.signUp(this.state.email, this.state.password), this.inputEmail("")}}
                    title = "SignUp"
                />
                </View>

                <View style = {{ alignItems: 'center' }}>
                <Text style = {{ marginBottom: 10, marginTop: 20, fontSize: 25 }}>
                    Firestore CRUD Function
                </Text>
                <Button
                    onPress = {() =>
                    /*dbService.createDB ({
                        first: "Alan",
                        middle: "Mathison",
                        last: "Turing",
                        born: 1912
                    })*/
                    dbService.createDB ({
                        name: {
                        first: "Alan",
                        middle: "Mathison",
                        last: "Turing"
                        },
                        born: 1912
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

/*
import React from 'react';
import { Button, StyleSheet, View, Text, Image, ScrollView, TextInput } from 'react-native';
import style from './style';
import fireAuth from './auth';
import dbService from './firestore';

class SignIn extends Component {
    state = {nama: "", email: "", password: "", id: ""}

    inputNama = (inputText) => {
        this.setState({ nama: inputText })
    }

    inputEmail = (inputText) => {
        this.setState({ email: inputText })
    }

    inputPassword = (inputText) => {
        this.setState({ password: inputText })
    }

    inputId = (inputText) => {
        this.setState({ id: inputText })
    }

    namaKucing() {

    }
    
    render() {
        return (
        <ScrollView>
            <View style = {{ alignItems: 'center' }}>
            <Text style = {{ marginBottom: 10, marginTop: 20, fontSize: 25 }}>
                Firebase Authentication Function
            </Text>

            <TextInput 
                style = { style.input }
                placeholder = "Email"
                onChangeText = {this.inputEmail}
            />

            <TextInput 
                style = { style.input }
                placeholder = "Password"
                onChangeText = {this.inputPassword}
            />

            <Button
                onPress = {() => {fireAuth.signIn(this.state.email, this.state.password)}}
                title = "SignIn"
            />
            </View>

            <View style = {{ alignItems: 'center' }}>
            <TextInput 
                style = { style.input }
                placeholder = "Email"
                onChangeText = {this.inputEmail}
            />

            <TextInput 
                style = { style.input }
                placeholder = "Password"
                onChangeText = {this.inputPassword}
            />

            <Button
                onPress = {() => {fireAuth.signUp(this.state.email, this.state.password)}}
                title = "SignUp"
            />
            </View>

            <View style = {{ alignItems: 'center' }}>
            <Text style = {{ marginBottom: 10, marginTop: 20, fontSize: 25 }}>
                Firestore CRUD Function
            </Text>
            <Button
                onPress = {() =>
                /*dbService.createDB ({
                    first: "Alan",
                    middle: "Mathison",
                    last: "Turing",
                    born: 1912
                })*
                dbService.createDB ({
                    name: {
                    first: "Alan",
                    middle: "Mathison",
                    last: "Turing"
                    },
                    born: 1912
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

export default SignIn;
*/