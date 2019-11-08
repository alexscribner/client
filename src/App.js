import React, { useState, useEffect } from 'react';
import './App.css';
import Auth from './Components/Auth/Auth';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Site/Home';
import Footer from './Components/Site/Footer';
// import PetCard from './Components/Pets/PetCard';
// import Pets from './Components/Pets/Pets';


function App() {
   const [token, setToken] = useState('');
  useEffect(() => {
    if(localStorage.getItem('token')){
      setToken(localStorage.getItem('token'))
    }
  }, [])
  const updateToken = (newToken, role) => {
    localStorage.setItem('token', newToken)
    localStorage.setItem('role', role)
    setToken(newToken)
  }
  const clearToken = () => {
    localStorage.clear()
    setToken('')
  }
  

  return (
    <div className="App">
      <Navbar clearToken = {clearToken}/>
      {/* <Auth updateToken = {updateToken} /> */}
      {token === localStorage.getItem('token') ? <Home token={token} /> : <Auth updateToken={updateToken} /> }
      <Footer />
    </div>
  );
}

export default App;
