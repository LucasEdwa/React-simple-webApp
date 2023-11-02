// Importing the necessary libraries
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';

// Importing Tailwind CSS
import 'tailwindcss/tailwind.css';

// Importing pages
import { Products } from "./pages/Products";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Protect } from "./pages/Protect";
import {Home }from './pages/Home';

// Importing components
import { Navbar } from './componentes/Navbar';
import { Footer } from './componentes/Footer';





function App() {
  // auth is used to change the state of auth and setAuth is used to change the state of auth
  const [auth, setAuth]= useState(false);
  
  return (
    <>

      <AuthContext.Provider value={[auth,setAuth]}>
        <div className='bg-gray-700'>
          {/* Navbar component */}
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Products' element={<Products />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            {auth? //if auth is true then show the page otherwise null
            <Route path='/protect' element={<Protect />} />:
            null} 
            
            {  /* 404 Not Found page */ }
            <Route path='*' element={<h1>404 Not Found</h1>} />
          </Routes>
          
          
          {/* Footer section */}
          <Footer />
        </div>
      </AuthContext.Provider>
    </> 
  );
}

// Exporting the App component
export default App; 