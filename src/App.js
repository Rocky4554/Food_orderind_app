import React from 'react'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart';
import {useState} from 'react'
import CartProvider from './components/store/CartProvider';

function App() {

  const [cartisShown, setcartisShown] = useState(false);

  const showcarthandler =()=>{
    setcartisShown(true)
  }

  const hidecartHandler =()=>{
    setcartisShown(false);
  }

  return (
    <CartProvider>
      {cartisShown && <Cart onClose={hidecartHandler} /> }
      <Header onShow={showcarthandler} />
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
