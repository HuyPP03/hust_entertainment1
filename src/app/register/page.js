import Image from "next/image";
import Link from "next/link";

const Register = () => {
  return (
    <section className="h-screen">
      <h1 className="text-center text-primary text-4xl pt-10">Register</h1>
      <form className="block max-w-sm mx-auto">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
        {false && (
          <div className="text-center text-primary text-sm font-semibold pt-4">
            An error has occurred.
            <br />
            Please try again later or login
          </div>
        )}
        {false && (
          <div className="flex justify-end items-center pt-4">
            <span className="text-sm font-semibold">
              User created now you can &nbsp;
            </span>
            <Link href="/login" className="text-primary font-semibold text-sm">
              Login
            </Link>
          </div>
        )}
        <div className="flex justify-end items-center pt-4">
          <span className="text-sm font-semibold">
            Do you already have an account?
          </span>
          <Link href="/login" className="text-primary font-semibold text-sm">
            Login
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
};

export default Register;
