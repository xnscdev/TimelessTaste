import React from 'react';
import {auth} from './firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import SignInForm from "./SignInForm";
import {HomePage} from "./HomePage";

const Page = {
    SignIn: 1,
    Register: 2,
    Home: 3,
    Account: 4,
    History: 5
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signedIn: false,
            page: Page.SignIn
        }
        this.signIn = this.signIn.bind(this);
        this.register = this.register.bind(this);
        this.authStateChanged = this.authStateChanged.bind(this);
        auth.onAuthStateChanged(this.authStateChanged);
    }

    signIn(email, password) {
        signInWithEmailAndPassword(auth, email, password).catch(err => {
            let msg;
            switch (err.code) {
                case 'auth/invalid-email':
                    msg = "Invalid email";
                    break;
                case 'auth/user-disabled':
                    msg = "Account has been disabled";
                    break;
                case 'auth/user-not-found':
                    msg = "Account not found";
                    break;
                case 'auth/wrong-password':
                    msg = "Incorrect password";
                    break;
                case 'auth/invalid-login-credentials':
                    msg = 'Invalid login credentials';
                    break;
                default:
                    msg = "Unknown error";
            }
            this.setState({
                signInError: err.message
            })
        });
    }

    register(email, password, confirmPassword) {
        if (password !== confirmPassword) {
            this.setState({
                registerError: "Passwords do not match"
            });
            return;
        }

        createUserWithEmailAndPassword(auth, email, password).catch(err => {
            let msg;
            switch (err.code) {
                case 'auth/email-already-in-use':
                    msg = "Email already in use";
                    break;
                case 'auth/invalid-email':
                    msg = "Invalid email";
                    break;
                case 'auth/weak-password':
                    msg = "Password is too weak";
                    break;
                default:
                    msg = "Unknown error";
            }
            this.setState({
                registerError: msg
            })
        });
    }

    signOut() {
        // noinspection JSIgnoredPromiseFromCall
        auth.signOut();
    }

    authStateChanged(user) {
        if (user) {
            this.setState({
                signedIn: true,
                signInError: undefined,
                registerError: undefined,
                page: Page.Home
            });
        } else {
            this.setState({
                signedIn: false,
                page: Page.SignIn
            });
        }
    }

    render() {
        switch (this.state.page) {
            case Page.SignIn:
                return <SignInForm callback={this.signIn} error={this.state.signInError}/>;
            case Page.Home:
                return <HomePage/>;
            default:
                return <h1 className="text-red-500">Invalid page</h1>;
        }
    }
}

export default App;
