"use client";

import { useState } from "react";

interface LoginModalProps {
  setStatus: (atus: string) => void;
}

export default function LoginModal({ setStatus }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, innerMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    setStatus('writen data was sent to DB and input fields were cleared');

    setEmail("");
    setPassword("");
  };

  return (
    <div className="z-10 w-full items-center flex justify-center fixed inset-0 p-4">
      <div className="w-full max-w-xl p-6 bg-gray flex rounded-xl justify-center flex-col">
        <h1 className="text-white text-3xl">Entre em uma conta</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full mt-5 gap-2 flex flex-col items-start"
        >
          <div className="flex flex-col mb-4 gap-2 w-full">
            <label className="block text-base text-neutral-300" htmlFor="email">
              Email
            </label>
            <input
              onMouseEnter={() =>
                setStatus("email input that activates setEmail( ) function")
              }
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setStatus(`email const is now "${e.target.value}"`);
              }}
              className="bg-sage w-full p-3 text-sm text-gray-700 rounded-md hover:bg-lightsage transition-all"
            />
          </div>
          <div className="flex flex-col mb-4 gap-2 w-full">
            <label
              className="block text-base text-neutral-300"
              htmlFor="password"
            >
              Senha
            </label>
            <input
              onMouseEnter={() =>
                setStatus("password input that activates setPassword( ) function")
              }
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setStatus(`email const now has a length of ${e.target.value.length} characters`);
              }}
              className="bg-sage w-full p-3 text-sm text-gray-700 rounded-md hover:bg-lightsage transition-all"
            />
          </div>
          <button
           onMouseEnter={() =>
            setStatus("submit button")
          }
            type="submit"
            className="font-medium mt-4 w-40 px-10 py-3 text-white bg-black text-base rounded-md hover:bg-green hover:w-60 transition-all"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
