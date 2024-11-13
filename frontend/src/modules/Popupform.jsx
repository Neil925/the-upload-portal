import React, { useEffect, useRef, useState } from "react";

export default function PopupForm({ trigger }) {
  useEffect(() => {
    if (trigger === 0) return;

    showModal();
  }, [trigger]);

  useEffect(() => {
    const el = dialogRef.current;

    el.addEventListener("click", function (event) {
      const rect = el.getBoundingClientRect();
      const isInDialog = rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX && event.clientX <= rect.left + rect.width;
      if (!isInDialog) {
        el.close();
      }
    });
  });

  /**@type {import('react').MutableRefObject<HTMLDialogElement>}*/
  const dialogRef = useRef(null);

  /**@type {import('react').MutableRefObject<HTMLFormElement>}*/
  const formRef = useRef(null);

  /**@type {import('react').MutableRefObject<HTMLInputElement>}*/
  const unameRef = useRef(null);

  /**@type {import('react').MutableRefObject<HTMLInputElement>}*/
  const emailRef = useRef(null);

  /**@type {import('react').MutableRefObject<HTMLInputElement>}*/
  const passRef = useRef(null);

  /**@type {import('react').MutableRefObject<HTMLInputElement>}*/
  const rePassRef = useRef(null);

  /**@type {import('react').MutableRefObject<HTMLInputElement>}*/
  const birthRef = useRef(null);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, SetRePassword] = useState("");
  const [birthday, setBirthday] = useState("");

  const [validForm, setValidForm] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const showModal = () => dialogRef.current.showModal();

  function validated() {
    if (username && email && password && password === rePassword && birthday) {
      setValidForm(true);
      setError(null);
      return;
    }

    setValidForm(false);
  }

  /**@param {HTMLInputElement} target*/
  const makeValid = (target) => {
    target.classList.remove("border-2");
    target.classList.remove("border-red-500");
    target.classList.remove("bg-[#725656]");
    target.classList.add("bg-neutral-500");
  };

  /**@param {HTMLInputElement} target*/
  const makeInvalid = (target, error) => {
    target.classList.remove("bg-neutral-500");
    target.classList.add("border-2");
    target.classList.add("border-red-500");
    target.classList.add("bg-[#725656]");

    setError(error);
  };


  useEffect(() => {
    unameRef.current.addEventListener("change", (ev) => {
      if (ev.target.value === "")
        makeInvalid(ev.target, "Username can't be empty.");
      else
        makeValid(ev.target);
    });

    emailRef.current.addEventListener("change", (ev) => {
      if (emailRef.current.validity.valid)
        makeValid(ev.target);
      else
        makeInvalid(ev.target, "Invalid email.");
    });

    const checkPass = (_ev) => {
      if (passRef.current.value !== rePassRef.current.value) {
        makeInvalid(passRef.current, "Passwords must match.");
        makeInvalid(rePassRef.current, "Passwords must match.");
      }
      else {
        makeValid(passRef.current);
        makeValid(rePassRef.current);
      }
    }

    passRef.current.addEventListener("change", checkPass);
    rePassRef.current.addEventListener("change", checkPass);

    birthRef.current.addEventListener("change", (ev) => {
      if (birthRef.current.validity.valid)
        makeValid(ev.target);
      else
        makeInvalid(ev.target, "Invalid birthdate.");
    });

    birthRef.current.addEventListener("focusout", (ev) => {
      if (birthRef.current.validity.valid)
        makeValid(ev.target);
      else
        makeInvalid(ev.target);
    });
  }, []);

  /**@param {import("../../../node_modules/@types/react/index.d.ts").FormEvent} ev*/
  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const response = await fetch(`/createuser`, {
      method: "POST",
      body: JSON.stringify({ username, email, password, birthday }),
      headers: { "Content-type": "application/json" },
    });

    if (response.ok) {
      formRef.current.classList.add("collapse");
      setSuccess("Sign up Successful!");

      setUsername("");
      setEmail("");
      setPassword("");
      SetRePassword("");
      setBirthday("");

      setTimeout(() => {
        dialogRef.current.close();
        formRef.current.classList.remove("collapse");
        setSuccess(null);
      }, 3000);

      return;
    }

    let text = await response.text();

    if (text === "User already exists!") {
      setError("This account already exists.")
      return;
    }

    setError(`Could not sign up!\n${response.status} ${text}`);
  };

  return (
    <dialog
      ref={dialogRef}
      className="bg-neutral-700 p-4 rounded-lg text-white backdrop:bg-black backdrop:bg-opacity-80 overflow-clip max-w-[95vw] md:max-w-[80vw] lg:max-w-[500px]"
    >
      {success && <div className="h-full w-full text-3xl text-green-500 font-bold flex justify-center items-center align-middle ">
        {success}
      </div>}
      <form ref={formRef}>
        <h3 className="font-bold text-3xl mb-5">Create Account</h3>
        <fieldset className="flex flex-col space-y-5">
          <input
            ref={unameRef}
            type="text"
            id="su-username"
            name="username"
            placeholder="Username"
            required
            className="rounded-lg bg-neutral-500 p-2 invalid:border-red"
            value={username}
            onChange={x => { setUsername(x.target.value); validated(); }}
          />
          <input
            ref={emailRef}
            type="email"
            id="su-email"
            name="email"
            placeholder="Email"
            required
            className="rounded-lg bg-neutral-500 p-2 invalid:border-red"
            value={email}
            onChange={x => { setEmail(x.target.value); validated() }}
          />
          <input
            ref={passRef}
            type="password"
            id="su-password"
            name="password"
            placeholder="Password"
            required
            className="rounded-lg bg-neutral-500 p-2 invalid:border-red"
            value={password}
            onChange={x => { setPassword(x.target.value); validated() }}
          />
          <input
            ref={rePassRef}
            type="password"
            id="su-repassword"
            name="repassword"
            placeholder="Re-type password"
            required
            className="rounded-lg bg-neutral-500 p-2 "
            value={rePassword}
            onChange={x => { SetRePassword(x.target.value); validated() }}
          />
          <input
            ref={birthRef}
            type="date"
            id="su-birthday"
            name="birthday"
            required
            className="rounded-lg bg-neutral-500 p-2 invalid:border-red"
            value={birthday}
            onChange={x => { setBirthday(x.target.value); validated() }}
          />
          {error && <div className="text-red-500">{error}</div>}
          <button
            className="rounded-lg p-2 bg-primary font-bold text-lg disabled:opacity-30 disabled:cursor-not-allowed"
            onClick={handleSubmit}
            disabled={!validForm}
          >
            Sign Up
          </button>
        </fieldset>
      </form>
    </dialog>
  );
}
