
import './App.css';
import {getAuth} from "firebase/auth";
import app from "./firebase.init.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { Component }  from 'react';

const auth = getAuth(app);

function App() {

const handelEmail = (e) => {

  console.log(e.target.value);
}
const handelPass = (e) => {

  console.log(e.target.value);
}

const handelformsubmit = (e) => {
  console.log("Submit form");
  e.preventDefault();

}
  return (
    <div className="">

        <div className="reg w-50 mx-auto mt-3 mr-4">
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onBlur={handelEmail} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onBlur={handelPass} />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
 
    </div>
  );
}

export default App;
