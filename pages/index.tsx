import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

const Home: NextPage = () => {
  const [code, setCode] = useState<string>("")
  const [isAcces, setIsAcces] = useState<boolean>(false)

  
  return (
    <div className='bg-black min-h-screen h-full'>
      <Head>
        <title>Sinterklaas</title>
        <meta name="description" content="Sinterklaas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex justify-center'>
        <div className=' text-white font-bold text-2xl mt-10 font-sans flex flex-col justify-center ml-4 mr-4'>
          <h1 className='mb-4 mt-20'>Beste Suze,</h1>
          
          <p>Wat goed dat je deze pagina hebt gevonden.</p>
          <p>Dit jaar heeft Sint een iets ander soort gedicht voor je.</p>
          <p>De Sint heeft besloten dat je niet lief bent geweest dit jaar.</p>
          <p>Om toegang te krijgen tot je kadootjes, moet je een wachtwoord raden.</p>

          <div className='mt-10 flex- flex-col'>
          <input value={code} onChange={(e) => setCode(e.target.value)} type="password" className='text-black w-40'/>
          </div>
          <div className='mt-2 font-mono'>
            {code == "netflix" && <p className='text-green-500'>Sloop de TV binnen 1 minuut.</p>}
            {code != "netflix" && code.length != 0 && <p className='text-red-500'>Fout wachtwoord</p>}
            {code.length == 0 && <p className='text-blue-500'>Vul een wachtwoord in</p>}
            
          </div>
        </div>
        </div>
      

      
    </div>
  )
}

export default Home
