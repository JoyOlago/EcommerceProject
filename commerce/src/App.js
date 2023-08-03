import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'

import Home from './components/Home';
import DisplayProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import { useState } from 'react';
function App() {
  const [cartItems, setCartItems]= useState([])


  let cardStyle={
    width:"18rem"
  }

  return (
    <>
    <Header />
    <Home />    
    <DisplayProductList cartItems={cartItems} setCartItems={setCartItems}/>
    <Footer />  
    </>


  );
}

export default App;
