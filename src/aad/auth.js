//This is for Authentication Function
import { Component } from 'react';
import auth from '@react-native-firebase/auth';

class fireAuth extends Component {
    state = {isLogin: false};

    isLogin(condition) {
        this.setState({ isLogin: condition })
        console.log(this.state.nama)
    }
    
    signIn(email, password) {
        console.log("DEBUG: signIn Function");
        try {
            auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                alert ("Anda berhasil Sign In, horaaayyy we did it!")
                //this.setState({isLogin: true})
                this.state.isLogin = true;
                //console.log(this.state.isLogin)
            })
            .catch(error => {
                alert(error.message);
            })
        } catch(error) {
            alert(error);
        }
    }

    signUp(email, password) {
        console.log("DEBUG: signUp Function");
        try {
            auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                alert ("Anda berhasil Sign Up, horaaayyy we did it!")
            })
            .catch(error => {
                alert(error.message);
            })
        } catch(error) {
            alert(error);
        }
    }

    signOut() {
        console.log("DEBUG: signOut Function");
        try {
            auth().signOut()
            .then(() => {
                alert ("Anda berhasil Log Out, jangan lama-lama ya, nanti kangen")
                this.setState({isLogin: false})
            })
            .catch(error => {
                alert(error.message);
            })
        } catch(error) {
            alert(error);
        }
    }
}

export default new fireAuth();