
import './App.css';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import app from "./firebase.init.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { Component,useState }  from 'react';

const auth = getAuth(app);

function App() {

const [email,setEmail ] = useState('');
const [password,setPassword] = useState('');

const handelEmail = (e) => {

  console.log(e.target.value);
  setEmail(e.target.value);
}
const handelPass = (e) => {

  setPassword(e.target.value);
}

const handelcheck =(e) =>{
  
}

const handelformsubmit = (e) => {
  createUserWithEmailAndPassword(auth, email, password)
  .then((result) => {
    // Signed in 
    const user = result.user;
    console.log (user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  e.preventDefault();

}
  return (
    <div className="">

        <div className="reg w-50 mx-auto mt-3 mr-4">
    <Form onSubmit={handelformsubmit}>
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
      
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" onBlur={handelcheck}/>
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
