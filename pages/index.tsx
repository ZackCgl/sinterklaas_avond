import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'

const Home: NextPage = () => {
  const RIGHT_CODE = "kapoentje"
  const [inputCode, setInputCode] = useState<string>("")

  return (
    //check if the code is passed and change background
    <div className={`${inputCode == RIGHT_CODE ? 
    "bg-[url('https://thumbs.gfycat.com/WealthyOldfashionedDromaeosaur-size_restricted.gif')]" : 
    'bg-[url("https://media.tenor.com/M1z8DYZXVjkAAAAd/wallpaper.gif")] bg-cover'} 
    bg-center min-h-screen h-full`}>
      
      <Head>
        <title>Sinterklaas</title>
        <meta name="description" content="Sinterklaas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className='flex justify-center'>
        <div className=' text-white font-bold text-2xl mt-10 font-serif flex flex-col justify-center ml-4 mr-4'>
          {inputCode != RIGHT_CODE && 
          <div>
            <h1 className='mb-4 mt-20'>Beste Suze,</h1>
            <p>De Sint heeft besloten dat je niet zo lief bent geweest.</p>
            <p>Om toegang te krijgen tot je kadootjes, moet je een wachtwoord raden.</p>
          </div>}

          {/*input password/code */}
          <form className='mt-10 flex- flex-col'>
            <input value={inputCode} name="inputCode" onChange={(e) => setInputCode(e.target.value)} 
            type="password" className='text-black w-40'/>
          </form>

          {/*output */}
          <div className='mt-2 font-serif'>
            {/*no input */}
            {inputCode.length == 0 && <p className='text-blue-500'>Vul een wachtwoord in</p>}

            {/*wrong input */}
            {inputCode != RIGHT_CODE && inputCode.length != 0 && <div><p className='text-red-500 mt-10'>Fout, geen kado!</p>
            <img className='h-52 w-82' src="https://i.imgur.com/MHTsAUO.png" alt="" /></div>}

            {/*right input */}
            {inputCode == RIGHT_CODE && <p className='mt-10 text-4xl font-serif text-white'>Open de pakjes!</p>}
           
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
