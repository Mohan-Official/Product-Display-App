import {Routes, Route} from 'react-router-dom'
import NavBar from "./Components/NavBar"
import Cart from "./Components/Pages/Cart";
import './App.css'
import Navigation from './Components/Pages/Navigation';
import Shop from './Components/Shop';
import Contact from './Components/Contact';
import MainProductPage from './Components/MainProductPage';
import WishList from './Components/Pages/WishList';
import Container from './Components/Container';

function App() 
{
  return (
    <>
      <NavBar />
      <Navigation />

      <Routes>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path='/products' element={<MainProductPage />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path='/contacts' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
