import React, { useEffect, useState, useRef } from 'react'

export default function PopupForm({ trigger }) {
  useEffect(() => {
    if (trigger === 0) return;

    showModal();
  }, [trigger]);

  useEffect(() => {
    let el = dialogRef.current;

    el.addEventListener('click', function(event) {
      let rect = el.getBoundingClientRect();
      let isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
      if (!isInDialog) {
        el.close();
      }
    });
  })

  /**@type {import('react').MutableRefObject<HTMLDialogElement>}*/
  const dialogRef = useRef(null);

  const [data, setData] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
    rePassword: undefined,
    birthdate: undefined
  });

  const showModal = () => dialogRef.current.showModal();

  const handleSubmit = (ev) => {
    ev.preventDefault();

    console.log(data);
  }

  return (
    <dialog ref={dialogRef}
      className='bg-neutral-700 p-4 rounded-lg text-white backdrop:bg-black backdrop:bg-opacity-80'>
      <form className=''>
        <h3 className='font-bold text-3xl mb-5'>Create Account</h3>
        <fieldset className='flex flex-col space-y-5'>
          <input type="text" id='su-username' name='username' placeholder='Username' required
            className='rounded-lg bg-neutral-500 p-2 invalid:border-red' onChange={x => setData({ ...data, username: x.target.value })}
          />
          <input type="email" id='su-email' name='email' placeholder='Email' required
            className='rounded-lg bg-neutral-500 p-2 invalid:border-red' onChange={x => setData({ ...data, email: x.target.value })}
          />
          <input type="password" id='su-password' name='password' placeholder='Password' required
            className='rounded-lg bg-neutral-500 p-2 invalid:border-red' onChange={x => setData({ ...data, password: x.target.value })}
          />
          <input type="password" id='su-repassword' name='repassword' placeholder='Re-type password' required
            className='rounded-lg bg-neutral-500 p-2 ' onChange={x => setData({ ...data, rePassword: x.target.value })}
          />
          <input type="date" id='su-birthday' name='birthday' required
            className='rounded-lg bg-neutral-500 p-2 invalid:border-red' onChange={x => setData({ ...data, birthdate: x.target.value })}
          />
          <button className='rounded-lg p-2 bg-primary font-bold text-lg' onClick={handleSubmit}>
            Sign Up
          </button>
        </fieldset>
      </form>
    </dialog>
  )
}

