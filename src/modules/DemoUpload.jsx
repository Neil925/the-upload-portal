import React, { useState, useRef } from 'react'
import { FaFile } from "react-icons/fa";
import { FaFileArrowUp } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function DemoUpload() {
  /**@type {React.MutableRefObject<HTMLSpanElement>}*/
  let nameSpan = useRef(null);
  /**@type {React.MutableRefObject<HTMLSpanElement>}*/
  let sizeSpan = useRef(null);
  /**@type {React.MutableRefObject<HTMLSpanElement>}*/
  let fileTypeSpan = useRef(null);
  /**@type {React.MutableRefObject<HTMLInputElement>}*/
  let fileInputElement = useRef(null);
  /**@type {React.MutableRefObject<HTMLInputElement>}*/
  let sizeInputElement = useRef(null);
  /**@type {React.MutableRefObject<HTMLLabelElement>}*/
  let slideTextEl = useRef(null);
  /**@type {React.MutableRefObject<HTMLParagraphElement>}*/
  let sizeSafety = useRef(null);
  /**@type {React.MutableRefObject<HTMLDivElement>}*/
  let expirationEl = useRef(null);

  const [sliderSize, setSliderSize] = useState(230000000);

  function handleExpiration(ev) {
    expirationEl.current.textContent = ev.target.value;
  }

  function fileInput(_) {
    let el = fileInputElement.current;
    if (el.files.length === 1)
      updateForFile(el.files[0]);
  }

  function handleSliderChange(ev) {
    ev.preventDefault();
    updateFileSizeTester(ev.target.value);
  }

  function dragOver(ev) {
    ev.preventDefault();
  }

  /**@param {import('react').DragEventHandler<HTMLDivElement>} ev*/
  function fileDrop(ev) {
    ev.preventDefault();
    ev.stopPropagation();

    updateForFile(ev.dataTransfer.files[0]);
  }

  function fileSizeToString(size) {
    if (size >= 1000000000)
      return `${(size / 1000000000).toFixed(2)} Gb`;
    else if (size >= 1000000)
      return `${(size / 1000000).toFixed(2)} Mb`;
    else if (size >= 1000)
      return `${(size / 1000).toFixed(2)} Kb`;
    else
      return `${(size)} bytes`;
  }

  /**@param {File} file*/
  function updateForFile(file) {
    nameSpan.current.innerText = file.name;
    sizeSpan.current.innerText = fileSizeToString(file.size);
    fileTypeSpan.current.innerText = file.type;

    updateFileSizeTester(file.size);
  }

  /**@param {number} size*/
  function updateFileSizeTester(size) {
    setSliderSize(size);

    const inputElement = sizeInputElement.current;
    const safetyEl = sizeSafety.current;

    inputElement.value = size;
    slideTextEl.current.innerText = fileSizeToString(size);

    if (size > 3000000000) {
      safetyEl.textContent = "Too big!";
      safetyEl.classList.remove("text-green-400");
      safetyEl.classList.add("text-red-600");

      inputElement.setCustomValidity("Too big!");
    } else {
      safetyEl.textContent = "Safe";
      safetyEl.classList.remove("text-red-600");
      safetyEl.classList.add("text-green-400");
    }
  }

  return (
    <div className='row-span-2 h-[80vh] lg:h-full'>
      <div className='h-3/4 '>
        <h2 className='font-bold text-3xl h-[10%]'>Demo Zone</h2>
        <div className='w-full h-[90%] bg-neutral-800 bg-gradient-to-r from-bgGradientR to-bgGradientL place-content-center flex items-center'>

          <form onDragOver={dragOver} className="w-full h-full">

            <input type="file" ref={fileInputElement} hidden id='demo-input'
              onChange={fileInput}
            />
            <label htmlFor="demo-input" onDragOver={dragOver} onDrop={fileDrop}>
              <div className='outline-8 outline-secondary outline-dashed w-[99%] h-[99%] z-[0] grid grid-cols-1 md:grid-cols-2'>
                <FaFile className='text-white text-6xl md:text-8xl self-center mx-auto' />
                <div className='self-center h-full w-full flex items-center place-content-center lg:place-content-start'>
                  <div className='text-xl font-mono'>
                    <p ref={nameSpan} className='font-bold text-3xl'>No File Submitted</p>
                    <p><b>File size: </b><span ref={sizeSpan}></span></p>
                    <p><b>File type: </b><span ref={fileTypeSpan}></span></p>
                  </div>
                </div>
                <div className='flex justify-center md:col-span-2'>
                  <div className='w-1/2 flex justify-center items-center'>
                    <div className='w-32 md:w-48 h-12 place-content-center'>
                      <select
                        className='z-50 absolute w-32 md:w-48 h-12 text-right cursor-pointer p-2 appearance-none bg-transparent text-transparent'
                        name="expiration" id="demo-expiration" onChange={handleExpiration} defaultValue="30 minutes">
                        <option value="30 minutes">30 minutes</option>
                        <option value="1 hour">1 hour</option>
                        <option value="1 day">1 day</option>
                        <option value="1 week">1 week</option>
                        <option value="1 month">1 month</option>
                      </select>
                      <div className='flex h-full'>
                        <div
                          className='bg-primary rounded-l-xl p-2 border-r-4 border-black h-full w-1/4 text-8xl font-bold items-center flex'
                        ><RiArrowDropDownLine className='scale-[3] md:scale-150' /></div>
                        <div htmlFor="experation" ref={expirationEl}
                          className='text-center text-nowrap overflow-clip text-xl md:text-2xl w-3/4 bg-primary rounded-r-xl p-2 h-full font-bold'>
                          30 minutes
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='w-1/2 flex justify-center items-center'>
                    <div className='text-right bg-primary rounded-lg p-3 md:p-5 h-fit text-xl flex items-center w-fit cursor-pointer'
                    >
                      <FaFileArrowUp className='text-4xl md:text-6xl' />
                      <b className='text-2xl md:text-5xl ml-5 w-full text-center select-none'>Upload</b>
                    </div>
                  </div>
                </div>
              </div>
            </label>
          </form>
        </div>
      </div>
      <div className='place-content-center h-1/4'>
        <div className='flex justify-between'>
          <h3 className='font-bold text-3xl'>File Size Tester</h3>
          <p className='font-bold text-xl text-green-400' ref={sizeSafety}>Safe</p>
        </div>
        <div className='bg-primary place-content-center p-2 rounded-lg flex justify-between'>
          <input className='w-4/5'
            type="range" min={1} max={5000000000} defaultValue={230000000}
            onChange={handleSliderChange} ref={sizeInputElement} name='demo-slider' />
          <label htmlFor='demo-slider' className='font-bold font-mono text-center text-lg md:text-2xl w-1/5' ref={slideTextEl}>230 mb</label>
        </div>
      </div>
    </div>
  )
}

