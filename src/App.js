import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from './Nav'
import Dashboard from './Dashboard';
import About from './About';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import './App.css'

import { useAuthState } from 'react-firebase-hooks/auth';

firebase.initializeApp({
  apiKey: "AIzaSyDpETp0HlzsGkQcLgTyUFfPkbBdaR5zyRY",
  authDomain: "diapair-demo.firebaseapp.com",
  projectId: "diapair-demo",
  storageBucket: "diapair-demo.appspot.com",
  messagingSenderId: "1074670504402",
  appId: "1:1074670504402:web:92c99aaf0fbd75e38fe00b",
  measurementId: "G-55RS492BRM"
})

const auth = firebase.auth();

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div className='loading'>Loading...</div>; // Display a loading state
  }

  return (
    user ? ServeApp() : <SignIn />
  );
}

function ServeApp() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" Component={Dashboard} />
          <Route path="/about" Component={About} />
        </Routes>
        <footer className='w-screen text-center font-thin text-sm mb-2 mt-20'>©2023 DIAPAIR | Contact</footer>
      </div>
    </BrowserRouter>
  );
};

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

    return <button onClick={signInWithGoogle} className='sign-in'>Sign in with Google</button>
}

export default App;