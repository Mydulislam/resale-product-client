import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create User
    const signUp = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login
    const login = (email, passowrd)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, passowrd)
    }

    // Google SignIn
    const googleSign = (provider)=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // logout
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    //Update user
    const updateUser = (userInfo)=>{
        return updateProfile(auth.currentUser, userInfo)
    }
    // Currently Signed User
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    
    const authInfo = {signUp, login, user, logOut, updateUser, googleSign, loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;