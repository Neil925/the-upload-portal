import React, { useEffect, useState } from 'react'
import { FaFile } from "react-icons/fa";
import { FaFileArrowUp } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function DemoUpload() {
  /**@type {HTMLSpanElement}*/
  let nameSpan;
  /**@type {HTMLSpanElement}*/
  let sizeSpan;
  /**@type {HTMLSpanElement}*/
  let fileTypeSpan;
  /**@type {HTMLInputElement}*/
  let fileInputElement;
  /**@type {HTMLInputElement}*/
  let sizeInputElement;
  /**@type {HTMLParagraphElement}*/
  let slideTextEl;

  const [sliderSize, setSliderSize] = useState(230000000);

  useEffect(() => {
    nameSpan = document.querySelector("#demo-filename");
    sizeSpan = document.querySelector("#demo-filesize");
    fileTypeSpan = document.querySelector("#demo-filetype");
    fileInputElement = document.querySelector("#demo-input");
    sizeInputElement = document.querySelector("#demo-slider");
    slideTextEl = document.querySelector("#demo-slider-text");
  });

  function fileInput(_) {
    if (fileInputElement.files.length === 1)
      updateForFile(fileInputElement.files[0]);
  }

  function dragOver(ev) {
    ev.preventDefault();
  }

  /**
    * @param {import('react').DragEventHandler<HTMLDivElement>} ev
    */
  function fileDrop(ev) {
    ev.preventDefault();
    ev.stopPropagation();

    updateForFile(ev.dataTransfer.files[0]);
  }

  function fileSizeToString(size) {
    if (size >= 1000000000)
      return `${(size / 1000000000, 2).toFixed(2)} Gb`;
    else if (size >= 1000000)
      return `${(size / 1000000).toFixed(2)} Mb`;
    else if (size >= 1000)
      return `${(size / 1000).toFixed(2)} Kb`;
    else
      return `${(size)} bytes`;
  }

  /**@param {File} file*/
  function updateForFile(file) {
    nameSpan.innerText = file.name;
    sizeSpan.innerText = fileSizeToString(file.size);
    fileTypeSpan.innerText = file.type;

    updateFileSizeTester(file.size);
  }

  /**@param {number} size*/
  function updateFileSizeTester(size) {
    sizeInputElement.value = size;
    slideTextEl.innerText = fileSizeToString(size);
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
                <p id='demo-filename' className='font-bold text-3xl'>No File Submitted</p>
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
                    ><RiArrowDropDownLine /></div>
                    <div for="experation" className='w-3/4 text-right bg-primary rounded-r-xl p-2 h-full font-bold' />
                  </div>
                </div>
              </div>
              <div className='w-1/2 place-content-center p-2'>
                <input type="file" id="demo-input" hidden
                  onChange={fileInput}
                />
                <label for="demo-input">
                  <div onDragOver={dragOver} onDrop={fileDrop}
                    className='text-right bg-primary rounded-lg p-3 lg:p-5 h-fit text-xl flex items-center w-fit cursor-pointer'

                  >
                    <FaFileArrowUp className='text-4xl md:text-5xl lg:text-6xl' />
                    <b className='text-2xl md:text-3xl lg:text-5xl ml-5 w-full text-center'>Upload</b>
                  </div>
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
            type="range" min="1" max="5000000000" value="230000000" onChange={val => setSliderSize(val)} id="demo-slider" name='demo-slider' step="1000000" />
          <label htmlFor='demo-slider' className='w-1/6 font-bold text-center text-2xl' id='demo-slider-text'>230 mb</label>
        </div>
      </div>
    </div>
  )
}

