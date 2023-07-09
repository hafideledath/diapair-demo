import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import './Nav.css';

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

function Nav() {
  return (
    <div className="Nav">
      <nav className='flex justify-end pr-20 pt-10 text-2xl lg:text-3xl align-middle content-box'>
        <div className="logo text-center absolute left-20">
          <h2 className='text-5xl lg:text-6xl tracking-tight'><span style={{color: "#EE2D24", fontWeight: 900}}>D</span><span style={{color: "#04A161", fontWeight: 900}}>I</span><span style={{color: "#000000", fontWeight: 900}}>A</span>PAIR</h2>
          <h3 className='text-xl lg:text-2xl lg:leading-3'>Student Connect</h3>
        </div>
        <a href="/">Dashboard</a>
        <a href="/about">About</a>
        <a href="#" className='sign-out px-2.5 py-1 rounded-lg text-xl lg:text-2xl h-10' onClick={() => auth.signOut()}>Sign Out</a>
      </nav>
    </div>
  );
}

export default Nav;