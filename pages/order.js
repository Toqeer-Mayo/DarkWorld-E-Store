import React from 'react'

const order = () => {
  return (
    <>
    <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-16 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">DarkWorld</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order Id : #10283909</h1>
        <div className="flex mb-4">
          <a className="flex-grow text-orange-500 border-b-2 border-orange-500 py-2 text-lg px-1">Name</a>
          <a className="flex-grow border-b-2 border-orange-500 py-2 text-lg px-1">Quantity</a>
          <a className="flex-grow border-b-2 border-orange-500 py-2 text-lg px-1">Price</a>
        </div>
        <div className="flex py-2">
          <span className="text-gray-500 w-2/4">HP- leptop 4 gb RAM.</span>
          <span className="ml-auto text-gray-900 w-1/4">1</span>
          <span className="ml-auto text-gray-900 w-1/4">₨ 499</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
        <span className="text-gray-500 w-2/4">HP- leptop 4 gb RAM.</span>
          <span className="ml-auto text-gray-900 w-1/4">1</span>
          <span className="ml-auto text-gray-900 w-1/4">₨ 499</span>
        </div>
        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
        <span className="text-gray-500 w-2/4">HP- leptop 4 gb RAM.</span>
          <span className="ml-auto text-gray-900 w-1/4">1</span>
          <span className="ml-auto text-gray-900 w-1/4">₨ 499</span>
        </div>
        <div className="flex flex-col">
          <span className="title-font font-medium text-2xl text-gray-900">Total : ₨ 58.00</span>
          <button className="flex justify-center mt-5 text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded">Confirm Order</button>
        </div>
      </div>
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/>
    </div>
  </div>
</section>
    </>
  )
}

export default order