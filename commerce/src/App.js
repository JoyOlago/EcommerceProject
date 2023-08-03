import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'

import Home from './components/Home';
import DisplayProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
<<<<<<< HEAD

import { useState } from 'react';

=======
>>>>>>> 8627ede (Chore:Reverting to c4d541034f37c411d4cfd89ff815727f95259190 before merge conflict)
function App() {
  let cardStyle={
    width:"18rem"
  }
<<<<<<< HEAD

  return (
    <>
    <Header />
    <Home />    
<<<<<<< HEAD

    <DisplayProductList cartItems={cartItems} setCartItems={setCartItems}/>

    <Footer />  
=======
=======
 
>>>>>>> dba8d43 (Chore:Renaming Cart no of items to products, updating delivery form code)
  let cardStyle={
    width:"18rem"
  }
  return (
    <>
    <Header />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="App">
=======
=======
>>>>>>> d3896cd (Feat: append display items to Home.js)
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
=======
=======
>>>>>>> dba8d43 (Chore:Renaming Cart no of items to products, updating delivery form code)
    <Home />
=======
>>>>>>> 8627ede (Chore:Reverting to c4d541034f37c411d4cfd89ff815727f95259190 before merge conflict)
    <DisplayProductList/>
>>>>>>> 0302945 (Feat:used displayProduct component to fetch data to display list of items and appended to App.js)
    <Footer />  
>>>>>>> 39be9f4 (Added Header, Footer and some assets)
    </>


  );
}

export default App;
