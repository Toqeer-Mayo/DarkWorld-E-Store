import { useEffect, useState } from 'react';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [cart, setcart] = useState({});
  const [subTotal, setsubTotal] = useState(0);
  useEffect(() => {
    try {
      if(localStorage.getItem("cart")){
        setcart(JSON.parse(localStorage.getItem("cart")))
        // saveCart(JSON.parse(localStorage.getItem("cart")));
      }
      
    } catch (error) {
      console.error(error)
      localStorage.clear();
      
    }
    }, []);
  // save cart object in localstorsge.
  const saveCart=(myCart)=>{
    let subt=0
    for (let i = 0; i < Object.keys(myCart).length; i++) {
      subt+=myCart[Object.keys(myCart)[i]].price*myCart[Object.keys(myCart)[i]].qty;
    }
    setsubTotal(subt)
    localStorage.setItem("cart",JSON.stringify(myCart))
  }
  // logic to add items in cart.
  const addToCart=(pId,name,qty,price)=>{
    const newCart=cart;
    // if item is exist alrady then encreace quinty otherwise create new.
    if(pId in cart){
      newCart[pId].qty=cart[pId].qty + qty;
    }else{
      newCart[pId]={qty:1,name,price}
    }
    setcart(newCart);
    saveCart(newCart);
    setsubTotal(newCart[pId].qty)
  };

  // logic to add items in cart.
  const removeFromCart=(pId,qty)=>{
    const newCart=cart;
    // if item is exist alrady then decrease quinty.
    if(pId in cart){
      newCart[pId].qty=cart[pId].qty - qty;
    }
    // if quenty is <= 0 then delete the whole item from cart.
    if(newCart[pId].qty<=0){
      delete newCart[pId];
    }
    setcart(newCart)
    saveCart(newCart);
  }
  const clearCart=()=>{
    setcart({})
    saveCart({})
  }
  

  return(
  <>
    <Navbar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal}/>
    <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
    <Footer/>
  </>
)};

export default MyApp
