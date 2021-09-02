import React, { useState, useEffect } from 'react';
import "./components/fontAwesomicons";
import './App.css';

import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import { SignInPage } from './components/SignInPage';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const hideMenu = () =>{
    if (window.innerWidth > 768 && isOpen) {
      setIsOpen(false)
      console.log('i resized')
    }
  };
    window.addEventListener('resize', hideMenu);
    

    return () => {
      window.removeEventListener('resize', hideMenu);
      
    };

    


    });

  return (
    <>
      <Navbar toggle={toggle} />

      <Dropdown isOpen={isOpen} toggle={toggle} />
    <SignInPage/>
   
      <Footer />
    </>
  );
}

export default App;
