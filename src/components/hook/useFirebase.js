 import {useEffect, useState} from 'react';
import { getAuth, GoogleAuthProvider,onAuthStateChanged,signInWithPopup,signOut} from "firebase/auth"; import app from "../../firebase.init";

const auth = getAuth(app);
 const googleProvider = new GoogleAuthProvider();



const useFirebase = ( ) => {
    const [user, setUser] = useState({});
    const [userdetails, setUserDetails] = useState({});

    const logouthandel = () => {

      signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
    }
    
    const singInWithGoogleR = ( ) => {
        
       signInWithPopup(auth,googleProvider)
       .then(result => {
            const user = result.user
            setUser(user)
            setUserDetails(user.metadata)
   })
   }

    useEffect( ()=> {
        onAuthStateChanged(auth, user =>{
           setUser(user);
         })
   },[])
   return {user, userdetails,singInWithGoogle, logouthandel}
 }
  export default useFirebase;