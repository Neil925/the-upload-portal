import React, { useState } from 'react'
import PopupForm from '../../modules/popupform/Popupform';
import Logo from "../../resources/Logo.png";
import DemoUpload from '../../modules/DemoUpload';
import placeHolder from '../../resources/placeholder.png';
import video from '../../resources/SaveClip.App_994B7C08A3A6CE8A66AE9E0946A7DDB9_video_dashinit.mov';

export default function Signup() {
  const [trigger, setTrigger] = useState(0);

  return (
    <div className='flex-grow text-white'>
      <PopupForm trigger={trigger} />
      <header className='pt-5 mx-auto px-4 md:px-10'>
        <div className='bg-neutral-950 fixed h-full w-full left-0 top-0 z-[-1] bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,#272727,#3E3E3E)]' />
        <nav className='flex w-full justify-between'>
          <img className='w-32 md:w-52 object-contain' alt="Logo" src={Logo} />
          <div className='place-content-center'>
            <button
              className='p-2 h-fit rounded-md bg-primary'
              onClick={() => setTrigger(x => x + 1)}
            ><b className='text-lg md:text-2xl'>Sign Up!</b></button>
          </div>
        </nav>
      </header>
      <main className=''>
        <div className='mx-auto px-4 md:px-10 min-h-[90vh] grid grid-cols-1 lg:grid-cols-2'>
          <div className='pb-5'>
            <h1 className='text-5xl md:text-6xl lg:text-8xl font-bold pt-10'>
              <span className='bg-gradient-to-r from-purple-500 via-primary to-purple-800 bg-clip-text text-transparent'>Upload</span> And<br />
              <span className='bg-gradient-to-r from-purple-500 via-primary to-purple-800 bg-clip-text text-transparent'>Share</span> With <br />
              <span className='text-secondary'>Ease</span>!
            </h1>
            <div className='text-xl lg:text-3xl font-bold mt-5'>Make files simple.</div>
          </div>
          <DemoUpload />
          <div className='place-content-center font-bold align-bottom flex gap-3 min-h-fit'>
            <div
              className='bg-secondary text-lg lg:text-3xl text-center p-2 rounded-xl self-center aspect-square place-items-center w-24 lg:w-fit flex justify-center items-center'
            ><p>Share<br />with<br />anyone</p></div>
            <div
              className='bg-primary text-lg text-center p-2 rounded-xl self-center mt-24 aspect-square flex justify-center items-center'
            ><p>Fast<br />download</p></div>
            <div
              className='bg-secondary text-2xl text-center p-2 rounded-xl self-center mb-24 aspect-square place-items-center flex justify-center items-center'
            ><p>Fully<br />encrypted<br />files</p></div>
          </div>
        </div>
        <div className='bg-secondary w-full lg:h-[70vh] justify-center p-4'>
          <div className='flex flex-col space-y-10 md:flex-row h-full justify-evenly md:place-content-center place-items-center'>
            <div className='w-full md:w-1/2 space-y-3 pr-2'>
              <div className='flex flex-wrap gap-3 justify-center'>
                <img alt='img' src={placeHolder} className='w-40 md:w-1/3 self-stretch' />
                <img alt='img' src={placeHolder} className='w-40 md:w-1/3 self-stretch' />
                <img alt='img' src={placeHolder} className='w-40 md:w-1/3 self-stretch' />
                <img alt='img' src={placeHolder} className='w-40 md:w-1/3 self-stretch' />
                <img alt='img' src={placeHolder} className='w-40 md:w-1/3 self-stretch' />
              </div>
            </div>
            <div className='w-full md:w-1/2 flex justify-center items-center pl-2'>
              <video alt='demo-video' className='border-2 border-white w-full' controls >
                <source src={video} />
              </video >
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
