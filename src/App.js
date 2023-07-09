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
  apiKey: "AIzaSyDJ3M1axgd31Fd5Hz4rlqvzC2lWEtq7rEA",
  authDomain: "discoverdubai-1de93.firebaseapp.com",
  projectId: "discoverdubai-1de93",
  storageBucket: "discoverdubai-1de93.appspot.com",
  messagingSenderId: "59761132",
  appId: "1:59761132:web:4b2f5081964b9c418120c9",
  measurementId: "G-HL3K1T4G3F"
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