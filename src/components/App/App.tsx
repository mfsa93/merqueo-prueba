import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route}from 'react-router-dom'
import Header from '../Header/Header';
import Login from '../Login/Login';
import NewsFeed from '../NewsFeed/NewsFeed';
import Register from '../Register/Register';
import firebase from './../../core/firebase'
import './App.scss';

function App() {

    const [firebaseInitialized, setFirebaseInitialized] = useState(false)

    useEffect(() => {
		firebase.isInitialized().then((val: any) => {
			setFirebaseInitialized(val)
		})
	})

    
    return (
        <div className="App">
            
            <Router>
                <Header></Header>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/feed" component={NewsFeed} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;