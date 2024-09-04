import React from 'react'
import PopupForm from '../../modules/popupform/Popupform';
import Logo from "../../resources/Logo.png";

export default function Signup() {
  let popup = (<PopupForm />);

  return (
    <div className='px-16 py-5 flex-grow text-white'>
      <div className='min-h-screen'>
        <header className=''>
          <div className='bg-neutral-950 fixed h-full w-full left-0 top-0 z-[-1] bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,#272727,#3E3E3E)]' />
          <nav className='flex w-full  justify-between'>
            <img className='w-52' alt="Logo" src={Logo} />
            <div className='place-content-center'>
              <button
                className='p-2 h-fit rounded-md bg-primary'
                onClick={() => console.debug(popup)}
              ><b className='text-2xl'>Sign Up!</b></button>
            </div>
          </nav>
        </header>
        <main className='flex'>
          <div className='border-2 border-white w-1/2'>
            <h1 className='text-8xl font-bold'>
              <span className='bg-gradient-to-r from-purple-500 via-primary to-purple-800 bg-clip-text text-transparent'>Upload</span> And<br />
              <span className='bg-gradient-to-r from-purple-500 via-primary to-purple-800 bg-clip-text text-transparent'>Share</span> With <br />
              <span className='text-secondary'>Ease</span>!
            </h1>
            <sub className='text-3xl font-bold mt-5'>Make files simple.</sub>
          </div>
          <div className='border-2 border-white w-1/2'>
            <h2>Demo Zone</h2>
          </div>
        </main>
      </div>
    </div>
  )
}
