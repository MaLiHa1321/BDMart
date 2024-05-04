import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth/cordova";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState([]);
    const googleProvider  = new GoogleAuthProvider();


    // Create user
    const createUser=(email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
}

// signin

   const signInUser =(email,password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
   }

//    current user
useEffect(()=>{
  const unsubscribe =  onAuthStateChanged(auth,currentUser =>{
        setUser(currentUser);
        setLoading(false);
        console.log(currentUser);
});

return () =>{
    unsubscribe();
}
},[])

// signout

const logOut =() =>{
    setLoading(true);
    return signOut(auth);
}

// google signin
   const googleSignIn = () =>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
} 

 // update profile
 const updateUser = (name,photo) =>{
    return updateProfile(auth.currentUser, {
        displayName: name, 
        photoURL: photo 
    })
    }


    const authInfo={
        user,
        loading,
        createUser,
        signInUser,
        logOut,
        googleSignIn,updateUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;