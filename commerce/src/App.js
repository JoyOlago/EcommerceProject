import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import DisplayProductList from './components/ProductList';

function App() {
 
  let cardStyle={
    width:"18rem"
  }
  return (
    <>
    <Header />
    <Home />
    <DisplayProductList/>
    <Footer />  
    </>


  );
}

export default App;
