import {BrowserRouter as Router, Switch, Route}from 'react-router-dom'
import Header from '../Header/Header';
import Login from '../Login/Login';
import NewsFeed from '../NewsFeed/NewsFeed';
import Register from '../Register/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import './App.scss';

function App() {    
    return (
        <div className="App">
            
            <Router>
                <Header></Header>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <PrivateRoute exact path='/'>
                        <NewsFeed />
                    </PrivateRoute>
                </Switch>
            </Router>
        </div>
    );
}

export default App;