import React from 'react'
import Link from 'next/link'
import Product from '../models/Product'
import mongoose from "mongoose"
const leptop = ({products}) => {
  return (
    <>
    <section className="text-gray-600 body-font">
      <div className="container px-10 py-24 mx-auto ">
        <div className="flex flex-wrap -m-4">
       {products.map((items)=>{return <div key={items._id} className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-sm shadow-slate-400">
            <Link href={'/product/hp - Leptoe 14 inche screen'}><a className="block relative rounded overflow-hidden">
              <img alt="ecommerce" className="p-10 object-cover object-center w-full h-full block" src="https://m.media-amazon.com/images/I/71gk1oNNWqL._AC_UY218_.jpg"/>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{items.category}</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">{items.title}</h2>
              <p className="mt-1">${items.price}</p>
            </div>
            </a>
            </Link>
          </div>})}
        </div>
      </div>
    </section>
  </>
  )
}

export default leptop

export async function getServerSideProps(context) {
  mongoose.connect(process.env.URI)
  let products = await Product.find({category:"leptop"})
  return {
    props: { products: JSON.parse(JSON.stringify(products)) }
  }
}