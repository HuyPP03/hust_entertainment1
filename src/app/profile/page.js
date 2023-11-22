"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { use, useState } from "react";

export default function ProfilePage() {
  const { data: session, status, update } = useSession();
  const [userName, setUserName] = useState(session?.user?.name || " ");
  async function handleProfileInfoUpdate(e) {
    e.preventDefault();
    try {
      const response = await fetch("/api/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: userName }),
      });
    } catch (error) {
      console.log(error);
    }
  }
  if (status === "loading") {
    return "Loading...";
  } else if (status === "unauthenticated") {
    redirect("/login");
  }
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl pt-10">Profile</h1>
      <div className="max-w-lg mx-auto border">
        <div className="flex gap-2">
          <div>
            <div className="bg-gray-200 p-2 rounded-lg relative">
              <Image
                className="rounded-lg h-full w-full"
                src={session?.user.image}
                alt={""}
                width={100}
                height={100}
              />
              <button type="button">Change avatar</button>
            </div>
          </div>
          <form className="grow" onSubmit={handleProfileInfoUpdate}>
            <input
              type="text"
              placeholder="First and last name"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            ></input>
            <input
              type="email"
              placeholder="Email"
              disabled={true}
              value={session.user.email}
            />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </section>
  );
}
