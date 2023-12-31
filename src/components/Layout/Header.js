"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export function Header() {
  const { data: session, status, update } = useSession();
  let userName = session?.user.name || session?.user.email;
  if (userName && userName.includes(" ")) {
    userName = userName.split(" ")[userName.split(" ").length - 1];
  }
  return (
    <header className="flex items-center justify-between py-6 border-b-2 sticky top-0 bg-white z-50">
      <Link className="text-primary font-semibold text-2xl" href="/">
        HUSTENTERTAINMENT
      </Link>
      <nav className="flex items-center gap-6 text-gray-500 font-semibold">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/about">About</Link>
        <Link href="contact">Contact</Link>
        {status === "unauthenticated" && (
          <>
            <Link
              href="/register"
              className="bg-while rounded-full text-gray-500 px-6 py-2 border-solid border-primary border-2"
            >
              Register
            </Link>
            <Link
              href="/login"
              className="bg-primary rounded-full text-white px-6 py-2 border-solid border-primary border-2"
            >
              Login
            </Link>
          </>
        )}
        {status === "authenticated" && (
          <>
            <Link href="/profile" className="whitespace-nowrap">
              Hello, {userName}
            </Link>
            <button
              onClick={() => signOut()}
              className="bg-primary rounded-full text-white px-6 py-2 border-solid border-primary border-2"
            >
              Log Out
            </button>
          </>
        )}
      </nav>
    </header>
  );
}
