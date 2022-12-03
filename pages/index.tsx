import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'

const Home: NextPage = () => {
  const RIGHT_CODE = "kapoentje"
  const [inputCode, setInputCode] = useState<string>("")
  const inputRef:any = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    //check if the code is passed and change background
    <div className={`${inputCode == RIGHT_CODE ? 
    "bg-[url('https://thumbs.gfycat.com/WealthyOldfashionedDromaeosaur-size_restricted.gif')]" : 
    'bg-[url("https://i.imgur.com/jLcUw0M.gif")] bg-cover'} 
    bg-center min-h-screen h-full`}>
      
      <Head>
        <title>Sinterklaas</title>
        <meta name="description" content="Sinterklaas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className='flex justify-center'>
        <div className=' text-white font-bold text-2xl mt-28 font-serif flex flex-col justify-center ml-4 mr-4'>
          {inputCode != RIGHT_CODE && 
          <div>
            <h1 className='mb-4 mt-20'>Beste Suze,</h1>
            <p>Om toegang te krijgen tot je pakjes, moet een wachtwoord zoeken.</p>
            <p>Sinterklaas heeft het wachtwoord in de Netflix TV verstopt.</p>
          </div>}

          {/*input password/code */}
          <form className='mt-10 flex- flex-col'>
            <input placeholder='wachtwoord' ref={inputRef} value={inputCode} name="inputCode" onChange={(e) => setInputCode(e.target.value.toLowerCase())} 
            type="password" className='text-black w-40'/>
          </form>

          {/*output */}
          <div className='mt-2 font-serif'>
            {/*no input */}
            {inputCode.length == 0 && <p className='text-white'></p>}

            {/*wrong input */}
            {inputCode != RIGHT_CODE && inputCode.length != 0 && <div><p className='text-white mt-10'>Fout, geen kado!</p>
            </div>}

            {/*right input */}
            
            {inputCode == RIGHT_CODE && <p className='mt-10 text-4xl font-serif text-white'>De pakjes liggen in de schuur.</p>}

          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
