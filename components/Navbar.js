import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa';
import { MdAccountCircle} from 'react-icons/md';
import { AiFillCloseCircle,AiFillMinusCircle } from 'react-icons/ai';
import {BsFillPlusCircleFill,BsFillBagCheckFill} from 'react-icons/bs';
import { useRef } from 'react';
const Navbar = ({cart,addToCart,removeFromCart,clearCart,subTotal}) => {
    console.log(cart)
    const ref = useRef();
    const toggleCart = () => {
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full');
            ref.current.classList.add('translate-x-0')
        } else {
            ref.current.classList.remove('translate-x-0');
            ref.current.classList.add('translate-x-full')
        }
    }
    return (
        // navbar start......
        <header className="bg-gray-100  text-black-600 body-font sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                <Link href={"/"}><a className="flex title-font font-medium items-center text-black-900 mb-4 md:mb-0">
                    <Image className='rounded-full' src={"/favicon.ico.jpg"} height={45} width={45} />
                    <span className="ml-3 text-3xl text-black-800 font-sans">DarkWorld</span>
                </a></Link>
                {/* navbar menue */}
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link href={'/phone'}><a className="text-xl mr-5 hover:text-black-900">Phone</a></Link>
                    <Link href={'/leptop'}><a className="text-xl mr-5 hover:text-black-900">Leptop</a></Link>
                    <Link href={'/lcd'}><a className="text-xl mr-5 hover:text-black-900">LCD</a></Link>
                    <Link href={'/keyboard'}><a className="text-xl mr-5 hover:text-black-900">Keyboard</a></Link>
                </nav>
                {/* account div */}
                <div className='account cursor-pointer'>
                    <Link href={'/login'}><a><MdAccountCircle className='text-3xl mx-2' /></a></Link>
                </div>
                <div onClick={toggleCart} className='cart cursor-pointer'>
                    <FaShoppingCart className='text-3xl mx-2' />
                </div>
                {/* cart`s sidecat div */}
                <div ref={ref} className='sidecart absolute top-0 right-0 h-[100vh] w-72 bg-orange-100 py-6 pl-6 transform translate-x-full transition-transform z-10'>
                    <h2 className='text-center font-bold text-xl'>Shopping Cart</h2>
                    <span onClick={toggleCart} className='cursor-pointer absolute top-3 right-3 text-3xl text-orange-500'><AiFillCloseCircle /></span>
                    <ol className='list-decimal font-bold'>
                    {Object.keys(cart).length==0 && <div className='my-4'>Your Cart Is Empty!</div>}
                     {Object.keys(cart).map((element)=>{return <li key={element}>
                           <div className='cartItems flex my-5'>
                               <div className='w-2/3 font-bold'>{cart[element].name}</div>
                               <div className='w-1/3 flex justify-center items-center font-bold text-2xl'><AiFillMinusCircle onClick={()=>{removeFromCart(element,1)}} className='mx-1 cursor-pointer text-orange-500 text-3xl'/>{cart[element].qty}<BsFillPlusCircleFill onClick={()=>{addToCart(element,"HP- leptop 4 gb RAM, 500 gb Storage.",1,499)}} className='mx-2 cursor-pointer text-orange-500'/></div>
                           </div>
                       </li>})}
                    </ol>
                    <div className='mt-6 text-xl font-bold'>SubTotal : ₨ {subTotal}</div>
                    <div className='flex'>
                    <Link href={'/checkout'}><button className="flex mx-1 mt-10 text-white bg-orange-500 border-0 py-2 px-2 focus:outline-none hover:bg-orange-600 rounded text-lg"><BsFillBagCheckFill className='mt-1'/>CheckOut</button></Link>
                    <button onClick={clearCart} className="flex mx-1 mt-10 text-white bg-orange-500 border-0 py-2 px-2 focus:outline-none hover:bg-orange-600 rounded text-lg">Clear Cart</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar