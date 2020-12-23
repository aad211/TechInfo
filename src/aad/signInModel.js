//SignIn Component


import React, { Component } from 'react';
import { Button, StyleSheet, View, Text, Image, ScrollView, TextInput } from 'react-native';

class signInModel extends Component {
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
}

export default new signInModel();