import React, { useEffect } from 'react'

export default function PopupForm({ trigger }) {
  console.log(trigger);

  useEffect(() => {
    if (trigger === 0) return;

    showModal();
  }, [trigger]);

  const showModal = () => {
    let el = document.querySelector("dialog");
    el.showModal();
  }

  return (
    <dialog
      className='bg-neutral-700 p-4 rounded-lg text-white backdrop:bg-black backdrop:bg-opacity-80'>
      <form className=''>
        <h3 className='font-bold text-3xl mb-5'>Create Account</h3>
        <fieldset className='flex flex-col space-y-5'>
          <input type="text" id='su-username' name='username' placeholder='Username' required
            className='rounded-lg bg-neutral-500 p-2 invalid:border-red'
          />
          <input type="email" id='su-email' name='email' placeholder='Email' required
            className='rounded-lg bg-neutral-500 p-2 invalid:border-red'
          />
          <input type="password" id='su-password' name='password' placeholder='Password' required
            className='rounded-lg bg-neutral-500 p-2 invalid:border-red'
          />
          <input type="password" id='su-repassword' name='repassword' placeholder='Re-type password' required
            className='rounded-lg bg-neutral-500 p-2 '
          />
          <input type="date" id='su-birthday' name='birthday' required
            className='rounded-lg bg-neutral-500 p-2 invalid:border-red'
          />
          <button className='rounded-lg p-2 bg-primary font-bold text-lg'>
            Sign Up
          </button>
        </fieldset>
      </form>
    </dialog>
  )
}

