import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'



const Home: NextPage = () => {
  const [code, setCode] = useState<string>("")
  const [isAcces, setIsAcces] = useState<boolean>(false)

  
  return (
    <div className={`${code == "kapoentje" ? "bg-[url('https://thumbs.gfycat.com/WealthyOldfashionedDromaeosaur-size_restricted.gif')]" : "bg-gray-900"} bg-center min-h-screen h-full`}>
      <Head>
        <title>Sinterklaas</title>
        <meta name="description" content="Sinterklaas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex justify-center'>
        <div className=' text-white font-bold text-2xl mt-10 font-serif flex flex-col justify-center ml-4 mr-4'>
        {code != "kapoentje" && <div>
          <h1 className='mb-4 mt-20'>Beste Suze,</h1>
          
         
          <p>Dit jaar heeft Sint een iets ander soort gedicht voor je.</p>
          <p>De Sint heeft besloten dat je niet zo lief bent geweest.</p>
          <p>Om toegang te krijgen tot je kadootjes, moet je een wachtwoord raden.</p>
          
          </div>}
          <div className='mt-10 flex- flex-col'>
          <input value={code} onChange={(e) => setCode(e.target.value)} type="password" className='text-black w-40'/>
          </div>
          <div className='mt-2 font-serif'>
            {code == "kapoentje" && <p className='mt-10 text-4xl font-serif text-white'>Open de pakjes!</p>}
            {code != "kapoentje" && code.length != 0 && <div><p className='text-yellow-500 mt-10'>Onee. Geen Kado!</p><img className='h-52 w-82' src="https://i.imgur.com/MHTsAUO.png" alt="" /></div>}
            {code.length == 0 && <p className='text-blue-500'>Vul een wachtwoord in</p>}
            
          </div>
          <div>

          </div>
        </div>
        </div>
      

      
    </div>
  )
}

export default Home
