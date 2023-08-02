import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
<<<<<<< HEAD
=======
import DisplayProductList from './components/ProductList';
>>>>>>> 0302945 (Feat:used displayProduct component to fetch data to display list of items and appended to App.js)

import Home from './components/Home';
import DisplayProductList from './components/ProductList';
import SearchBar from './components/SearchBar';

import { useState } from 'react';

function App() {
  const [cartItems, setCartItems]= useState([])


  let cardStyle={
    width:"18rem"
  }
<<<<<<< HEAD

  return (
    <>
    <Header />
    <Home />    

    <DisplayProductList cartItems={cartItems} setCartItems={setCartItems}/>

    <Footer />  
=======
  let cardStyle={
    width:"18rem"
  }
  return (
    <>
    <Header />
<<<<<<< HEAD
      <div className="App">
=======
      {/* <div className="App">
>>>>>>> 0302945 (Feat:used displayProduct component to fetch data to display list of items and appended to App.js)
        <div className="card" style={cardStyle}>
        <img class="card-img-top" src="https://contents.mediadecathlon.com/p2155551/k$11e0e6f8f6f4906c580007288ce1bdd0/run-active-men-s-running-shoe-blackslashyellow.jpg?format=auto&quality=40&f=800x800" alt="Card image cap"></img>
          <div className='card-header'>
            <p className='card-text'>Product Name</p> */}
          {/* </div>
        </div>
<<<<<<< HEAD
      </div>
<<<<<<< HEAD
>>>>>>> a14deca (Added bootstrap)
=======
=======
      </div> */}
    <DisplayProductList/>
>>>>>>> 0302945 (Feat:used displayProduct component to fetch data to display list of items and appended to App.js)
    <Footer />  
>>>>>>> 39be9f4 (Added Header, Footer and some assets)
    </>


  );
}

export default App;
