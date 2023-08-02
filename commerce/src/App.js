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
      {/* <div className="App">
        <div className="card" style={cardStyle}>
        <img class="card-img-top" src="https://contents.mediadecathlon.com/p2155551/k$11e0e6f8f6f4906c580007288ce1bdd0/run-active-men-s-running-shoe-blackslashyellow.jpg?format=auto&quality=40&f=800x800" alt="Card image cap"></img>
          <div className='card-header'>
            <p className='card-text'>Product Name</p> */}
          {/* </div>
        </div>
      </div> */}
    <DisplayProductList/>
    <Footer />  
    </>


  );
}

export default App;
