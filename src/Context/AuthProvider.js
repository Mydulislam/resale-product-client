import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    // Create User
    const signUp = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login
    const login = (email, passowrd)=>{
        return signInWithEmailAndPassword(auth, email, passowrd)
    }
    // Currently Signed User
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
        })
        return ()=>{
            unsubscribe()
        }
    },[])
    const authInfo = {signUp, login, user}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;