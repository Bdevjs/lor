import  React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './header.css';
import useFirebase from "../hook/useFirebase"
export const header = () => {

  const {user} = useFirebase();
  return (
    <div>
      <h1>{user.photoURL}</h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/orders">Order</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/reviews">Check</Link>
            <Link to="/login">
              Login

              </Link>
        </nav>
    
    </div>
  );
}

export default header;