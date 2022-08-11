import {useEffect, useState} from 'react';
import { getAuth, GoogleAuthProvider,onAuthStateChanged,signInWithPopup,signOut} from "firebase/auth"; 
import app from "../../firebase.init";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();



const useFirebase = ( ) => {
    const [user, setUser] = useState({});
    

    const logouthandel = () => {

      signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
    }
    
    const singInWithGooglee = ( ) => {
        
       signInWithPopup(auth,googleProvider)
       .then(result => {
            const user = result.user
            setUser(user)
            
   })
   }

    useEffect( ()=> {
        onAuthStateChanged(auth, user =>{
           setUser(user);
         })
   },[])
   return {user,singInWithGooglee, logouthandel}
 }
  export default useFirebase;