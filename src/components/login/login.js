
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth"; //All

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import useFirebase from "../hook/useFirebase";//firebase
import { useSignInWithGoogle } from "react-firebase-hooks/auth"//hooks
import app from "../../firebase.init"; //both
import { useNavigate,useLocation } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
const auth = getAuth(app);// both


//Google login // normal login // firebase hook login

const Login = () => {

  const [signInwithGoogle] = useSignInWithGoogle(auth); //hooks
  const { singInWithGooglee, logouthandel } = useFirebase();//firebase
  const [email, setEmail] = useState('');//normal
  const [password, setPassword] = useState('');//normal
  const [registration, setRegistration] = useState('');//normal
  const [user] = useAuthState(auth);
  
  const navigate = useNavigate()
  const location = useLocation()
  
  const from = location.state?.from?.pathname || '/';
  
  

  //normal
  const handelEmail = (e) => {
    setEmail(e.target.value);//store email  
  }
  //normal
  const handelPass = (e) => {
    setPassword(e.target.value); //store password  
  }
  //Normaal
  const handelRegister = (e) => {
    setRegistration(e.target.checked); //checkbok information store
  }
  
  if(user){
    navigate(from, {replace: true})
  }

  //Normal
  const handelformsubmit = (e) => {

    if (registration) { //if registration is == True (User have already a account)

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
    else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          // Signed in 
          const user = result.user;
          console.log(user);
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
        <h1>Please {registration ? 'Login' : 'Registration'}</h1>

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
            <Form.Check type="checkbox" label="Have already account?" onChange={handelRegister} />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handelformsubmit}>
            {registration ? 'login' : 'registration'}
          </Button>
          <Button onClick={singInWithGooglee}> Sign in with Google</Button>
          <Button onClick={logouthandel}> Logout</Button>
          <Button onClick={() => signInwithGoogle()}> Hooks</Button>
        </Form>
      </div>

    </div>
  );
}

export default Login;