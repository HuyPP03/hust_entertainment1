import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <section className="h-screen">
      <h1 className="text-center text-primary text-4xl pt-10">Login</h1>
      <form className="block max-w-sm mx-auto">
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
        <div className="flex justify-end items-center pt-4">
          <span className="text-sm font-semibold">
            Don&apos;t you have an account?
          </span>
          <Link href="/register" className="text-primary font-semibold text-sm">
            Register
          </Link>
        </div>
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>
        <button className="flex gap-4 justify-center">
          <Image src={"/google.jpg"} alt={""} width={24} height={24} />
          Login with google
        </button>
      </form>
    </section>
  );
}
