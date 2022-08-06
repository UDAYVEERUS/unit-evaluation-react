import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import ProductDetail from './components/ProductDetail';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/cart' element={<Cart/>} ></Route>
        <Route path='/:id' element={<ProductDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;