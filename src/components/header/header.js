import  React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './header.css';
import useFirebase from "../hook/useFirebase"



export const header = () => {

  const {user,logouthandel,userdetails} = useFirebase();
  console.log(userdetails)
 

  return (
    <div>
    {user?
      <h1>{user.photoURL}</h1>:<h1>nai</h1>
      
    }
        <nav>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/orders">Order</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/login">
              {user?<span onClick={logouthandel}>Logout</span>:"Login"}

              </Link>
        </nav>
    
    </div>
  );
}

export default header;