import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>DarkWorld E-Store</title>
        <meta name="description" content="ecommeres store,mobiles store online," />
        <meta name="keywords" content="ecommeres store,mobiles store online,buy mobile,oppo,vivo" />
        <link rel="icon" href="/favicon.ico.jpg" />
      </Head>
      <div className='bg-red-500'>
        <img src="/2.jpg" alt=""/>
      </div>
    </div>
  )
}
