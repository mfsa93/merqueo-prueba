import firebase from 'firebase';
import { useState, useEffect, useContext, createContext } from 'react';
import { config } from '../config/firebase';

firebase.initializeApp(config)

type contextType = {
    user: any,
    isAuthenticating: boolean,
    login: (email: string, password: string) => any,
    signup: (name: string, email: string, password: string) => any,
    logout: () =>  void,
}

const AuthContext = createContext({} as contextType);

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState(false);
    const [isAuthenticating, setIsAuthenticating] = useState(true);
  
    // Wrap any Firebase methods we want to use making sure ...
    // ... to save the user to state.
    const login = (email: string, password: string) => {
      return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response: any) => {
          setUser(response.user);
          return response.user;
        });
    };
  
    const signup = async(name: string, email: string, password: string) => {
      return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response: any) => {
          
          const currentUser = firebase.auth().currentUser
          if( currentUser ) {
            currentUser.updateProfile({
                displayName: name
            })
          }
          setUser(response.user);
          return response.user;
        });
    };
  
    const logout = () => {
      return firebase
        .auth()
        .signOut()
        .then(() => {
          setUser(false);
        });
    };
  
    useEffect(() => {
      const unsubscribe = firebase.auth().onAuthStateChanged((user: any) => {
        setUser(user);
        setIsAuthenticating(false);
      });
  
      // Cleanup subscription on unmount
      return () => unsubscribe();
    }, []);
  
    // The user object and auth methods
    const values = {
      user,
      isAuthenticating,
      login,
      signup,
      logout
    };
  
    // Provider component that wraps your app and makes auth object
    // ... available to any child component that calls useAuth().
    return (
      <AuthContext.Provider value={values}>
        {!isAuthenticating && children}
      </AuthContext.Provider>
    );
  };