import React from 'react'
import {AiFillMinusCircle } from 'react-icons/ai';
import {BsFillPlusCircleFill,BsFillBagCheckFill} from 'react-icons/bs';

const checkout = ({cart,addToCart,removeFromCart}) => {
  return (
    <>

      <section className="text-black-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-8">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Delivery Details</h1>
          </div>
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 sm:px-0 items-end">
            <div className="relative flex-grow w-full">
              <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
              <input type="text" id="full-name" name="full-name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative flex-grow w-full">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>

          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative flex-grow w-full">
              <label htmlFor="adress" className="leading-7 text-sm text-gray-600">Adress</label>
              <textarea id="adress" name="adress" className="h-[54px] w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative flex-grow w-full">
              <label htmlFor="tel" className="leading-7 text-sm text-gray-600">phone</label>
              <input type="tel" id="tel" name="tel" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative flex-grow w-full">
              <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
              <input type="text" id="city" name="city" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative flex-grow w-full">
              <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
              <input type="text" id="state" name="state" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative flex-grow w-full">
              <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">PinCode</label>
              <input type="text" id="pincode" name="pincode" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="flex flex-col text-center w-full my-8">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Review Cart Items</h1>
          </div>
          <div className='mx-[190px] sidecart bg-orange-100 py-6 px-8 rounded-md'>
            <h2 className='text-center font-bold text-xl'>Shopping Cart</h2>
            <ol className='list-decimal font-bold'>
              {Object.keys(cart).length == 0 && <div className='mt-4'>Your Cart is Empty!</div>}
              {Object.keys(cart).map((k) => {
                return <li key={k}>
                  <div className='cartItems flex my-5'>
                  <div className='w-2/3 font-bold'>{cart[k].name}</div>
                               <div className='flex justify-center items-center font-bold text-2xl -mr-8'><AiFillMinusCircle onClick={()=>{removeFromCart(k,1)}} className='mx-1 cursor-pointer text-orange-500'/>{cart[k].qty}<BsFillPlusCircleFill onClick={()=>{addToCart(k,"hp - Leptoe 14 inche screen",1,499)}} className='mx-2 cursor-pointer text-orange-500'/></div>
                  </div>
                </li>
              })}
            </ol>
            {/* <span className='text-xl font-bold'>SubTotal :₨{subTotal}</span> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default checkout