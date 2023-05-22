"use client";
import Link from "next/link";
import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:8000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center h-screen"
    >
      <input
        type="text"
        placeholder="Enter your Name"
        className="border my-2 px-4 py-1 w-60 rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your Email"
        className="border my-2 px-4 py-1 w-60 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your Password"
        className="border my-2 px-4 py-1 w-60 rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="button">
        Register
      </button>

      <Link
        href="/login"
        className="txt-gradient hover:text-black transition-all duration-300"
      >
        Already have an account Login here!
      </Link>
    </form>
  );
}
