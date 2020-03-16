import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import MainView from './containers/MainView'
import HotSearches from './containers/HotSearches'
import DetailPage from './components/DetailPage'
import Login from './containers/Login'
import PrivateRoute from './components/PrivateRoute'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from './firebaseConfig'

const firebaseApp = firebase.initializeApp(firebaseConfig)
const firebaseAppAuth = firebaseApp.auth()
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
}
 
function App(props) {

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar {...props}/>
          <Switch>
            <Route path="/login">
              <Login {...props}/>
            </Route>
            <Route path="/jobs/:id">
              <DetailPage />
            </Route>
            <PrivateRoute path="/hot" {...props}>
              <HotSearches />
            </PrivateRoute>
            <Route path="/">
              <MainView />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App)
