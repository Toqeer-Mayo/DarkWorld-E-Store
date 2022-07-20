import { useRouter } from 'next/router'
import { useState } from 'react'
// import Product from '../../models/Product'
// import mongoose from "mongoose"

const Post = ({buyNow,addToCart}) => {
  // console.log(products);
  const router = useRouter()
  const { pid } = router.query
  const [pin, setpin] = useState()
  const [pins, setpins] = useState()
  const [checksevesis, setchecksevesis] = useState()

  const clicked=async()=>{
    const fetchdata=await fetch("http://localhost:3000/api/pincode");
    const data=await fetchdata.json();
    setpins(data);
    if(data.includes(parseInt(pin))){
      setchecksevesis(true)
    }else{
      setchecksevesis(false)
    }
  }
  const change=(e)=>{
    setpin(e.target.value)
  }

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-12 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" className=" h-[38vh] object-center rounded mt-16" src="https://m.media-amazon.com/images/I/71wxevJhO4L._AC_UY218_.jpg"/>
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">Dark World</h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <span className="text-gray-600 ml-3">4 Reviews</span>
                  </span>
                  <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                    <a className="text-gray-500">
                      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="text-gray-500">
                      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="text-gray-500">
                      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
                <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                <div className="flex mt-10">
                  <span className="title-font font-medium text-2xl text-gray-900 w-auto">₨4990</span>
                  <button onClick={()=>{buyNow(pid,"hp - Leptoe 14 inche screen 4gb RAM,500 gb Storage.",1,499)}} className="flex sm:text-sm ml-8 md:ml-14 text-white bg-orange-500 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-orange-600 rounded">Buy Now</button>
                  <button onClick={()=>{addToCart(pid,"hp - Leptoe 14 inche screen 4gb RAM,500 gb Storage.",1,499)}} className="flex sm:text-sm ml-1 md:ml-4 text-white bg-orange-500 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-orange-600 rounded">Add To Cart</button>
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>
                <div className=" flex input mt-6 space-x-2">
                  <input onChange={change} className=' rounded-md border-2 border-gray-400 pl-3' type="text" />
                  <button onClick={clicked} className="text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded">Check Pin</button>
                </div>
                {checksevesis&&checksevesis!=null &&<div className='text-red-900 mt-3 font-semibold'>
                <h6>Yay/This pincode is servisable.</h6>
                </div>}
                {!(checksevesis)&&checksevesis!=null &&<div className='text-red-900 mt-3 font-semibold'>
                <h6>sorry!We do not deliver to this pincode yet.</h6>
                </div>}
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Post


// export async function getServerSideProps(context) {
//   mongoose.connect(process.env.URI)
//   let products = await Product.find({category:"phone"})
//   return {
//     props: { products: JSON.parse(JSON.stringify(products)) }
//   }
// }