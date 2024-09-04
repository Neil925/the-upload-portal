import React from 'react'
import PopupForm from '../../modules/popupform/Popupform';
import Logo from "../../resources/Logo.png";
import { FaFile } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Signup() {
  let popup = (<PopupForm />);

  /** @param {MouseEvent} ev **/
  function handleButton(ev) {
    ev.preventDefault();
    let selectEl = document.querySelector("select");//#demo-expiration
    //HACK: Might have to go about this differently.
  }

  return (
    <div className='container py-5 mx-auto px-4 md:px-10 flex-grow text-white'>
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
        <main className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='border-2 border-white '>
            <h1 className='text-8xl font-bold pt-20'>
              <span className='bg-gradient-to-r from-purple-500 via-primary to-purple-800 bg-clip-text text-transparent'>Upload</span> And<br />
              <span className='bg-gradient-to-r from-purple-500 via-primary to-purple-800 bg-clip-text text-transparent'>Share</span> With <br />
              <span className='text-secondary'>Ease</span>!
            </h1>
            <div className='text-3xl font-bold mt-5'>Make files simple.</div>
          </div>
          <div className='border-2 border-white '>
            <h2 className='font-bold text-3xl'>Demo Zone</h2>
            <div className='w-full h-96 bg-neutral-800 bg-gradient-to-r from-bgGradientR to-bgGradientL place-content-center flex items-center'>
              <form className='outline-8 outline-secondary outline-dashed w-[99%] h-[97%] z-[0] grid grid-cols-1 md:grid-cols-2' >
                <FaFile className='text-white text-8xl self-center mx-auto' />
                <div className='self-center mx-auto'>
                  <p id='demo-filename'>No File Submitted</p>
                  <p>File size: <span id='demo-filesize'></span></p>
                  <p>File type: <span id='demo-filetype'></span></p>
                </div>
                <div className='self-center mx-auto flex content-center'>
                  <div
                    className=' absolute bg-primary rounded-l-xl p-2 border-r-4 border-black h-12 w-12 text-5xl font-bold items-center flex'
                    onClick={handleButton}
                  ><RiArrowDropDownLine /></div>
                  <select
                    className='w-48 text-right bg-primary rounded-xl p-2 text-xl h-12 font-bold appearance-none'
                    name="expiration" id="demo-expiration">
                    <option value={1800}>30 minutes</option>
                    <option value={3600}>1 hour</option>
                    <option value={86400}>1 day</option>
                    <option value={604800}>1 week</option>
                    <option value={2592000}>1 month</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
