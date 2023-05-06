import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Wife from './components/Wife';
import Footer from './components/Footer';
import Confirm from './components/Confirm'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Wife></Wife>
      <Confirm></Confirm>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
