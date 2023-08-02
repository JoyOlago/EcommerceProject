import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'

import Home from './components/Home';
import DisplayProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
function App() {
  let cardStyle={
    width:"18rem"
  }
  return (
    <>
    <Header />
    <Home />
    <SearchBar/>
    <DisplayProductList/>
    <Footer />  
    </>


  );
}

export default App;
