"use client";
import Link from "next/link";
import { useState } from "react";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center h-screen"
    >
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
        Login
      </button>

      <Link
        href="/register"
        className="txt-gradient hover:text-black transition-all duration-300"
      >
        Don't have any account Register here!
      </Link>
    </form>
  );
}
