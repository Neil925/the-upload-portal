import React from 'react'
import { FaFile } from "react-icons/fa";
import { FaFileArrowUp } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function DemoUpload() {

  /** @param {MouseEvent} ev **/
  function submitFile(ev) {
    ev.preventDefault();
    let selectEl = document.querySelector("select");//#demo-expiration
    //HACK: Might have to go about this differently.
  }

  return (
    <div className='border-2 border-white row-span-2 h-[80vh] lg:h-full'>
      <div className='h-3/4 '>
        <h2 className='font-bold text-3xl h-[10%]'>Demo Zone</h2>
        <div className='w-full h-[90%] bg-neutral-800 bg-gradient-to-r from-bgGradientR to-bgGradientL place-content-center flex items-center'>
          <form className='outline-8 outline-secondary outline-dashed w-[99%] h-[99%] z-[0] grid grid-cols-1 md:grid-cols-2' >
            <FaFile className='text-white text-6xl lg:text-8xl self-center mx-auto' />
            <div className='self-center h-full w-full flex items-center place-content-center lg:place-content-start'>
              <div className='text-xl font-mono'>
                <p id='demo-filename'><b>No File Submitted</b></p>
                <p><b>File size: </b><span id='demo-filesize'></span></p>
                <p><b>File type: </b><span id='demo-filetype'></span></p>
              </div>
            </div>
            <div className='flex justify-center lg:col-span-2'>
              <div className='w-1/2 flex justify-center items-center'>
                <div className='w-32 lg:w-48 h-12 place-content-center'>
                  <select
                    className='z-50 absolute w-32 lg:w-48 h-12 text-right p-2 appearance-none bg-transparent text-xl font-bold'
                    name="expiration" id="demo-expiration">
                    <option value={1800}>30 minutes</option>
                    <option value={3600}>1 hour</option>
                    <option value={86400}>1 day</option>
                    <option value={604800}>1 week</option>
                    <option value={2592000}>1 month</option>
                  </select>
                  <div className='flex h-full'>
                    <div
                      className='bg-primary rounded-l-xl p-2 border-r-4 border-black h-full w-1/4 text-5xl font-bold items-center flex'
                      onClick={handleButton}
                    ><RiArrowDropDownLine /></div>
                    <div for="experation" className='w-3/4 text-right bg-primary rounded-r-xl p-2 h-full font-bold' />
                  </div>
                </div>
              </div>
              <div className='w-1/2 place-content-center p-2'>
                <input type="file" id="demo-upload" hidden />
                <label for="demo-upload">
                  <button onClick={submitFile}
                    className='text-right bg-primary rounded-lg p-3 lg:p-5 h-fit text-xl flex items-center'>
                    <FaFileArrowUp className='text-4xl md:text-5xl lg:text-6xl' />
                    <b className='text-2xl md:text-3xl lg:text-5xl ml-5 w-full text-center'>Upload</b>
                  </button>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className='place-content-center h-1/4'>
        <p className='flex justify-between'>
          <h3 className='font-bold text-3xl'>File Size Tester</h3>
          <p className='font-bold text-xl text-green-400'>Safe</p>
        </p>
        <div className='bg-primary place-content-center p-2 rounded-lg flex'>
          <input className='w-5/6'
            type="range" min="1" max="100" value="50" id="fileSizeSlider" />
          <p className='w-1/6 font-bold text-center text-2xl'>230 mb</p>
        </div>
      </div>
    </div>
  )
}

