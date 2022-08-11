import  React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './header.css';
import useFirebase from "../hook/useFirebase"
import { useAuthState } from 'react-firebase-hooks/auth';
import {getAuth} from "firebase/auth"
import app from "../../firebase.init";

const auth = getAuth(app);

export const header = () => {

//React firebase Hooks
const [user] = useAuthState(auth);

  //Google direact 
  //const {user,logouthandel,userdetails} = useFirebase();
  //console.log(userdetails)
 

  return (
    <div>
    {user?
      <h1>{user.displayName}</h1>:<h1>nai</h1>
      
    }
        <nav>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/orders">Order</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/login">
              {/* {user?<span onClick={logouthandel}>Logout</span>:"Login"} */}

              </Link>
            <Link to ="/"></Link>
        </nav>
    
    </div>
  );
}

export default header;