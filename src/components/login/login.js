
import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import app from "../../firebase.init";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState }  from 'react';
import useFirebase from "../hook/useFirebase";

const auth = getAuth(app);
const login = () =>{
const {singInWithGoogle} = useFirebase();
const [email,setEmail ] = useState('');
const [password,setPassword] = useState('');
const [registration,setRegistration] = useState('');

const handelEmail = (e) => {

  console.log(e.target.value);
  setEmail(e.target.value);
  
}
const handelPass = (e) => { 

  setPassword(e.target.value);
  
}

const handelRegister =(e) =>{
  setRegistration(e.target.checked);
}

const handelformsubmit = (e) => {

  if(registration){
    
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in 
        const user = result.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
     
  }
  else{
  
    console.log(registration)
  
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
  }
  
  e.preventDefault();

}
  return (
    <div className="">
      

  <div className="reg w-50 mx-auto mt-3 mr-4">
    <h1>Please {registration ? 'Login':'Registration'}</h1>
        
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
        <Form.Check type="checkbox" label="Have already account?" onChange={handelRegister}/>
      </Form.Group>
     
      <Button variant="primary" type="submit">
        {registration? 'login':'registration'}
      </Button>
      <Button onClick={singInWithGoogle}> Sign in with Google</Button>
    </Form>
        </div>
 
    </div>
  );
}

export default login;