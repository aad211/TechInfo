//SignUp Component

import React from 'react';
import { View, Button } from 'react-native';
import fireAuth from './auth';

export default function SignUp() {
    
    return (
        <View>
            <Button
                onPress = {() => {fireAuth.signOut()}}
                title = "SignOut"
            />
        </View>
    );
}