//Nav Component

/*<View style={{
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexDirection: 'row',
            position: 'absolute',
            marginHorizontal: 15
        }}></View>*/

import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';
import auth from './auth';

export default function Nav() {
    return (
        <View style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginHorizontal: 15
        }}>
            <Link to="/">
                <Text>Home</Text>
            </Link>
            {auth.state.isLogin ? (
                <View>
                    <Link to="SignUp">
                        <Text>Account</Text>
                    </Link>
                </View>
            ) : (
                <View>
                    <Link to="/SignIn">
                        <Text>SignIn</Text>
                    </Link>
                </View>
            )}
            <Link to="crud">
                <Text>CRUD</Text>
            </Link>
        </View>
    );
}