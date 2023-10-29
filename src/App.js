import React from 'react';
import {auth} from './firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import SignInForm from "./SignInForm";
import Page from "./Page";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import AccountPage from "./AccountPage";
import HistoryPage from "./HistoryPage";
import RegisterForm from "./RegisterForm";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signedIn: false,
            page: Page.SignIn
        }
        this.signIn = this.signIn.bind(this);
        this.register = this.register.bind(this);
        this.signOut = this.signOut.bind(this);
        this.changePage = this.changePage.bind(this);
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
                signInError: msg
            });
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
                    msg = "Email already in use. If you already have an account, please sign in instead.";
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

    changePage(page) {
        this.setState({page});
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
        let element;
        switch (this.state.page) {
            case Page.SignIn:
                return <SignInForm callback={this.signIn} register={() => this.changePage(Page.Register)} error={this.state.signInError}/>;
            case Page.Register:
                return <RegisterForm callback={this.register} signIn={() => this.changePage(Page.SignIn)} error={this.state.registerError}/>;
            case Page.Home:
                element = <HomePage/>;
                break;
            case Page.Account:
                element = <AccountPage/>;
                break;
            case Page.History:
                element = <HistoryPage/>;
                break;
            default:
                element = <div className="flex text-5xl h-screen justify-center items-center text-red-500">Invalid page</div>;
        }
        return (
            <>
                <NavBar changePage={this.changePage} signOut={this.signOut}/>
                <div className="p-5">
                    {element}
                </div>
            </>
        )
    }
}

export default App;
