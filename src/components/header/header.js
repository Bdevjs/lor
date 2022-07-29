import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './header.css';


export const header = () => {
  return (
    <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/orders">Order</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/login">Login</Link>
        </nav>
    
    </div>
  );
}

export default header;