import React, { useState } from "react";
import PopupForm from "../../modules/Popupform.jsx";
import DemoUpload from "../../modules/DemoUpload.jsx";
import Logo from "../../resources/Logo.png";
import img1 from "../../resources/img1.png";
import img2 from "../../resources/img2.png";
import img3 from "../../resources/img3.png";

export default function Signup() {
  const [trigger, setTrigger] = useState(0);

  return (
    <div className="flex-grow text-white">
      <PopupForm trigger={trigger} />
      <header className="pt-5 mx-auto px-4 md:px-10 h-[5vh] lg:h-[10vh]">
        <div className="bg-neutral-950 fixed h-full w-full left-0 top-0 z-[-1] bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,#272727,#3E3E3E)]" />
        <nav className="flex w-full justify-between ">
          <img className="w-32 md:w-52 object-contain" alt="Logo" src={Logo} />
          <div className="place-content-center">
            <button
              className="p-2 h-fit rounded-md bg-primary"
              onClick={() => setTrigger((x) => x + 1)}
            >
              <b className="text-lg md:text-2xl">Sign Up!</b>
            </button>
          </div>
        </nav>
      </header>
      <main className="">
        <div className="mx-auto px-4 md:px-10 min-h-[90vh] grid grid-cols-1 lg:grid-cols-2">
          <div className="pb-5">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold pt-10">
              <span className="bg-gradient-to-r from-purple-500 via-primary to-purple-800 bg-clip-text text-transparent">
                Upload
              </span>{" "}
              And<br />
              <span className="bg-gradient-to-r from-purple-500 via-primary to-purple-800 bg-clip-text text-transparent">
                Share
              </span>{" "}
              With <br />
              <span className="text-secondary">Ease</span>!
            </h1>
            <div className="text-xl lg:text-3xl font-bold mt-5">
              Make files simple.
            </div>
          </div>
          <DemoUpload />
          <div className="font-bold flex gap-2 justify-center pr-5 lg:justify-start min-h-fit items-end mb-5 lg:space-x-5">
            <div className="bg-primary p-2 rounded-xl aspect-square size-10 md:size-16 " />
            <div className="bg-secondary text-sm md:text-xl text-center p-2 rounded-xl size-20 md:size-28 flex justify-center items-center">
              <p>
                Fast<br />download
              </p>
            </div>
            <div className="bg-primary text-md md:text-2xl text-center p-2 rounded-xl flex justify-center items-center size-28 md:size-36">
              <p>
                Share<br />with<br />anyone
              </p>
            </div>
            <div className="bg-secondary text-sm md:text-xl text-center p-2 rounded-xl size-20 md:size-28 flex justify-center items-center">
              <p>
                Fully<br />encrypted<br />files
              </p>
            </div>
            <div className="bg-primary p-2 rounded-xl aspect-square size-10 md:size-16" />
          </div>
        </div>
        <div className="bg-secondary w-full lg:min-h-screen justify-center p-4">
          <h2 className="font-bold text-3xl md:text-5xl m-5 pb-5 lg:ml-28">
            See What It's Like
          </h2>
          <div className="flex flex-col space-y-10 md:flex-row lg:mt-16 h-full justify-evenly md:place-content-center place-items-center pb-5">
            <div className="w-full md:w-1/2 space-y-3 pr-2">
              <div className="flex flex-wrap gap-3 justify-center">
                <img
                  alt="img"
                  src={img1}
                  className="w-40 object-contain aspect md:w-1/3 self-stretch order-1"
                />
                <img
                  alt="img"
                  src={img2}
                  className="w-40 object-contain md:w-1/3 self-stretch order-3"
                />
                <img
                  alt="img"
                  src={img3}
                  className="w-40 object-contain md:w-1/3 order-4 self-stretch sm:order-2 md:order-4"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center pl-2">
              <video
                alt="demo-video"
                className="drop-shadow-[0px_0px_5px_rgba(255,255,255,0.9)] w-full rounded-md"
                autoPlay
                loop
                muted
              >
                <source src="/demo.mp4" />
              </video>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
