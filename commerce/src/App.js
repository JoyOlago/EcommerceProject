import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'

import Home from './components/Home';
import DisplayProductList from './components/ProductList';

function App() {
  let cardStyle={
    width:"18rem"
  }
  return (
    <>
    <Header />
    <Home />
    <Footer />  
    </>


  );
}

export default App;
