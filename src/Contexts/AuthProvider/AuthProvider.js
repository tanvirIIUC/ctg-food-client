import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../Firebase/Firebase.confige';
import Spinner from '../../Pages/Spinner/Spinner';



export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
   

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    //google
    const providerLogin =(provider) =>{
        setLoader(true)
       
        return signInWithPopup(auth,provider);
    }
    //   create user 
    const createUser = (email, password) => {
          setLoader(true);
       
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // log in
    const logIn = (email, password) => {
        setLoader(true);
      
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser,profile);
     }
    //log out
    const logOut = ()=>{
        // setLoader(true);
        localStorage.removeItem('genius-token');
        return signOut(auth);
    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
           
            const uid = user.uid;
            
        } else {
            
        }
    }
    )


    // check log in or not

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser);
            setUser(currentUser);
           
             setLoader(false);
            

        });

        return () => {
            return unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        logIn,
        logOut,
        createUser,
        loader,
        providerLogin,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;